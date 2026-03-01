# 🚨 Quick Fix for Sitemap Merge Conflict

## The Problem
```
error: Your local changes to the following files would be overwritten by merge:
	public/sitemap-0.xml
```

## The Solution (Copy & Paste This)

```bash
# Remove the file (it's auto-generated anyway)
rm public/sitemap-0.xml

# Pull the changes
git pull origin copilot/update-personal-website

# Rebuild (this regenerates sitemap-0.xml automatically)
npm run build
```

## ⚠️ Common Mistake
Don't type `sitemap-o.xml` (letter 'o')  
Use `sitemap-0.xml` (number ZERO)

## That's It!
After this one-time fix, you'll never see this error again. The sitemap files are now ignored by git and regenerated on each build.

---

For more details and alternative solutions, see [MERGE_CONFLICT_RESOLUTION.md](./MERGE_CONFLICT_RESOLUTION.md)
