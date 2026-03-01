# 🚀 QUICK START - See Your Portfolio in 30 Seconds!

🍎 **Mac Users**: Looking for detailed Mac Terminal instructions? See [MAC_QUICKSTART.md](MAC_QUICKSTART.md) for a step-by-step Mac-specific guide!

---

## 📥 Step 0: Download the Repository (First Time Only)

**If the repository is only on GitHub and not on your computer yet**, you need to download it first!

### Option A: Clone with Git (Recommended)

```bash
# Check if you have git
git --version

# If not, install git first:
# Mac: brew install git
# Windows: download from https://git-scm.com/
# Linux: sudo apt install git

# Clone the repository (COPY THIS ENTIRE LINE!)
git clone https://github.com/temuulengan/personal-web.git

# Navigate into it
cd personal-web
```

⚠️ **Common Mistake:** Don't just type the URL alone! You MUST include `git clone` before it:
- ❌ Wrong: `https://github.com/temuulengan/personal-web.git`
- ✅ Right: `git clone https://github.com/temuulengan/personal-web.git`

### Option B: Download as ZIP (No Git Required)

1. Go to: https://github.com/temuulengan/personal-web
2. Click the green **"Code"** button
3. Click **"Download ZIP"**
4. Unzip the file (usually in Downloads folder)
5. Move the folder somewhere convenient (Desktop, Documents, etc.)
6. Continue to Step 1 below

---

## ⚡ View It RIGHT NOW (3 Simple Steps)

### Step 1: Open Terminal
**On Mac**: Press `⌘ + Space`, type "Terminal", press Enter  
**On Windows**: Press `Win + R`, type "cmd", press Enter  
**On Linux**: Press `Ctrl + Alt + T`

Navigate to your project folder:

```bash
cd personal-web
```

💡 **Mac Tip**: Not sure where your folder is? Open Finder, locate the `personal-web` folder, and drag it onto the Terminal window to auto-fill the path!

💡 **Windows Tip**: You can also right-click the folder in File Explorer and select "Open in Terminal" (Windows 11) or hold Shift + right-click and select "Open PowerShell window here"

### Step 2: Start Local Server
Run ONE of these commands (Python is easiest):

```bash
# If you have Python 3 (most common):
python3 -m http.server 8080

# OR if you have Python 2:
python -m SimpleHTTPServer 8080

# OR if you have Node.js:
npx http-server -p 8080
```

### Step 3: Open in Browser
**Option A (Mac)**: Open a new Terminal tab (`⌘ + T`) and run:
```bash
open http://localhost:8080
```

**Option B (Windows)**: Run:
```bash
start http://localhost:8080
```

**Option C (Any OS)**: Open your web browser manually and go to:
```
http://localhost:8080
```

**🎉 That's it! Your portfolio is now live locally!**

💡 **To stop the server**: Press `Control + C` (or `Ctrl + C` on Windows) in the Terminal window

---

## 🌐 Make It Live on the Internet (GitHub Pages - FREE!)

### Quick Deploy to GitHub Pages:

1. **Go to GitHub.com** and sign in
2. **Go to your repository**: https://github.com/temuulengan/personal-web
3. Click **Settings** (top right)
4. Click **Pages** (left sidebar)
5. Under **Source**, select your branch (likely `copilot/polish-portfolio-website-code` or `main`)
6. Click **Save**
7. Wait 2 minutes ⏱️
8. **Your live URL will be**: `https://temuulengan.github.io/personal-web/`

### Add This URL To:
- ✅ Your Resume
- ✅ LinkedIn Profile  
- ✅ Job Applications
- ✅ Email Signature

---

## 📸 Your Portfolio Preview

Your portfolio includes:
- ✨ Modern hero section with your name
- 📝 About section highlighting your background
- 💻 Technical skills showcase
- 🚀 Featured projects section
- 📧 Contact information

**Live Screenshot**: https://github.com/user-attachments/assets/89a44eb4-63af-4501-a435-638b1c512d6d

---

## 🔧 Before You Deploy - Customize These:

Edit `index.html` and update:

1. **Email Address** (Line ~222):
   - Change `your.email@example.com` to your real email

2. **LinkedIn URL** (Line ~234):
   - Change `https://linkedin.com/in/your-profile` to your LinkedIn

3. **Projects** (Lines ~140-200):
   - Add your real project names
   - Add descriptions
   - Add GitHub links
   - Add live demo links

4. **Skills** (Lines ~90-130):
   - Adjust to match your actual tech stack

---

## ❓ Troubleshooting

### Problem: Website Shows No Design / Looks Plain

**Symptoms:**
- Website opens but looks like plain text with no colors/styling
- No background gradient or animations
- Just black text on white background
- Links and buttons look basic

**What Happened:** You opened `index.html` directly by double-clicking it instead of using a local server!

**Why It Doesn't Work:**
When you double-click `index.html`, your browser opens it as `file:///path/to/index.html`. Modern web features (like CSS, fonts, animations) need to be served through HTTP (`http://localhost:8080`) to work properly.

**✅ Solution:** You MUST use a local server (see Step 2 above):

```bash
# Navigate to the folder
cd personal-web

# Start a server (choose one):
python3 -m http.server 8080
# OR
python -m SimpleHTTPServer 8080
# OR
npx http-server -p 8080

# Then open in browser:
# http://localhost:8080
```

**Screenshot of Working Design:**

When served properly, your portfolio looks like this with full design:

![Screenshot of portfolio website with animated gradient background featuring floating purple and blue orbs, modern navigation bar at top, hero section displaying name and tagline, styled buttons, About Me section with education cards, Technical Skills section with colored progress bars, Featured Projects with gradient cards, and Contact section at bottom](https://github.com/user-attachments/assets/5d932b0f-7d61-4907-a580-a0c36a6614ca)

✨ Features you should see:
- Animated gradient background with floating orbs
- Modern navigation bar
- Styled buttons and cards
- Professional color scheme (blues, purples)
- Smooth animations and transitions
- Beautiful typography

**Remember:** ❌ Don't double-click HTML → ✅ Always use a local server!

---

### Other Common Issues

**Port already in use?**
```bash
python3 -m http.server 8081  # Try port 8081
```

**Changes not showing?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or try incognito mode

**Need more deployment options?**
- See `DEPLOYMENT.md` for Netlify, Vercel, and more!

---

## 🎯 Next Steps

1. ✅ View locally (Done with steps above!)
2. ✅ Customize your content
3. ✅ Deploy to GitHub Pages
4. ✅ Share your URL
5. ✅ Start applying to jobs!

**Your portfolio is ready to help you land that software engineering job! 🎉**
