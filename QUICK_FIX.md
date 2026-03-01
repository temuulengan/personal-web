# Quick Fix - Pull Changes

## You have a merge conflict on `index.html`. Here's how to resolve it:

### Option 1: Keep Remote Version (Recommended)
```bash
git checkout --theirs index.html
git add index.html
git commit
git push origin main
```

### Option 2: Keep Your Version
```bash
git checkout --ours index.html
git add index.html
git commit
git push origin main
```

### Option 3: Abort and Start Over
```bash
git merge --abort
git pull origin copilot/update-personal-web-with-info
```

---

## Clean Up (Optional)
```bash
rm -rf personal-web/
```

---

## Check Status
```bash
git status
```

Done.
