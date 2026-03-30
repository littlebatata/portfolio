# Dani Watson Portfolio

Single-page portfolio site built with **React + Vite**.

---

## 🚀 Getting Started (Local Dev)

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```



## 📦 Deploying to GitHub Pages

### One-time setup

1. **Create a GitHub repo** (e.g. `portfolio`).

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
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── App.jsx              
│   ├── main.jsx             
│   └── index.css           
├── index.html
├── vite.config.js
└── package.json
```


