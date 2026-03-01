# 🔄 How to Pull Changes from GitHub to Your Computer

This guide explains how to get the **latest changes** from GitHub to your local computer.

---

## 🎯 What Does "Pull" Mean?

When changes are made to your portfolio on GitHub (like the fancy new design!), you need to **download** those changes to see them on your computer. This is called "pulling" changes.

---

## ⚡ Quick Answer (If You Used Git Clone)

If you previously cloned the repository using `git clone`, here's how to get the latest changes:

### Step 1: Open Terminal

**Mac**: Press `⌘ + Space`, type "Terminal", press Enter  
**Windows**: Press `Win + R`, type "cmd", press Enter  
**Linux**: Press `Ctrl + Alt + T`

### Step 2: Navigate to Your Project Folder

```bash
cd personal-web
```

💡 **Mac Tip**: If you're not sure where your folder is, open Finder, find the `personal-web` folder, and drag it onto Terminal to auto-fill the path!

### Step 3: Pull the Latest Changes

```bash
git pull origin copilot/polish-portfolio-website-code
```

**That's it!** 🎉 The latest changes are now on your computer!

---

## 📋 Alternative: Pull from Main Branch

If the changes have been merged to the main branch, use:

```bash
git pull origin main
```

Or simply:

```bash
git pull
```

---

## ✅ Verify the Changes Were Downloaded

After pulling, check that you got the new files:

```bash
# See what changed
git log -1

# List files to verify
ls -la
```

You should now see the new fancy portfolio files!

---

## 🔍 Check Which Branch You're On

Before pulling, you can check which branch you're currently on:

```bash
# See your current branch
git branch

# See all branches
git branch -a

# Switch to the fancy portfolio branch if needed
git checkout copilot/polish-portfolio-website-code
```

---

## 🆘 Troubleshooting

### Problem 0: "zsh: no such file or directory" or "command not found"

**Error Message:**
```
zsh: no such file or directory: https://github.com/temuulengan/personal-web.git
```
Or on Windows:
```
'https:' is not recognized as an internal or external command
```

**What Happened:** You tried to run the GitHub URL directly without the `git clone` command!

**Solution:** You need to add `git clone` before the URL:

```bash
# ❌ WRONG - This won't work
https://github.com/temuulengan/personal-web.git

# ✅ CORRECT - This is the right way
git clone https://github.com/temuulengan/personal-web.git
```

**Full Step-by-Step:**

1. **Open Terminal** (Mac: `⌘ + Space`, type "Terminal")

2. **Navigate to where you want to save the project**:
   ```bash
   # Go to Desktop
   cd ~/Desktop
   
   # Or Documents
   cd ~/Documents
   ```

3. **Clone the repository** (copy this ENTIRE command):
   ```bash
   git clone https://github.com/temuulengan/personal-web.git
   ```

4. **Navigate into the folder**:
   ```bash
   cd personal-web
   ```

5. **Start the server**:
   ```bash
   python3 -m http.server 8080
   ```

6. **Open in browser**: http://localhost:8080

🎉 **That's it!** Your portfolio should now be running!

💡 **Remember:** Always use `git clone` followed by the URL, not just the URL alone!

---

### Problem 1: "Not a git repository"

**Error Message:**
```
fatal: not a git repository (or any of the parent directories): .git
```

**Solution:** You downloaded the ZIP file instead of cloning. You have two options:

**Option A: Download Fresh ZIP** (Easiest)
1. Go to: https://github.com/temuulengan/personal-web
2. Click green "Code" button → "Download ZIP"
3. Unzip and replace your old folder

**Option B: Convert to Git Repository**
```bash
cd personal-web
git init
git remote add origin https://github.com/temuulengan/personal-web.git
git fetch origin
git checkout copilot/polish-portfolio-website-code
```

---

### Problem 2: "Your local changes would be overwritten"

**Error Message:**
```
error: Your local changes to the following files would be overwritten by merge
```

**Solution:** You've made local edits. Save them first:

```bash
# Save your local changes
git stash

# Pull the latest changes
git pull origin copilot/polish-portfolio-website-code

# Apply your saved changes back
git stash pop
```

Or if you want to discard your local changes:

```bash
# WARNING: This will DELETE your local changes!
git reset --hard
git pull origin copilot/polish-portfolio-website-code
```

---

### Problem 3: "Could not find branch"

**Error Message:**
```
fatal: couldn't find remote ref copilot/polish-portfolio-website-code
```

