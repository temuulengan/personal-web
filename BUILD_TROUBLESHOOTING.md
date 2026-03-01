# 🔧 Build & Production Server Troubleshooting

This guide helps you solve common build and production server issues.

## 🚨 Error: "Could not find a production build in the '.next' directory"

### The Problem
```
Error: Could not find a production build in the '.next' directory. 
Try building your app with 'next build' before starting the production server.
```

**What happened:** You tried to run `npm start` (production mode) without building the application first.

### The Solution

You must build the application before starting the production server:

```bash
# Step 1: Build the application (this creates the .next directory)
npm run build

# Step 2: Start the production server
npm start
```

### Why This Happens

- `npm run dev` - Runs development server (no build needed)
- `npm start` - Runs **production** server (requires build first)
- `npm run build` - Creates optimized production build in `.next` directory

### Quick Reference

| Command | Purpose | Requires Build? |
|---------|---------|----------------|
| `npm run dev` | Development server | ❌ No |
| `npm run build` | Build for production | N/A |
| `npm start` | Production server | ✅ Yes |

---

## 🚨 Error: "Invalid Chakra props order"

### The Problem
```
Failed to compile.
./components/Introduction.js
173:11  Error: Invalid Chakra props order.  chakra-ui/props-order
```

**What happened:** Chakra UI components require props to be in a specific order.

### The Solution

Reorder props according to Chakra UI's ESLint rules:

```jsx
// ❌ Wrong - HTML attributes after Chakra props
<Link href="/resume.pdf" isExternal download>

// ✅ Correct - HTML attributes before Chakra props
<Link download href="/resume.pdf" isExternal>
```

### General Rule

Props should be ordered:
1. HTML/DOM attributes (`download`, `target`, etc.)
2. Chakra UI props (`href`, `isExternal`, etc.)
3. Event handlers (`onClick`, `onChange`, etc.)

---

## 🚨 Warning: "Multiple lockfiles detected"

### The Problem
```
⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
We detected multiple lockfiles...
```

**What happened:** You have multiple `package-lock.json` files in different directories.

### The Solution

**Option 1: Remove duplicate lockfiles (Recommended)**
```bash
# Find all lockfiles
find ~ -name "package-lock.json" -type f

# Remove the one that's NOT in your project directory
# Example (adjust the path to match your case):
rm ~/package-lock.json
# OR
rm ~/Downloads/personal-web/package-lock.json
```

**Option 2: Configure Next.js to ignore the warning**

Add to `next.config.js`:
```javascript
module.exports = {
  // ... existing config
  output: 'standalone',
  outputFileTracingRoot: __dirname,
}
```

---

## 🚨 Error: "sh: 1: next: not found"

### The Problem
```
sh: 1: next: not found
```

**What happened:** Dependencies are not installed.

### The Solution

```bash
# Install dependencies
npm install

# Then build
npm run build
```

---

## 🚨 Contentful/GitHub API Errors During Build

### The Problem
```
Error fetching data: TypeError: Expected parameter accessToken
Error fetching blog posts: GraphQL Error (Code: 403)
```

**What happened:** Missing API credentials or network restrictions.

### The Solution

These warnings are **normal** and **don't prevent the build** from completing. The application has fallback values.

**To fix properly:**
1. Copy `.env.example` to `.env.local`
2. Add your API credentials:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
   - `GITHUB_TOKEN`

```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

---

## 📝 Development vs Production

### Development Mode (npm run dev)
- ✅ Hot reload
- ✅ Detailed error messages
- ✅ No build required
- ✅ Slower performance
- 🎯 Use for: Local development

```bash
npm run dev
# Server starts immediately on http://localhost:8080
```

### Production Mode (npm start)
- ✅ Optimized code
- ✅ Fast performance
- ✅ Production-ready
- ❌ Requires build first
- 🎯 Use for: Deployment, production testing

```bash
npm run build  # Required first!
npm start
# Server starts on http://localhost:8080
```

---

## 🔍 Common Workflow Issues

### "I made code changes but they're not showing"

**In development mode:**
- Changes should auto-reload
- If not, restart: `Ctrl+C` then `npm run dev`

**In production mode:**
```bash
# You must rebuild after changes!
npm run build
npm start
```

### "Build takes too long"

First build is slow. Subsequent builds are faster.

To speed up:
```bash
# Clear cache if needed
rm -rf .next
npm run build
```

---

## 💡 Pro Tips

1. **Always use `npm run dev` for development**
   - Faster iteration
   - Better error messages
   - Hot reload

2. **Only use `npm start` for production testing**
   - Test the production build locally
   - Must run `npm run build` first

3. **Add .next to .gitignore**
   - Never commit `.next` directory
   - Already configured in this project

4. **PM2 for production servers**
   ```bash
   npm install -g pm2
   npm run build
   pm2 start npm --name "personal-web" -- start
   ```

---

## 🆘 Still Having Issues?

1. **Clear everything and start fresh:**
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   npm start
   ```

2. **Check your Node.js version:**
   ```bash
   node --version  # Should be 14+ or higher
   ```

3. **Review the README:**
   - [README.md](./README.md) - Full setup guide
   - [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) - Detailed setup

4. **Check other guides:**
   - [QUICK_FIX.md](./QUICK_FIX.md) - Sitemap merge conflicts
   - [MERGE_CONFLICT_RESOLUTION.md](./MERGE_CONFLICT_RESOLUTION.md) - Git conflicts

---

**Need more help?** Open an issue in the repository!
