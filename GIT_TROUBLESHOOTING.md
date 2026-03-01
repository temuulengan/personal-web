# Git Troubleshooting Guide

Having trouble pulling or merging? This guide will help you identify and fix common Git issues.

## Quick Diagnosis

Run this command to see what's wrong:

```bash
git status
```

Then find your situation below:

---

## 🔴 Error: "You have divergent branches"

**Full error message:**
```
hint: You have divergent branches and need to specify how to reconcile them.
fatal: Need to specify how to reconcile divergent branches.
```

**What this means:** Your local branch and the remote branch have different commits, and Git doesn't know how to combine them.

**Solution:** 📖 See **[RESOLVE_DIVERGENT_BRANCHES.md](./RESOLVE_DIVERGENT_BRANCHES.md)**

**Quick fix:**
```bash
git config pull.rebase false
git pull origin copilot/update-personal-web-with-info
```

---

## 🔴 Error: "You have unmerged files"

**Full error message:**
```
error: Pulling is not possible because you have unmerged files.
hint: Fix them up in the work tree, and then use 'git add/rm <file>'
fatal: Exiting because of an unresolved conflict.
```

**What this means:** You have merge conflicts that need to be manually resolved.

**Solution:** 📖 See **[RESOLVE_MERGE_CONFLICTS.md](./RESOLVE_MERGE_CONFLICTS.md)**

**Quick fix (accept all remote changes):**
```bash
git diff --name-only --diff-filter=U | xargs git checkout --theirs
git add .
git commit -m "Resolve conflicts by accepting remote changes"
```

---

## 🟡 Warning: "Your local changes would be overwritten"

**Full error message:**
```
error: Your local changes to the following files would be overwritten by merge:
    <filename>
Please commit your changes or stash them before you merge.
```

**What this means:** You have uncommitted changes that would be lost during the merge.

**Solution:**

**Option 1: Save your changes with a commit:**
```bash
git add .
git commit -m "Save my local changes"
git pull origin copilot/update-personal-web-with-info
```

**Option 2: Temporarily hide your changes:**
```bash
git stash
git pull origin copilot/update-personal-web-with-info
git stash pop  # Restore your changes after pulling
```

---

## 🟡 Status: "You are in the middle of a merge"

**What you see:**
```bash
git status
# Shows: "All conflicts fixed but you are still merging."
```

**What this means:** You've resolved conflicts but haven't completed the merge.

**Solution:**
```bash
# Complete the merge
git commit

# Or if you want to start over
git merge --abort
```

---

## 🟢 Everything up to date

**What you see:**
```bash
git pull origin copilot/update-personal-web-with-info
# Shows: "Already up to date."
```

**What this means:** Your branch is synced with remote. No action needed! ✅

---

## Common Commands Cheat Sheet

### Check Status
```bash
git status                    # See current state
git log --oneline -5         # See recent commits
git branch -a                # See all branches
```

### Sync with Remote
```bash
git fetch origin             # Download latest from remote
git pull origin <branch>     # Fetch and merge
git push origin <branch>     # Upload your commits
```

### Handle Conflicts
```bash
git diff --name-only --diff-filter=U    # List conflicted files
git checkout --theirs <file>            # Use remote version
git checkout --ours <file>              # Use local version
git add <file>                          # Mark as resolved
git commit                              # Complete the merge
```

### Emergency Commands
```bash
git merge --abort            # Cancel an in-progress merge
git reset --hard HEAD        # Discard all local changes (⚠️ dangerous)
git stash                    # Temporarily save changes
git stash pop                # Restore stashed changes
```

### Create Backups
```bash
# Before doing anything risky
git branch backup-$(date +%Y%m%d-%H%M%S)
git stash save "backup before merge"
```

---

## Decision Tree

```
Do you have uncommitted changes?
├─ Yes → Commit them or stash them first
└─ No → Continue

Can you pull successfully?
├─ "divergent branches" → See RESOLVE_DIVERGENT_BRANCHES.md
├─ "unmerged files" → See RESOLVE_MERGE_CONFLICTS.md
├─ "Already up to date" → You're done! ✅
└─ Other error → See specific error section above
```

---

## Recommended Workflow

To avoid these issues in the future:

1. **Before starting work:**
   ```bash
   git pull origin copilot/update-personal-web-with-info
   ```

2. **While working:**
   ```bash
   # Commit frequently
   git add .
   git commit -m "Describe your changes"
   ```

3. **Before pushing:**
   ```bash
   # Get latest changes
   git pull origin copilot/update-personal-web-with-info
   
   # Resolve any conflicts if they appear
   
   # Push your work
   git push origin copilot/update-personal-web-with-info
   ```

---

## Still Stuck?

1. **Check which state you're in:**
   ```bash
   git status
   ```

2. **See the full error message** - paste it into your search

3. **Create a backup** before trying anything drastic:
   ```bash
   git branch backup-before-fix
   ```

4. **Ask for help** with:
   - The full error message
   - Output of `git status`
   - What you were trying to do

---

## What Changes Are on the Remote?

The `copilot/update-personal-web-with-info` branch contains updates to your personal website with:

- ✅ Your real name: **Temuulen Ganochir**
- ✅ Your email: **temuulev@gmail.com**  
- ✅ Your location: **Ulaanbaatar**
- ✅ Your education: **Seoul National University of Science and Technology (SeoulTech)**
- ✅ Real projects: **PortfolioIQ**, **AI Recipe Chat**, **FinGuard**
- ✅ Your actual technical skills and languages

These are the changes the agent made based on your resume.

---

## Visual Tools

If you prefer a visual interface, try:

- **GitHub Desktop** - Friendly GUI for Git operations
- **VS Code** - Built-in Git and merge conflict resolution
- **GitKraken** - Visual Git client
- **Sublime Merge** - Fast merge conflict resolution

---

## Configuration Tips

Set defaults to avoid future prompts:

```bash
# Use merge (recommended for collaboration)
git config --global pull.rebase false

# Or use rebase (for cleaner history)
git config --global pull.rebase true

# Set default editor
git config --global core.editor "code --wait"  # For VS Code
```
