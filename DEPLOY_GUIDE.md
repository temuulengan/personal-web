# 🚀 Complete Deployment Guide - Port 8080

## 📋 Quick Start (5 Steps)

```bash
# 1. Navigate to your project folder
cd ~/Downloads/personal-web

# 2. Pull the latest changes with language features
git pull origin copilot/update-personal-website

# 3. Install dependencies
npm install

# 4. Build for production
npm run build

# 5. Start the server on port 8080
npm start
```

🎉 **Your website is now live at:** http://localhost:8080

---

## 🔧 Detailed Step-by-Step Guide

### Step 1: Navigate to Project Directory

```bash
# Open Terminal/Command Prompt and navigate to your project
cd ~/Downloads/personal-web

# Or if it's in a different location:
# cd /path/to/your/personal-web
```

**Verify you're in the right directory:**
```bash
ls -la
# You should see: package.json, pages/, components/, etc.
```

---

### Step 2: Pull Latest Changes

```bash
# Make sure you're on the correct branch
git checkout copilot/update-personal-website

# Pull the latest changes
git pull origin copilot/update-personal-website
```

**Expected output:**
```
From https://github.com/temuulengan/personal-web
 * branch            copilot/update-personal-website -> FETCH_HEAD
Already up to date.
```

---

### Step 3: Install Dependencies

```bash
npm install
```

**What this does:**
- Installs all required packages (Next.js, Chakra UI, etc.)
- Takes about 30-60 seconds
- Creates/updates `node_modules` folder

**Expected output:**
```
added 902 packages, and audited 903 packages in 45s
```

**Note:** You may see some warnings - that's normal!

---

### Step 4: Build for Production

```bash
npm run build
```

**What this does:**
- Compiles your code for production
- Optimizes images and assets
- Generates static pages
- Takes about 1-2 minutes

**Expected output:**
```
✓ Compiled successfully
✓ Generating static pages (5/5)
✓ Finalizing page optimization
```

**Important:** If you see errors here, don't proceed to Step 5!

---

### Step 5: Start the Server

```bash
npm start
```

**Expected output:**
```
> personal-portfolio@1.0.0 start
> next start -p 8080

   ▲ Next.js 15.5.12
   - Local:        http://localhost:8080
   - Network:      http://192.168.x.x:8080

 ✓ Ready in 512ms
```

🎉 **Success!** Your website is now running on **http://localhost:8080**

---

## 🌐 Accessing Your Website

### On Your Computer:
Open your browser and go to: **http://localhost:8080**

### From Other Devices (Same Network):
1. Find your computer's IP address:
   ```bash
   # On Mac/Linux:
   ifconfig | grep "inet "
   
   # On Windows:
   ipconfig
   ```
2. Use the IP address shown in the "Network" line
3. Example: http://192.168.1.100:8080

---

## 🛑 Stopping the Server

To stop the server:
1. Go to the Terminal window where it's running
2. Press: **`Ctrl + C`** (Mac/Linux/Windows)
3. You'll see: `^C` and the server will stop

---

## 🔄 Alternative: Development Mode

For development (with hot reload):

```bash
npm run dev
```

**Differences:**
- **Development mode** (`npm run dev`):
  - ✅ Hot reload (changes appear instantly)
  - ✅ Better error messages
  - ✅ No build needed
  - ❌ Slower performance
  
- **Production mode** (`npm run build` + `npm start`):
  - ✅ Optimized and fast
  - ✅ Ready for deployment
  - ❌ No hot reload
  - ❌ Must rebuild after changes

---

## 📦 Using PM2 (Keep Server Running)

For a production-ready setup that keeps running even after closing Terminal:

### Install PM2:
```bash
npm install -g pm2
```

### Start with PM2:
```bash
# Build first
npm run build

# Start with PM2
pm2 start npm --name "personal-web" -- start
```

### Manage with PM2:
```bash
# Check status
pm2 status

# View logs
pm2 logs personal-web

# Restart
pm2 restart personal-web

# Stop
pm2 stop personal-web

# Remove from PM2
pm2 delete personal-web
```

### Auto-start on system boot:
```bash
pm2 startup
pm2 save
```

---

## 🐛 Troubleshooting

### ❌ "Port 8080 is already in use"

**Solution 1:** Kill the existing process
```bash
# Find the process
lsof -ti:8080

# Kill it (replace <PID> with the number from above)
kill -9 <PID>

# Or use this one-liner:
kill -9 $(lsof -ti:8080)
```

**Solution 2:** Use a different port
```bash
# Edit package.json and change:
"start": "next start -p 3000"

# Then:
npm start
# Now it runs on port 3000
```

---

### ❌ "Could not find a production build"

**Cause:** You ran `npm start` without building first

**Solution:**
```bash
npm run build
npm start
```

---

### ❌ Build fails with errors

**Solution 1:** Clean install
```bash
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

**Solution 2:** Check Node version
```bash
node --version
# Should be v18 or higher

# Update Node if needed:
# https://nodejs.org/
```

---

### ❌ "Module not found" errors

**Solution:**
```bash
npm install
npm run build
```

---

### ❌ Changes not showing up

**Solution:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
npm start
```

---

## ✅ Verification Checklist

After deployment, verify everything works:

- [ ] Website loads at http://localhost:8080
- [ ] Black design is displayed correctly
- [ ] Language switcher appears in navbar
- [ ] Can switch to English (🇺🇸)
- [ ] Can switch to Mongolian (🇲🇳)
- [ ] Can switch to Korean (🇰🇷)
- [ ] Github/LinkedIn/Email buttons show in English
- [ ] All pages work (Home, Projects, Blog)
- [ ] No console errors in browser DevTools

---

## 📝 Environment Variables

If you need to set up environment variables:

### Create `.env.local` file:
```bash
# Copy the example file
cp .env.example .env.local

# Edit with your values
nano .env.local
# or
code .env.local
```

### Required variables:
```bash
NEXT_PUBLIC_BASE_URL=http://localhost:8080
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_token
GITHUB_TOKEN=your_github_token
NEXT_PUBLIC_UA_CODE=your_ga_code
```

**Note:** Restart the server after changing `.env.local`

---

## 🌍 Deploying to Production

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Your Own Server
1. Build the project: `npm run build`
2. Copy these files to your server:
   - `.next/` folder
   - `public/` folder
   - `package.json`
   - `node_modules/` (or run `npm install` on server)
3. Run: `npm start`

---

## 📞 Need Help?

### Check These First:
1. **Console Errors:** Open browser DevTools (F12) → Console tab
2. **Build Logs:** Read the terminal output carefully
3. **Documentation:** 
   - `DEPLOYMENT_GUIDE.md` (this file)
   - `LANGUAGE_FEATURE.md` (language features)
   - `BUILD_TROUBLESHOOTING.md` (build issues)

### Common Issues:
- Port already in use → Kill the process
- Build fails → Clean install
- Changes not showing → Clear cache and rebuild

---

## 🎯 Summary

**Production Deployment (5 steps):**
```bash
cd ~/Downloads/personal-web
git pull origin copilot/update-personal-website
npm install
npm run build
npm start
```

**Development Mode:**
```bash
npm run dev
```

**Stop Server:**
Press `Ctrl + C` in Terminal

**Your Website:**
- Local: http://localhost:8080
- Features: 3 languages (EN/MN/KO)
- Design: Black theme maintained
- Status: ✅ Production ready

---

**Last Updated:** 2026-03-01
**Branch:** copilot/update-personal-website
**Port:** 8080
