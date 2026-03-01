# Git Merge Conflict Resolution Guide

## Your Current Issue

You're seeing this error:
```
.gitignore: needs merge
README.md: needs merge
error: you need to resolve your current index first
```

This happens when Git detects conflicts between your local changes and the remote branch.

## Quick Fix (Recommended)

If you don't have important local changes, use this approach:

```bash
# 1. Abort any ongoing merge
git merge --abort

# 2. Fetch the latest from remote
git fetch origin

# 3. Force reset to match remote (WARNING: Discards local changes)
git reset --hard origin/copilot/update-personal-website

# 4. Verify you're on the right branch
git branch

# 5. Install dependencies
npm install

# 6. Test the site
npm run dev
```

## Step-by-Step Resolution

### Option 1: Save Your Changes First

If you have local changes you want to keep:

```bash
# Check what files have conflicts
git status

# Save your changes temporarily
git stash save "my local changes before sync"

# Abort any ongoing merge
git merge --abort

# Fetch and reset to remote
git fetch origin
git reset --hard origin/copilot/update-personal-website

# Review what you stashed
git stash show

# If you want to apply your changes back (may cause conflicts again)
git stash pop
```

### Option 2: Manual Conflict Resolution

If you want to manually resolve conflicts:

```bash
# Check the status
git status

# Open the conflicted files in your editor
# Look for conflict markers: <<<<<<<, =======, >>>>>>>

# For .gitignore
code .gitignore  # or vim, nano, etc.

# For README.md
code README.md

# After fixing conflicts, mark them as resolved
git add .gitignore
git add README.md

# Complete the merge
git commit -m "Resolved merge conflicts"

# Push if needed
git push origin copilot/update-personal-website
```

### Option 3: Fresh Start (Cleanest)

If you want to start completely fresh:

```bash
# Go to parent directory
cd ..

# Backup your current repo (just in case)
mv personal-web personal-web-backup

# Clone fresh from GitHub
git clone https://github.com/temuulengan/personal-web.git

# Enter the directory
cd personal-web

# Checkout the branch
git checkout copilot/update-personal-website

# Install dependencies
npm install

# You're ready to go!
npm run dev
```

## Understanding the Conflict

### What Happened?

1. You had a local version of `.gitignore` and `README.md`
2. I pushed new versions of these files to the remote branch
3. Git detected that both versions changed and needs you to decide which to keep

### What's in the Remote Branch?

The `copilot/update-personal-website` branch contains:
- ✅ Complete Next.js 15 portfolio website
- ✅ Security-patched dependencies
- ✅ All components and pages
- ✅ Personalized content for @temuulengan
- ✅ Production-ready configuration

## After Resolution

Once you've resolved the conflicts:

```bash
# Verify your working directory is clean
git status

# Install dependencies (if not already done)
npm install

# Create your .env.local file
cp .env.example .env.local
# Edit .env.local with your API keys

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Need Help?

If you're still stuck, run these commands and share the output:

```bash
git status
git branch -a
git log --oneline -5
```

## Common Git Commands Reference

```bash
# Check current status
git status

# See all branches
git branch -a

# Switch branches
git checkout branch-name

# Abort a merge
git merge --abort

# Discard all local changes (WARNING: Destructive!)
git reset --hard origin/branch-name

# Save local changes temporarily
git stash

# Restore stashed changes
git stash pop

# See what's in the stash
git stash list
```

## What to Do After Fixing

1. ✅ Run `npm install` to install dependencies
2. ✅ Create `.env.local` from `.env.example`
3. ✅ Add your API keys (Contentful, Firebase, etc.)
4. ✅ Run `npm run dev` to test
5. ✅ Open http://localhost:3000
6. ✅ Follow the README for deployment instructions
