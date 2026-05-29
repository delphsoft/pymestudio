# PymeStudio

Static marketing site for PymeStudio — plain HTML pages with in-browser React (Babel) components. No build step.

> **Note:** Component files use the `.js` extension (not `.jsx`). Vercel's static hosting does not serve `.jsx` files (they 404), so they're named `.js` — the `type="text/babel"` attribute still handles JSX compilation in the browser.

## Pages

| URL (live) | File |
|------------|------|
| `/` | `index.html` |
| `/blog` | `blog.html` |
| `/blog-post?slug=…` | `blog-post.html` |
| `/factura-facil` | `factura-facil.html` |
| `/dashboard-bi` | `dashboard-bi.html` |
| `/retail` | `retail.html` |
| `/agropecuario` | `agropecuario.html` |

## Deploy to Vercel

### Option A — GitHub (recommended)
1. Push this folder to a GitHub repo.
2. In Vercel: **Add New… → Project → Import** the repo.
3. **Framework Preset:** `Other`. Leave **Build Command** empty and **Output Directory** as `./` (root).
4. **Deploy.** Done.

### Option B — CLI
```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

## Clean URLs

`vercel.json` sets `"cleanUrls": true`, so:
- `blog.html` is served at **`/blog`**
- any request to `/blog.html` is auto-redirected to `/blog`

Internal links still use `.html` — Vercel redirects them to the clean URL automatically, so nothing in the page code needs to change.
