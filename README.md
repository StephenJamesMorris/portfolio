# High-Performance Portfolio (Vite + Vanilla JS)

A lightweight, SEO-optimized, and ATS-friendly portfolio web app. Built with Vanilla JavaScript and Vite, deployed via GitHub Actions.

## 🚀 Features
- **Zero Framework Overhead:** Pure Vanilla JS for 100/100 Lighthouse performance.
- **Internationalization (i18n):** Instant English/German toggle without page reloads.
- **Dark/Light Mode:** System preference detection with manual override.
- **Print Optimized:** CSS rules that turn the web view into a professional paper CV.
- **ATS Friendly:** Structure and keywords optimized for applicant tracking systems.

## 🛠 Prerequisites
- Node.js (v18 or higher)
- A GitHub Account

## 📦 Installation & Local Development

1.  **Clone or Initialize**
    ```bash
    # Create directory
    mkdir my-portfolio && cd my-portfolio
    
    # Initialize Git
    git init
    ```

2.  **Install Dependencies**
    Copy the `package.json` provided below, then run:
    ```bash
    npm install
    ```

3.  **Start Dev Server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view the app.

4.  **Build for Production**
    ```bash
    npm run build
    # Creates a /dist folder ready for deployment
    ```

## 🌍 Deployment (GitHub Pages)

1.  **Configure Vite:** Open `vite.config.js` and set `base: '/REPO_NAME/'` (match your GitHub repository name).
2.  **Push to GitHub:**
    ```bash
    git add .
    git commit -m "feat: Initial release"
    git branch -M main
    # Replace USER and REPO with your details
    git remote add origin [https://github.com/USER/REPO.git](https://github.com/USER/REPO.git)
    git push -u origin main
    ```
3.  **Activate Pages:**
    - Go to GitHub Repo Settings -> Pages.
    - Source: Select **GitHub Actions**.
    - The included `.github/workflows/deploy.yml` will handle the rest.

## 🎨 Customization
- **Content:** Edit `public/data.json` (do not edit HTML for text).
- **Images:** Place images in `public/assets/`.
- **Colors:** Edit `src/css/variables.css`.


## 📂 File Structure Overview

```text
my-portfolio/
├── .github/workflows/deploy.yml  # Auto-deployment to GitHub Pages
├── public/
│   ├── assets/                   # Images (profile.jpg, og-preview.jpg)
│   ├── data.json                 # The Content (En/De)
│   └── favicon.svg
├── src/
│   ├── css/
│   │   ├── variables.css         # Colors & Theming
│   │   ├── main.css              # Layout & Typography
│   │   └── print.css             # PDF/Print Optimization
│   └── js/
│       ├── language.js           # i18n & Data Fetching logic
│       └── main.js               # Entry point
├── .gitignore
├── index.html                    # SEO & Semantic Structure
├── package.json
├── README.md                     # Documentation
└── vite.config.js
```
## Create the File Scructure
**bash**
```bash
# 1. Create the directory structure (-p creates parent folders automatically)
mkdir -p my-portfolio/{.github/workflows,public/assets,src/css,src/js}

# 2. Create the empty files inside the structure
touch my-portfolio/.github/workflows/deploy.yml
touch my-portfolio/public/{data.json,favicon.svg}
touch my-portfolio/src/css/{variables.css,main.css,print.css}
touch my-portfolio/src/js/{language.js,main.js}
touch my-portfolio/{.gitignore,index.html,package.json,README.md,vite.config.js}

# 3. Confirmation message
echo "✅ Project structure successfully created in 'my-portfolio/'"
```

**PowerShell**
```powershell

# 1. Create Directories
# PowerShell allows comma-separated paths. -Force ensures parents are created.
$dirs = "my-portfolio/.github/workflows",
        "my-portfolio/public/assets",
        "my-portfolio/src/css",
        "my-portfolio/src/js"

New-Item -ItemType Directory -Path $dirs -Force | Out-Null

# 2. Create Files
# We must expand the file paths manually as PS lacks {a,b} syntax.
$files = "my-portfolio/.github/workflows/deploy.yml",
         "my-portfolio/public/data.json",
         "my-portfolio/public/favicon.svg",
         "my-portfolio/src/css/variables.css",
         "my-portfolio/src/css/main.css",
         "my-portfolio/src/css/print.css",
         "my-portfolio/src/js/language.js",
         "my-portfolio/src/js/main.js",
         "my-portfolio/.gitignore",
         "my-portfolio/index.html",
         "my-portfolio/package.json",
         "my-portfolio/README.md",
         "my-portfolio/vite.config.js"

New-Item -ItemType File -Path $files -Force | Out-Null

# 3. Confirmation
Write-Host "✅ Project structure successfully created in 'my-portfolio/'" -ForegroundColor Green

```
