# Namecheap cPanel Git Deployment

This repo is prepared for Namecheap/cPanel Git deployment using `.cpanel.yml`.

## cPanel setup

1. Open Namecheap hosting cPanel for `aqionlabs.ai`.
2. Open **Git Version Control**.
3. Clone the GitHub repository and select the `main` branch.
4. Deploy from cPanel. cPanel will read `.cpanel.yml` from the repository root.

## Deploy target

The deployment script publishes the production Vite build into:

```bash
$HOME/public_html
```

If `aqionlabs.ai` is configured as an addon domain or has a different document root, set this before deployment in cPanel Terminal:

```bash
export CPANEL_DEPLOY_PATH="$HOME/path-to-aqionlabs-document-root"
```

Then run the cPanel deployment again.

## What deployment does

1. Installs npm dependencies with `npm ci`.
2. Builds the production site with `npm run build`.
3. Copies `dist/` into the cPanel document root.
4. Preserves the generated `.htaccess` rules for React routing, HTTPS, static caching, and `.splinecode` assets.
