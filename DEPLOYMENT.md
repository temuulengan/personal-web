# 🚀 Deployment Guide - View Your Portfolio NOW!

This guide will help you deploy and view your portfolio website immediately.

## ⚡ Option 1: View It NOW (Locally) - 30 seconds

The fastest way to see your website right now:

### Method A: Direct File Opening (Easiest)
1. Navigate to your project folder: `/home/runner/work/personal-web/personal-web/`
2. Double-click `index.html`
3. Your default browser will open with your portfolio!

### Method B: Local Web Server (Recommended)
This method is better because it properly loads all resources:

```bash
# Navigate to your project folder
cd /home/runner/work/personal-web/personal-web/

# Start a local server (choose one):

# Option 1: Python 3 (most common)
python3 -m http.server 8000

# Option 2: Python 2
python -m SimpleHTTPServer 8000

# Option 3: Node.js
npx http-server -p 8000

# Option 4: PHP
php -S localhost:8000
```

Then open your browser and visit: **http://localhost:8000**

**To stop the server:** Press `Ctrl+C` in the terminal

---

## 🌐 Option 2: Deploy to GitHub Pages (Free Forever!) - 2 minutes

GitHub Pages gives you a permanent URL like: `https://temuulengan.github.io/personal-web/`

### Step-by-Step Instructions:

#### A. Via GitHub Website (Easiest):

1. **Go to your repository on GitHub:**
   - Visit: https://github.com/temuulengan/personal-web

2. **Enable GitHub Pages:**
   - Click on **Settings** (top right)
   - Scroll down to **Pages** in the left sidebar
   - Under **Source**, select the branch: `copilot/polish-portfolio-website-code` (or `main`)
   - Click **Save**

3. **Wait 1-2 minutes** for deployment

4. **Your site will be live at:**
   ```
   https://temuulengan.github.io/personal-web/
   ```

5. **Refresh the Settings → Pages** page to see your live URL!

#### B. Via GitHub CLI (if you have it):

```bash
# Navigate to your repository
cd /home/runner/work/personal-web/personal-web/

# Enable GitHub Pages
gh api repos/temuulengan/personal-web/pages \
  --method POST \
  -f "source[branch]=copilot/polish-portfolio-website-code" \
  -f "source[path]=/"
```

---

## 🎯 Option 3: Deploy to Netlify (Free + Custom Domain) - 3 minutes

Netlify offers continuous deployment and a custom domain.

### Step-by-Step:

1. **Go to Netlify:**
   - Visit: https://www.netlify.com/
   - Sign up/login with GitHub

2. **New Site from Git:**
   - Click "New site from Git"
   - Choose "GitHub"
   - Select your repository: `temuulengan/personal-web`

3. **Deploy Settings:**
   - Branch: `copilot/polish-portfolio-website-code` (or `main`)
   - Build command: *(leave empty)*
   - Publish directory: *(leave empty or put `/`)*
   - Click **Deploy site**

4. **Get Your URL:**
   - You'll get a URL like: `https://random-name-12345.netlify.app`
   - You can customize it under: Site settings → Change site name

5. **Optional - Custom Domain:**
   - Go to Domain settings
   - Add your custom domain
   - Follow DNS configuration instructions

### Netlify CLI Method:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to your project
cd /home/runner/work/personal-web/personal-web/

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

---

## 🔥 Option 4: Deploy to Vercel (Free + Lightning Fast) - 3 minutes

Vercel is optimized for speed and offers instant deployments.

### Step-by-Step:

1. **Go to Vercel:**
   - Visit: https://vercel.com/
   - Sign up/login with GitHub

2. **Import Project:**
   - Click "New Project"
   - Import your repository: `temuulengan/personal-web`

3. **Configure & Deploy:**
   - Framework Preset: Other
   - Root Directory: `./`
   - Click **Deploy**

4. **Get Your URL:**
   - You'll get a URL like: `https://personal-web-xyz.vercel.app`
   - Automatic deployments on every push!

### Vercel CLI Method:
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project
cd /home/runner/work/personal-web/personal-web/

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

---

## 📱 Option 5: Quick Share via Surge.sh - 1 minute

For quick temporary sharing (great for showing to friends):

```bash
# Install Surge
npm install -g surge

# Navigate to your project
cd /home/runner/work/personal-web/personal-web/

# Deploy (it will ask for email first time)
surge
```

You'll get a URL like: `https://your-subdomain.surge.sh`

---

## 🔄 Updating Your Live Site

After you make changes to your portfolio:

### For GitHub Pages:
```bash
git add .
git commit -m "Update portfolio"
git push
# Wait 1-2 minutes for automatic deployment
```

### For Netlify/Vercel:
```bash
git add .
git commit -m "Update portfolio"
git push
# Automatic deployment happens immediately!
```

### For Local Testing:
Just refresh your browser (Ctrl+R or Cmd+R)

---

## 🎨 Customization Before Deploying

Before you deploy, customize these in `index.html`:

1. **Your Name**: Line 50 - Already set to "Temuulen Gan" ✅
2. **Email**: Line 222 - Change `your.email@example.com`
3. **LinkedIn**: Line 234 - Add your LinkedIn URL
4. **Projects**: Lines 140-200 - Add your real projects
5. **Skills**: Lines 90-130 - Adjust to match your expertise

---

## 🔍 Troubleshooting

### Website Not Loading?
- Check if you're in the right directory
- Make sure `index.html` exists
- Try a different browser

### GitHub Pages Not Working?
- Ensure the repository is public
- Wait 2-3 minutes after enabling
- Check Settings → Pages for error messages

### Local Server Port Already in Use?
```bash
# Try a different port
python3 -m http.server 8001
# Then visit: http://localhost:8001
```

### Changes Not Showing?
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Try incognito/private mode

---

## 📊 Recommended Deployment Strategy

**For Most Users:**
1. **Start Local** (view immediately) → 30 seconds
2. **Deploy to GitHub Pages** (permanent free URL) → 2 minutes
3. **Add to Resume/LinkedIn** with your GitHub Pages URL

**For Professional Use:**
1. Deploy to **Netlify** or **Vercel** (better performance)
2. Get a **custom domain** (like yourname.com) for $10-15/year
3. Point domain to your Netlify/Vercel deployment

---

## 🎉 Next Steps After Deployment

1. ✅ Test on mobile devices
2. ✅ Share URL with friends for feedback
3. ✅ Add URL to your resume
4. ✅ Add URL to LinkedIn profile
5. ✅ Submit to job applications
6. ✅ Share on Twitter/social media

---

## 🆘 Need Help?

- **GitHub Pages Issues**: https://docs.github.com/pages
- **Netlify Issues**: https://docs.netlify.com/
- **Vercel Issues**: https://vercel.com/docs

---

**Your portfolio is ready to impress recruiters! 🚀**
