# 🌿 My Game Dev Portfolio

A cozy, single-page portfolio site built with **React + Vite**.

---

## 🚀 Getting Started (Local Dev)

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## ✏️ Personalising the Site

Search for `🔧 TODO` comments across the source files — they mark every spot you need to update:

| File | What to change |
|---|---|
| `src/components/Navbar.jsx` | Your name / site title |
| `src/components/Hero.jsx` | Your name, tagline, description |
| `src/components/About.jsx` | Your bio, location, photo |
| `src/components/Skills.jsx` | Your real skills & levels |
| `src/components/Projects.jsx` | Your actual game projects |
| `src/components/Contact.jsx` | Your email & social links |
| `vite.config.js` | Your repo name (for GitHub Pages base URL) |

---

## 📦 Deploying to GitHub Pages

### One-time setup

1. **Create a GitHub repo** (e.g. `portfolio`).

2. **Update `vite.config.js`** — set `base` to match your repo name:
   ```js
   base: '/portfolio/',   // use '/' if deploying to username.github.io
   ```

3. **Push your code** to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

4. **Install dependencies and deploy:**
   ```bash
   npm install
   npm run deploy
   ```
   This builds the site and pushes it to a `gh-pages` branch automatically.

5. **Enable GitHub Pages** in your repo:
   - Go to **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: `gh-pages` / `root`
   - Click **Save**

Your site will be live at:
`https://YOUR_USERNAME.github.io/portfolio/`

### Future updates

Every time you make changes, just run:
```bash
npm run deploy
```

---

## 🗂️ Project Structure

```
portfolio/
├── public/
│   └── favicon.svg          # Replace with your own icon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── App.jsx              # Assembles all sections
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles & CSS variables
├── index.html
├── vite.config.js
└── package.json
```

---

## 🎨 Customising the Theme

All colours, fonts, and spacing live in **CSS variables** at the top of `src/index.css`. Change them once — the whole site updates.

```css
:root {
  --color-primary: #6aab7e;   /* sage green */
  --color-accent:  #e07b54;   /* terracotta */
  --font-display:  'Fredoka One', cursive;
  /* ... */
}
```
