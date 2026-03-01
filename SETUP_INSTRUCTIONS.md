# Setup Instructions - Port 8080 & Build Fixes

## 🚨 Quick Fix for Your Local Machine

You're seeing build errors because you haven't pulled the latest fixes. Here's what to do:

### Step 1: Pull Latest Changes

```bash
cd ~/Downloads/personal-web
# Or wherever your personal-web directory is

# Pull the latest changes
git fetch origin
git pull origin copilot/update-personal-website

# Or if you have uncommitted changes, stash them first:
git stash
git pull origin copilot/update-personal-website
git stash pop
```

### Step 2: Clean Build

```bash
# Remove old build artifacts
rm -rf .next

# Build the project
npm run build
```

### Step 3: Start on Port 8080

```bash
# Start production server on port 8080
npm start

# Or for development:
npm run dev
```

The server will now start on **http://localhost:8080** 🎉

---

## 🔧 What Was Fixed

### 1. **Contentful Runtime Error** ✅
- **Error**: `TypeError: Expected parameter accessToken`
- **Fix**: Moved Contentful client creation into `getStaticProps()`
- **File**: `pages/index.js`

### 2. **Port Configuration** ✅
- **Changed**: Port from 3000 → 8080
- **Files Modified**:
  - `package.json` (scripts updated)
  - `.env.example` (BASE_URL updated)

### 3. **Chakra UI Linting Errors** ✅
- **Errors**: Props order and shorthand violations
- **Fixed Files**:
  - `components/AboutMe.js` - Fixed props order
  - `components/MDXComponents.js` - Used shorthand props (w, h, maxW)

---

## 📝 Environment Setup

### Create .env.local

```bash
cp .env.example .env.local
```

### Edit .env.local with your actual credentials:

```env
# BASE URL
NEXT_PUBLIC_BASE_URL=http://localhost:8080

# Server Port
PORT=8080

# Contentful API Keys
CONTENTFUL_SPACE_ID=your-space-id-here
CONTENTFUL_ACCESS_TOKEN=your-access-token-here

# Firebase API Keys
FIREBASE_API_KEY=your-firebase-key
FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-app.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:abcdef

# Github API Keys (for blog functionality)
GITHUB_TOKEN=your-github-token

# Google Analytics
NEXT_PUBLIC_UA_CODE=UA-000000-1
```

---

## 🚀 Deployment Options

### Option 1: Development Mode (Port 8080)

```bash
npm run dev
# Opens at http://localhost:8080
```

### Option 2: Production Mode (Port 8080)

```bash
npm run build
npm start
# Opens at http://localhost:8080
```

### Option 3: Custom Port

```bash
# Temporary override
PORT=9000 npm start

# Or edit package.json to change the default port
```

### Option 4: PM2 (Production Server)

```bash
npm install -g pm2
pm2 start npm --name "personal-web" -- start
pm2 save
pm2 startup
```

---

## 🐛 Troubleshooting

### Build Still Failing?

1. **Make sure you pulled the latest changes**:
   ```bash
   git log --oneline -3
   # You should see: "Fix Chakra UI linting errors"
   ```

2. **Clean everything and start fresh**:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

3. **Check Node.js version** (requires 14+):
   ```bash
   node --version
   ```

### Port Already in Use?

```bash
# Find what's using port 8080
lsof -i :8080

# Kill the process if needed
kill -9 <PID>
```

### Multiple Lockfiles Warning?

The warning about multiple lockfiles is harmless but can be fixed:

```bash
# Remove extra lockfile if not needed
rm ~/package-lock.json  # Only if you don't need it
```

Or add to `next.config.js`:
```javascript
module.exports = {
  outputFileTracingRoot: path.join(__dirname, '../../'),
  // ... rest of config
}
```

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] `git pull` completed successfully
- [ ] `npm install` completed without errors
- [ ] `npm run build` completes successfully (ignore network errors for Contentful/GitHub)
- [ ] `npm start` shows "Local: http://localhost:8080"
- [ ] Opening http://localhost:8080 shows the website
- [ ] No Contentful `accessToken` errors in console
- [ ] No Chakra UI linting errors during build

---

## 📞 Still Having Issues?

If you're still experiencing problems after following these steps:

1. Share the output of:
   ```bash
   git log --oneline -5
   git status
   node --version
   npm --version
   ```

2. Try the nuclear option (fresh start):
   ```bash
   cd ~/Downloads
   mv personal-web personal-web-backup
   git clone https://github.com/temuulengan/personal-web.git
   cd personal-web
   git checkout copilot/update-personal-website
   npm install
   cp .env.example .env.local
   # Edit .env.local with your credentials
   npm run build
   npm start
   ```

---

## 🎉 Success!

Once everything is working, you should see:

```
✓ Ready in 501ms
  - Local:        http://localhost:8080
  - Network:      http://10.x.x.x:8080
```

Your personal portfolio is now running on port 8080! 🚀
