/**
 * Writes robots.txt, llms.txt and sitemap.xml from the route map, so the three
 * never drift apart. Run before build.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { SITE, metaFor } from './seo-routes.mjs';

const app = readFileSync(new URL('../App.tsx', import.meta.url), 'utf8');
const paths = [...new Set([...app.matchAll(/path="([^"]+)"/g)].map(m => m[1]))]
  .filter(p => p !== '*').sort();

const today = new Date().toISOString().slice(0, 10);

// sitemap
const urls = paths.map(p => {
  const { priority } = metaFor(p);
  return `  <url>\n    <loc>${SITE}${p === '/' ? '/' : p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority.toFixed(1)}</priority>\n  </url>`;
}).join('\n');
writeFileSync(new URL('../public/sitemap.xml', import.meta.url),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`);

// robots — explicitly welcome the AI crawlers as well as the search engines
writeFileSync(new URL('../public/robots.txt', import.meta.url),
`User-agent: *
Allow: /

# AI assistants and answer engines are welcome to read and cite this site.
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-Web
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: CCBot
Allow: /
User-agent: Bytespider
Allow: /
User-agent: Amazonbot
Allow: /
User-agent: meta-externalagent
Allow: /

Sitemap: ${SITE}/sitemap.xml
`);

// llms.txt — the emerging convention for giving agents a clean, readable map
const line = (p) => {
  const { title, description } = metaFor(p);
  return `- [${title}](${SITE}${p}): ${description}`;
};
const group = (label, filter) => {
  const items = paths.filter(filter);
  return items.length ? `\n## ${label}\n\n${items.map(line).join('\n')}\n` : '';
};
writeFileSync(new URL('../public/llms.txt', import.meta.url),
`# AqionLabs

> AqionLabs builds agentic AI for businesses in the UAE and GCC. The first
> product, Aqion Vox, is an AI voice employee that answers calls in Arabic and
> English, qualifies the caller, books meetings and writes structured leads into
> a built-in CRM. Aqion Cloud is the underlying platform: agent runtime,
> persistent business memory, workflow connectors and enterprise controls.

Company: AqionLabs FZ-LLC, Dubai, United Arab Emirates
Contact: jaferm@aqionlabs.com
Status: Aqion Vox in public beta; further agents on the roadmap.

## Key facts

- Aqion Vox handles voice and WhatsApp customer conversations in Arabic and English.
- Every call produces a transcript, a scored lead, and optional bookings and email summaries.
- Aqion Cloud provides the runtime, memory, connectors and governance layer.
- UAE deployment options are available for supported workloads.
- Serving healthcare, real estate, financial services, legal, hospitality and education.
${group('Core pages', p => ['/', '/about', '/contact', '/pricing', '/careers'].includes(p))}${group('Products and platform', p => p.startsWith('/products/') || p.startsWith('/platform/') || p.startsWith('/agents/') || p === '/agentic-ai' || p.startsWith('/ai-workforce/'))}${group('Industries', p => p.startsWith('/industries'))}${group('Services', p => p.startsWith('/services'))}${group('Legal', p => ['/privacy', '/terms', '/legal/data-processing'].includes(p))}
## Notes for agents

This site is a JavaScript application, but every route is also published as
static HTML at its own URL, so the content is readable without executing
scripts. Structured data is embedded as JSON-LD on each page.
`);

console.log(`sitemap: ${paths.length} urls`);
console.log('robots.txt + llms.txt written');
