# Etersto Apparel

B2B apparel manufacturing website for Etersto Apparel, built with Next.js static export and Cloudflare Pages Functions.

## Local Development

For page-only development:

```bash
npm install
npm run dev
```

The command above does not run the deployed form endpoint. The inquiry form posts to `/api/inquiry`, so use local preview when testing form submission.

On Windows PowerShell:

```powershell
cd C:\Users\Administrator\Documents\Codex\2026-07-02\new-chat-2
$env:Path="C:\Program Files\nodejs;" + $env:Path
$env:INQUIRY_TO_EMAIL="etersto@outlook.com"
& "C:\Program Files\nodejs\npm.cmd" run preview:local
```

Then open `http://localhost:3000`.

Cloudflare Pages Functions can also be tested with Wrangler:

```powershell
cd C:\Users\Administrator\Documents\Codex\2026-07-02\new-chat-2
$env:Path="C:\Program Files\nodejs;" + $env:Path
$env:XDG_CONFIG_HOME="$PWD\.wrangler-config"
& "C:\Program Files\nodejs\npm.cmd" run preview:cloudflare
```

Then open the local URL printed by Wrangler.

## Production Build

```bash
npm run build
```

Cloudflare Pages settings:

- Build command: `npm run build`
- Build output directory: `out`
- Production branch: `main`

The inquiry endpoint is implemented as a Cloudflare Pages Function at `/api/inquiry`.

## Environment Variables

Copy `.env.example` into Cloudflare Pages project variables when wiring live delivery. 
