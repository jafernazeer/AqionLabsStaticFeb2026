/**
 * Renders every route to static HTML so the site is readable without running
 * JavaScript. Agents, answer engines and any crawler that does not execute
 * scripts previously received an empty <div id="root"></div>.
 *
 * Uses the installed Chrome directly — no extra dependencies. Apache already
 * prefers real files over the SPA rewrite, so dist/<route>/index.html is served
 * automatically while client-side routing continues to work.
 */
import { execFileSync, spawn } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { SITE, metaFor } from './seo-routes.mjs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 4178;
const DIST = new URL('../dist/', import.meta.url).pathname;

const app = readFileSync(new URL('../App.tsx', import.meta.url), 'utf8');
const routes = [...new Set([...app.matchAll(/path="([^"]+)"/g)].map(m => m[1]))]
  .filter(p => p !== '*').sort();

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

const organisation = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AqionLabs',
  url: SITE,
  logo: `${SITE}/Aqionlabsicon-clean.png`,
  description: 'AqionLabs builds agentic AI for businesses in the UAE and GCC.',
  address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
  sameAs: [
    'https://www.linkedin.com/company/aqionlabs',
    'https://instagram.com/aqionlabs',
  ],
};

function headFor(path) {
  const { title, description } = metaFor(path);
  const url = `${SITE}${path}`;
  const ld = [organisation];
  if (path === '/') {
    ld.push({
      '@context': 'https://schema.org', '@type': 'WebSite', name: 'AqionLabs', url: SITE,
    }, {
      '@context': 'https://schema.org', '@type': 'SoftwareApplication',
      name: 'Aqion Vox', applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'AI voice agent that answers calls, qualifies leads and books meetings in Arabic and English.',
      offers: { '@type': 'Offer', priceCurrency: 'AED', price: '999' },
    });
  }
  return { title, description, url, ld };
}

// Spawn vite directly rather than through npx: the npx wrapper survives kill()
// and leaves the port held, which silently poisons the next run.
const viteBin = new URL('../node_modules/.bin/vite', import.meta.url).pathname;
const server = spawn(viteBin, ['preview', '--port', String(PORT), '--strictPort'], {
  cwd: new URL('..', import.meta.url).pathname, stdio: 'ignore', detached: true,
});
await new Promise(r => setTimeout(r, 4000));

let done = 0, failed = [];
try {
  for (const route of routes) {
    const { title, description, url, ld } = headFor(route);
    let html;
    try {
      html = execFileSync(CHROME, [
        '--headless', '--disable-gpu', '--no-sandbox', '--virtual-time-budget=7000',
        '--dump-dom', `http://localhost:${PORT}${route}`,
      ], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });
    } catch { failed.push(route); continue; }

    if (!html || html.length < 2000) { failed.push(route); continue; }

    // Per-route head: title, description, canonical, social and JSON-LD.
    html = html
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
      .replace(/<meta name="title"[^>]*>/, `<meta name="title" content="${esc(title)}" />`)
      .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`)
      .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`)
      .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(description)}" />`)
      .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
      .replace(/<meta property="twitter:title"[^>]*>/, `<meta property="twitter:title" content="${esc(title)}" />`)
      .replace(/<meta property="twitter:description"[^>]*>/, `<meta property="twitter:description" content="${esc(description)}" />`)
      .replace(/<meta property="twitter:url"[^>]*>/, `<meta property="twitter:url" content="${url}" />`)
      .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
      // The wave ribbon is a shared asset the browser fetches once and caches.
      // Chrome dumps the live DOM, so without this every page would carry its
      // own serialised copy — about 190KB each, on all 55 of them.
      .replace(/<svg[^>]*viewBox="0 0 1080 653"[\s\S]*?<\/svg>/g, '')
      .replace('</head>', `  <script type="application/ld+json">${JSON.stringify(ld)}</script>\n</head>`);

    const out = route === '/' ? join(DIST, 'index.html') : join(DIST, route.slice(1), 'index.html');
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, html);
    done++;
  }
} finally {
  try { process.kill(-server.pid, 'SIGTERM'); } catch { server.kill('SIGKILL'); }
}

console.log(`prerendered ${done}/${routes.length}`);
if (failed.length) console.log('failed:', failed.join(', '));
