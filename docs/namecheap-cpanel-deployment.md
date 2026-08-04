# Namecheap cPanel Git Deployment

This repo is prepared for Namecheap/cPanel Git deployment using `.cpanel.yml`.

The Namecheap Git checkout is expected at:

```bash
/home/aqioqfvg/public_html/AqionlabsAiRoboLite
```

## cPanel setup

1. Open Namecheap hosting cPanel for `aqionlabs.ai`.
2. Open **Git Version Control**.
3. Clone the GitHub repository and select the `main` branch.
4. Deploy from cPanel. cPanel will read `.cpanel.yml` from the repository root.

## Deploy target

The cPanel deployment file currently publishes the production Vite build into the `aqionlabs.ai` document root shown in Namecheap:

```bash
/home/aqioqfvg/public_html/aqionlabs.ai
```

If Namecheap shows a different document root later, update `.cpanel.yml` or set this before deployment in cPanel Terminal:

```bash
export CPANEL_DEPLOY_PATH="$HOME/path-to-aqionlabs-document-root"
```

Then run the cPanel deployment again.

## What deployment does

1. Installs npm dependencies with `npm ci`.
2. Builds the production site with `npm run build`.
3. Copies `dist/` into the cPanel document root.
4. Preserves the generated `.htaccess` rules for React routing, HTTPS, static caching, and `.splinecode` assets.

The copy step is intentionally non-destructive because this Git checkout is under `public_html` on Namecheap. It overwrites the generated site files without deleting the repository folder.

## Manual File Manager deployment

Do not copy the full repository into `/home/aqioqfvg/public_html/aqionlabs.ai`. The domain folder should contain the production build output, not source files such as `components`, `pages`, `package.json`, and `vite.config.ts`.

For manual upload:

1. Build a clean upload package:

```bash
/bin/bash scripts/package-cpanel-upload.sh
```

2. Upload `aqionlabs-ai-cpanel-upload.zip` to:

```bash
/home/aqioqfvg/public_html/aqionlabs.ai
```

3. Extract the zip inside that folder.
4. Confirm the folder contains production files such as `index.html`, `assets/`, `3d/`, and `.htaccess`.
