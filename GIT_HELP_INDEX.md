# 🎯 Git Issue Quick Reference

This repository contains guides for common Git issues you might encounter.

> **Note:** These guides reference the `copilot/add-multi-language-support` branch. If you're working on a different branch, substitute your branch name in the commands.

---

## 📚 Available Guides

### 1. **RESOLVE_REBASE_ISSUES.md** 🔧
**When to use:** You're stuck in an interactive rebase

**Symptoms:**
- Message: "interactive rebase in progress"
- Untracked files appearing during rebase
- Merge conflicts during rebase

**Quick fix:**
```bash
# If files are build artifacts
echo ".next/" >> .gitignore
git rebase --continue

# If things go wrong
git rebase --abort
```

---

### 2. **FIX_GIT_DIVERGENCE.md** ⚡
**When to use:** Getting "diverging branches" error

**Symptoms:**
- Message: "hint: Diverging branches can't be fast-forwarded"
- Can't pull from remote

**Quick fix:**
```bash
git fetch origin
git reset --hard origin/copilot/add-multi-language-support
```

---

### 3. **RESOLVE_DIVERGENT_BRANCHES.md** 🔀
**When to use:** Need detailed options for divergent branches

**Covers:**
- Merge strategy
- Rebase strategy
- Fast-forward strategy
- When to use each

---

### 4. **SOLUTION_SUMMARY.md** 📋
**When to use:** Quick overview of Git divergence solutions

**Quick reference for:**
- What divergence means
- Three main fix strategies
- Before/after comparisons

---

### 5. **PULL_CHANGES.md** 📥
**When to use:** Need help pulling changes from GitHub

**Covers:**
- Basic git pull commands
- Troubleshooting common errors
- Branch management
- ZIP vs Git clone

---

## 🚨 Quick Decision Tree

### Where Are You Stuck?

```
Can't pull changes?
├─ "Diverging branches" error?
│  └─ Use: FIX_GIT_DIVERGENCE.md (fastest)
│     or RESOLVE_DIVERGENT_BRANCHES.md (detailed)
│
├─ "Not a git repository" error?
│  └─ Use: PULL_CHANGES.md (Problem 2 or 3)
│
└─ Permission or URL errors?
   └─ Use: PULL_CHANGES.md (Problem 1, 6, or 7)

In the middle of a rebase?
├─ "interactive rebase in progress"?
│  └─ Use: RESOLVE_REBASE_ISSUES.md
│
├─ Merge conflicts?
│  └─ Use: RESOLVE_REBASE_ISSUES.md (Issue 1)
│
└─ Want to abort?
   └─ Run: git rebase --abort

Website not displaying correctly?
└─ Use: PULL_CHANGES.md (Problem 9)
   Tip: Use python3 -m http.server 8080
```

---

## 🎯 Most Common Issues

### Issue 1: Diverging Branches (Most Common)

**Error:**
```
hint: Diverging branches can't be fast-forwarded
```

**Fastest Fix:**
```bash
git fetch origin
git reset --hard origin/copilot/add-multi-language-support
```

**Guide:** FIX_GIT_DIVERGENCE.md

---

### Issue 2: Stuck in Rebase

**Error:**
```
interactive rebase in progress
```

**Fastest Fix:**
```bash
# Add build artifacts to .gitignore
echo ".next/" >> .gitignore
git rebase --continue

# OR abort and start over
git rebase --abort
```

**Guide:** RESOLVE_REBASE_ISSUES.md

---

### Issue 3: Can't Pull (Not a Git Repo)

**Error:**
```
fatal: not a git repository
```

**Fastest Fix:**
```bash
# Convert to Git repo
git init
git remote add origin https://github.com/temuulengan/personal-web.git
git fetch origin
git checkout copilot/add-multi-language-support
```

**Guide:** PULL_CHANGES.md

---

## 💡 Pro Tips

### Before Making Changes
1. Always check status: `git status`
2. Pull latest: `git pull`
3. Create a backup branch: `git branch backup-$(date +%Y%m%d)`

### When Stuck
1. Don't panic! Git rarely loses data
2. Check status: `git status`
3. Read the error message carefully
4. Use the guides above

### Prevention
1. Set pull strategy: `git config --global pull.rebase false`
2. Use .gitignore for build artifacts
3. Commit often, push regularly
4. Keep working directory clean

---

## 🆘 Emergency Commands

### "I Need to Start Over"
```bash
# Abort rebase
git rebase --abort

# Discard all local changes (⚠️ CAREFUL!)
git reset --hard origin/copilot/add-multi-language-support

# Unstage files
git reset HEAD

# Undo last commit (keep changes)
git reset --soft HEAD~1
```

### "I Need to Save My Work"
```bash
# Save current work
git stash

# List stashed changes
git stash list

# Restore stashed work
git stash pop
```

### "I Need to See What Changed"
```bash
# See uncommitted changes
git diff

# See staged changes
git diff --staged

# See commit history
git log --oneline -10

# See what changed in a file
git log -p -- filename
```

---

## 📖 Learning Resources

### Understanding Git Concepts

**Branching:**
- Each branch is a separate line of development
- `main` is usually the stable branch
- Feature branches like `copilot/add-multi-language-support` are for new work

**Pull vs Fetch:**
- `git fetch` downloads changes but doesn't apply them
- `git pull` downloads AND applies changes (fetch + merge)

**Merge vs Rebase:**
- Merge creates a new commit combining branches
- Rebase replays your commits on top of another branch

---

## 🚀 Next Steps

1. **Identify your issue** using the decision tree above
2. **Open the relevant guide** for detailed instructions
3. **Follow the steps** carefully
4. **Test your changes** after resolving the issue
5. **Ask for help** if you're still stuck

---

## 📝 Guide Overview

| Guide | Size | Purpose | Difficulty |
|-------|------|---------|-----------|
| FIX_GIT_DIVERGENCE.md | Quick | Fast divergence fix | ⭐ Easy |
| SOLUTION_SUMMARY.md | Short | Overview of options | ⭐ Easy |
| PULL_CHANGES.md | Long | Comprehensive pulling guide | ⭐⭐ Medium |
| RESOLVE_DIVERGENT_BRANCHES.md | Medium | Detailed divergence options | ⭐⭐ Medium |
| RESOLVE_REBASE_ISSUES.md | Long | Complete rebase guide | ⭐⭐⭐ Advanced |

---

**Start with the quick guides, escalate to detailed guides if needed!** 🎯
