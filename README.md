# Student Notebook

A React + Vite web app: notebooks, drawing/annotation tools, PDF reader, planner, and calendar.

## Free hosting setup (recommended path)

This gets you a real, free, public website, and makes future updates painless.

### 1. Put this code on GitHub (free)
1. Go to [github.com](https://github.com) and create a free account if you don't have one.
2. Create a new repository (e.g. `student-notebook`) — keep it either public or private, both work.
3. Upload this whole folder to that repo. Easiest way: on the repo page, click **"uploading an existing file"** and drag in everything from this folder (keep the folder structure — `src/` should stay a subfolder).

### 2. Connect it to Vercel (free)
1. Go to [vercel.com](https://vercel.com) and sign up using your GitHub account (free tier is plenty for this).
2. Click **"Add New Project"**, pick the `student-notebook` repo you just created.
3. Vercel auto-detects it's a Vite app — just click **Deploy**. No settings to change.
4. In a minute or two, you'll have a live URL like `student-notebook-yourname.vercel.app`.

### 3. Getting future updates
Whenever there's a new version of the code (from me, in a Claude conversation):
1. Download the updated file(s).
2. Replace the same file(s) in your GitHub repo (GitHub's web editor lets you just paste in the new content, or drag-and-drop to replace).
3. Vercel automatically rebuilds and redeploys within a minute or two — nothing else to configure.

That's the whole update loop going forward: replace a file on GitHub, Vercel does the rest.

## Running it yourself locally (optional, not required for hosting)

If you ever want to preview changes on your own computer before publishing:

```bash
npm install
npm run dev
```

Then open the local address it prints (usually `http://localhost:5173`).

To produce a production build manually:

```bash
npm run build
```

This outputs a `dist/` folder — Vercel does this step automatically, so you don't need to run it yourself.

## Important note on data storage

This app saves your notebooks, drawings, and PDFs using your **browser's local storage** on whichever device you're using. That means:

- Your data stays on that one device/browser — there's no sync between your iPad and a computer, for example.
- Clearing your browser's site data for this app will erase what's saved.
- This is the same tradeoff as many offline-first apps. If you eventually want real cross-device sync, that requires adding a backend (e.g. Supabase or Firebase) — a separate, bigger step.
