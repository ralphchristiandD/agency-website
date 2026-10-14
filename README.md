# Agency Website (Nuxt + Tailwind)

The starter for the business support agency site: Home, Portfolio, Contact Us, and a Privacy Policy page.

## 1. First-time setup on your computer

Install these once:

1. **VS Code**: https://code.visualstudio.com
2. **Node.js (LTS version)**: https://nodejs.org
3. **Git**: https://git-scm.com
4. **Claude Code**: follow Anthropic's install guide, then sign in with your Claude account
5. In VS Code, install the extension **Vue - Official** (it gives you colors and autocomplete for `.vue` files)

## 2. Run the site on your computer

1. Unzip this folder somewhere easy, like `Documents/agency-website`.
2. In VS Code: **File → Open Folder** → choose the folder.
3. Open the terminal: **Terminal → New Terminal**.
4. Run these commands one at a time:

   ```
   npm install
   npm run dev
   ```

5. Open **http://localhost:3000** in your browser. That's your site.
   Leave the terminal running. When you save a file, the browser updates by itself.

> If `npm install` shows an error like `Cannot read properties of null (reading 'edgesOut')`,
> run `npx npm@latest install` instead.

To stop the site: click the terminal and press **Ctrl + C**.

## 3. Working with Claude Code

In the VS Code terminal (open a second one with the **+** button), run `claude`.
Claude Code reads `CLAUDE.md` automatically, so it already knows the client brief and design rules.

Good first prompts:

- "Explain how this project is organized, simply."
- "Change the accent color to a softer teal and show me where you changed it."
- "Add the client's logo from public/logo.svg to the header."

Tips: ask for one change at a time, check it in the browser, then save your progress with Git (below).

## 4. Where to change things

| What | File |
|---|---|
| Business name, email, location, social links | `app/data/site.ts` |
| Portfolio projects | `app/data/portfolio.ts` (instructions at the top of the file) |
| Portfolio screenshots | put images in `public/portfolio/` |
| Service names and bullet lists | `app/data/services.ts` |
| Colors and font | `app/assets/css/main.css` (the `@theme` block) |
| Logo | `app/components/SiteHeader.vue` |
| Home page sections | `app/pages/index.vue` |

## 5. Contact form setup (Web3Forms)

1. Go to https://web3forms.com and create an access key using **the client's email**
   (that's where form messages will be delivered).
2. Copy `.env.example`, rename the copy to `.env`, and paste the key after `NUXT_PUBLIC_WEB3FORMS_KEY=`.
3. Restart `npm run dev`. Submit a test message and check the inbox.

## 6. Save your work with Git and GitHub

The first time:

```
git init
git add .
git commit -m "Starter site"
```

Then create an empty repository on GitHub and follow its "push an existing repository" commands.

After each working change:

```
git add .
git commit -m "Short description of what changed"
git push
```

## 7. Publish on Netlify

1. Sign in to https://netlify.com with GitHub → **Add new site → Import an existing project** → pick your repo.
2. Netlify reads `netlify.toml` automatically (build: `npm run generate`, publish: `.output/public`).
3. In **Site configuration → Environment variables**, add the values from `.env.example`.
4. Deploy. You get a preview link like `something.netlify.app` to share with the client.
5. At launch, connect the client's domain under **Domain management**.

Every `git push` after that updates the live site automatically.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Run the site locally with live updates |
| `npm run generate` | Build the final static site into `.output/public` |
| `npx serve .output/public` | Preview the final built site |