**Solution:** The branch name might be different. Check available branches:

```bash
# See all remote branches
git fetch origin
git branch -a

# Pull from main branch instead
git pull origin main
```

---

### Problem 4: "Permission denied (publickey)"

**Error Message:**
```
Permission denied (publickey)
```

**Solution:** You need to set up SSH keys or use HTTPS. Try:

```bash
# Use HTTPS instead of SSH
git remote set-url origin https://github.com/temuulengan/personal-web.git
git pull origin copilot/polish-portfolio-website-code
```

---

### Problem 5: Merge Conflicts

**Error Message:**
```
CONFLICT (content): Merge conflict in index.html
```

**Solution:** You need to resolve conflicts manually:

```bash
# See which files have conflicts
git status

# Open the conflicting file in a text editor
# Look for markers like <<<<<<< HEAD and >>>>>>> 
# Choose which version to keep
# Remove the conflict markers

# After fixing, add and commit
git add .
git commit -m "Resolved merge conflicts"
```

---

## 🌐 Already Downloaded as ZIP? Here's What to Do:

If you initially downloaded the repository as a ZIP file, you **cannot use `git pull`**. Here are your options:

### Option 1: Download Fresh ZIP (Simplest)

1. **Backup your changes** (if you customized anything):
   - Copy any files you edited to a safe location

2. **Delete the old folder** from your computer

3. **Download new ZIP**:
   - Go to: https://github.com/temuulengan/personal-web
   - Click green "Code" button
   - Click "Download ZIP"
   - Unzip the file

4. **Restore your customizations** (if any)

### Option 2: Convert to Git Repository

```bash
# Navigate to your project
cd personal-web

# Initialize git
git init

# Add the remote repository
git remote add origin https://github.com/temuulengan/personal-web.git

# Fetch all branches
git fetch origin

# Checkout the branch with fancy design
git checkout copilot/polish-portfolio-website-code

# Now you can use git pull in the future!
```

---

## 🚀 View Your Updated Portfolio

After pulling the changes, view your updated portfolio:

```bash
# Start the local server
python3 -m http.server 8080

# Open in browser
open http://localhost:8080  # Mac
start http://localhost:8080  # Windows
```

Or just open: http://localhost:8080 in your browser!

---

## 📱 Quick Reference Card

**Save this for future use:**

```bash
# 1. Open Terminal
# 2. Navigate to project
cd personal-web

# 3. Pull latest changes
git pull origin copilot/polish-portfolio-website-code

# 4. View the changes
python3 -m http.server 8080
open http://localhost:8080
```

---

## 💡 Understanding Git Pull

**What does `git pull` do?**
- Downloads the latest code from GitHub
- Merges it with your local code
- Updates your files to match GitHub

**What's the difference between `git pull` and `git fetch`?**
- `git fetch`: Downloads changes but doesn't apply them
- `git pull`: Downloads changes AND applies them (fetch + merge)

**When should I pull?**
- When someone (or GitHub Copilot) makes changes to the repository
- Before you start making your own changes
- To get the latest features and bug fixes

---

## 🔄 Keeping Your Portfolio Up-to-Date

**Best Practice:**

1. **Before you start editing**, always pull the latest changes:
   ```bash
   git pull origin copilot/polish-portfolio-website-code
   ```

2. **Make your edits** to `index.html`, `styles.css`, etc.

3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Updated my personal information"
   ```

4. **Push your changes back** (if you want to):
   ```bash
   git push origin copilot/polish-portfolio-website-code
   ```

---

## 🎯 What Branch Should I Use?

Your portfolio has these branches:

- **`copilot/polish-portfolio-website-code`**: The fancy new design (recommended!)
- **`main`**: The original/stable version

**To switch branches:**

```bash
# Switch to the fancy design branch
git checkout copilot/polish-portfolio-website-code
git pull

# Or switch to main branch
git checkout main
git pull
```

---

## ✨ You're All Set!

Now you know how to pull the latest changes from GitHub! 

**Next Steps:**
1. ✅ Pull the latest changes (done!)
2. ✅ View your fancy new portfolio
3. ✅ Customize it with your information
4. ✅ Deploy to GitHub Pages
5. ✅ Share your URL and apply for jobs!

**Questions?** Check out:
- `README.md` - General overview
- `QUICKSTART.md` - Getting started guide
- `MAC_QUICKSTART.md` - Mac-specific instructions
- `DEPLOYMENT.md` - Deployment options

---

**Happy coding! 🚀**
