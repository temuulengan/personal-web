# 🚀 Deployment Guide - Port 8080

## Quick Start (Deploy on Port 8080)

### Step 1: Navigate to your project directory
```bash
cd ~/Downloads/personal-web
# OR wherever your project is located
```

### Step 2: Pull the latest changes (with black design)
```bash
# Make sure you're on the correct branch
git checkout copilot/update-personal-website

# Pull the latest changes
git pull origin copilot/update-personal-website
```

### Step 3: Install dependencies (if needed)
```bash
npm install
```

### Step 4: Build for production
```bash
npm run build
```

### Step 5: Start production server on port 8080
```bash
npm start
```

Your website will be available at: **http://localhost:8080**

---

## 🎨 Design Status: BLACK DESIGN CONFIRMED ✅

The black design inspired by https://github.com/abdulrcs/abdulrahman.id is **intact and working**:

- ✅ Black background (#000000)
- ✅ Dark theme colors
- ✅ Green accent (#3CCF91)
- ✅ All components styled correctly
- ✅ Navbar, Introduction, Container all using black design

### Theme Configuration
Located in: `styles/theme.js`

```javascript
const colors = {
  background: '#000000',      // Black background
  secondary: '#080808',       // Dark gray
  complement: '#FA934F',      // Orange
  displayColor: '#FFFFFF',    // White text
  textPrimary: '#D1D5DB',    // Light gray text
  textSecondary: '#8F9094',  // Medium gray
  button1: '#3CCF91',        // Green (primary accent)
  button2: '#F6A20E',        // Yellow/Orange
  button3: '#5132BF',        // Purple
  borderColor: '#111111',    // Dark border
}
```

---

## 📝 About Language Features

**Status**: Language features (English/Korean/Mongolian) are **NOT currently in this branch**.

If agent #4 added language features but they're not showing up:

### Option 1: Check if changes were committed
```bash
# See all recent commits
git log --oneline -20

# Check for language-related commits
git log --grep="language" --oneline
git log --grep="Korean" --oneline
git log --grep="i18n" --oneline
```

### Option 2: Check other branches
```bash
# List all branches
git branch -a

# Switch to another branch if language features are there
git checkout <branch-name>
```

### Option 3: Add language features to this branch
If you want to add language features while keeping the black design, you'll need to:

1. Create language files (e.g., `locales/en.json`, `locales/ko.json`, `locales/mn.json`)
2. Add a language switcher to the Navbar
3. Use a library like `next-i18next` or `react-intl`

**Important**: Always test on this branch to ensure the black design stays intact!

---

## 🔄 Common Git Commands

### View current status
```bash
git status
```

### View commit history
```bash
git log --oneline -10
```

### Switch branches
```bash
git checkout <branch-name>
```

### Create a new branch
```bash
git checkout -b my-new-feature
```

### Discard local changes
```bash
# Discard changes to a specific file
git checkout -- <filename>

# Discard all local changes
git reset --hard HEAD
```

### Pull latest changes
```bash
git pull origin <branch-name>
```

### Push your changes
```bash
git add .
git commit -m "Your commit message"
git push origin <branch-name>
```

---

## 🛠️ Development vs Production

### Development Mode (for coding)
```bash
npm run dev
# Server runs on http://localhost:8080
# Hot reload enabled
# Detailed error messages
```

### Production Mode (for deployment)
```bash
npm run build    # Build first!
npm start        # Then start
# Server runs on http://localhost:8080
# Optimized and fast
```

---

## 🐛 Troubleshooting

### Issue: "Could not find a production build"
**Solution**: Run `npm run build` first, then `npm start`

### Issue: "Port 8080 is already in use"
**Solution**: Kill the existing process:
```bash
# Find the process
lsof -ti:8080

# Kill it (replace <PID> with the number from above)
kill -9 <PID>

# Or use this one-liner
kill -9 $(lsof -ti:8080)
```

### Issue: Changes not showing up
**Solution**: 
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
npm start
```

### Issue: Design looks different
**Solution**: Make sure you're on the correct branch
```bash
git checkout copilot/update-personal-website
git pull origin copilot/update-personal-website
rm -rf .next node_modules
npm install
npm run build
npm start
```

---

## 📦 Production Deployment (PM2)

For a more robust production setup, use PM2:

### Install PM2
```bash
npm install -g pm2
```

### Start with PM2
```bash
npm run build
pm2 start npm --name "personal-web" -- start
```

### Manage with PM2
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

### Auto-start on system boot
```bash
pm2 startup
pm2 save
```

---

## 🌐 Environment Variables

Make sure you have `.env.local` file with your API keys:

```bash
# Copy the example file
cp .env.example .env.local

# Edit with your credentials
nano .env.local
# or
code .env.local
```

Required variables:
- `NEXT_PUBLIC_BASE_URL`
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`
- `GITHUB_TOKEN`
- `FIREBASE_*` (various Firebase config)
- `NEXT_PUBLIC_UA_CODE` (Google Analytics)

---

## 📞 Need Help?

1. **Build issues**: See [BUILD_TROUBLESHOOTING.md](./BUILD_TROUBLESHOOTING.md)
2. **Merge conflicts**: See [MERGE_CONFLICT_RESOLUTION.md](./MERGE_CONFLICT_RESOLUTION.md)
3. **Quick fixes**: See [QUICK_FIX.md](./QUICK_FIX.md)
4. **Setup guide**: See [README.md](./README.md)

---

## ✅ Current Branch Status

**Branch**: `copilot/update-personal-website`

**What's Working**:
- ✅ Black design (inspired by abdulrahman.id)
- ✅ Download CV button
- ✅ All pages (Home, Projects, Blog)
- ✅ Contentful integration
- ✅ GitHub Issues as blog CMS
- ✅ Firebase analytics
- ✅ Google Analytics
- ✅ Responsive design
- ✅ Dark theme optimized

**What's Missing**:
- ❌ Language switcher (English/Korean/Mongolian)
- ❌ i18n/translation functionality

---

**Last Updated**: March 1, 2026  
**Maintained By**: Copilot Agent
