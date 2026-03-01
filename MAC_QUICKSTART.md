# 🍎 Mac Quick Start - View Your Portfolio in 30 Seconds!

This guide is specifically for **macOS users** to view and deploy your portfolio website.

## ⚡ View It NOW on Your Mac (Step-by-Step)

### Step 0: Download the Repository from GitHub (First Time Only)

**If you don't have the repository on your Mac yet**, you need to download it first!

#### Method A: Download as ZIP (Easiest - No Git Required)

1. **Go to GitHub** in your browser:
   - Visit: https://github.com/temuulengan/personal-web

2. **Click the green "Code" button**

3. **Click "Download ZIP"**

4. **Find the downloaded file**:
   - It's usually in your **Downloads** folder
   - File name: `personal-web-copilot-polish-portfolio-website-code.zip`

5. **Double-click the ZIP file** to unzip it

6. **Move the folder** somewhere convenient (Desktop, Documents, etc.)

7. **Now continue to Step 1 below!**

#### Method B: Clone with Git (Recommended if you have Git)

**Check if you have Git installed:**
```bash
git --version
```

If you see a version number, you have Git! If not, install it:

**Installing Git on Mac:**
```bash
# Option 1: Using Homebrew (if you have it)
brew install git

# Option 2: Download from https://git-scm.com/download/mac

# Option 3: Xcode Command Line Tools (Mac will prompt you)
git --version
# Click "Install" when prompted
```

**Clone the repository:**
```bash
# Navigate to where you want to save it (e.g., Desktop)
cd ~/Desktop

# Clone the repository (COPY THIS ENTIRE LINE!)
git clone https://github.com/temuulengan/personal-web.git

# You should see: "Cloning into 'personal-web'..."
```

⚠️ **Common Mac Terminal Mistake:** Don't just paste the URL alone!
- ❌ Wrong: `https://github.com/temuulengan/personal-web.git`
  - This gives: `zsh: no such file or directory`
- ✅ Right: `git clone https://github.com/temuulengan/personal-web.git`
  - Always include `git clone` before the URL!

✅ **Success!** The repository is now on your Mac in the `personal-web` folder!

---

### Step 1: Open Terminal on Mac

Choose ONE of these methods to open Terminal:

**Method A: Using Spotlight (Fastest)**
1. Press `⌘ + Space` (Command + Spacebar)
2. Type: `Terminal`
3. Press `Enter`

**Method B: Using Finder**
1. Open **Finder**
2. Go to **Applications** → **Utilities**
3. Double-click **Terminal**

**Method C: Using Launchpad**
1. Press `F4` or pinch with thumb and three fingers on trackpad
2. Type: `Terminal`
3. Click on Terminal icon

### Step 2: Navigate to Your Project Folder

In Terminal, type this command to go to your project directory:

```bash
cd personal-web
```

💡 **Common locations after downloading/cloning:**

```bash
# If you downloaded ZIP and it's in Downloads:
cd ~/Downloads/personal-web-copilot-polish-portfolio-website-code

# If you cloned to Desktop:
cd ~/Desktop/personal-web

# If you moved it to Documents:
cd ~/Documents/personal-web

# If you moved it to your home directory:
cd ~/personal-web
```

🔍 **Not sure where it is?** Use Finder to locate the `personal-web` folder (or `personal-web-copilot-polish-portfolio-website-code` if you downloaded ZIP), then drag and drop the folder onto the Terminal window to auto-fill the path!

**Example of drag-and-drop:**
1. Open Finder
2. Find your `personal-web` folder
3. Type `cd ` in Terminal (with a space after cd)
4. Drag the folder from Finder onto Terminal
5. Press Enter

✅ **Verify you're in the right place:**
```bash
# Check your current location
pwd

# List files - you should see index.html
ls
```

You should see files like: `index.html`, `styles.css`, `script.js`, etc.

### Step 3: Check if Python 3 is Installed

Mac usually comes with Python pre-installed. Check your version:

```bash
python3 --version
```

You should see something like: `Python 3.9.6` or higher

❌ **If Python 3 is not found**, install it:
```bash
# Using Homebrew (recommended)
brew install python3

# Or download from: https://www.python.org/downloads/macos/
```

### Step 4: Start the Local Web Server

Run this command:

```bash
python3 -m http.server 8080
```

You should see:
```
Serving HTTP on :: port 8080 (http://[::]:8080/) ...
```

🎉 **Success!** Your server is now running!

### Step 5: Open Your Portfolio in Browser

**Option A: Auto-open with Terminal command**

Open a **NEW Terminal tab** (`⌘ + T`) and run:
```bash
open http://localhost:8080
```

This will automatically open your default browser to your portfolio!

**Option B: Manual browser opening**

1. Open any web browser (Safari, Chrome, Firefox, etc.)
2. Type in the address bar: `http://localhost:8080`
3. Press `Enter`

### Step 6: View Your Portfolio! 🎉

Your portfolio is now live locally! You should see your beautiful website.

### To Stop the Server

When you're done viewing:
1. Go back to the Terminal window running the server
2. Press `Control + C` (that's `Ctrl + C`, not `⌘ + C`)
3. The server will stop

---

## 🔧 Mac-Specific Troubleshooting

### Website Shows No Design / Looks Plain ⚠️ COMMON ISSUE

**Symptoms:**
- You open the website but it looks like plain text
- No colors, no styling, no animations
- Just black text on white background
- Looks "broken" or unfinished

**What You Did Wrong:** You **double-clicked `index.html`** in Finder instead of using a local server!

**Why This Happens:**
When you double-click `index.html`, macOS opens it in your browser as:
```
file:///Users/yourname/Desktop/personal-web/index.html
```

Modern websites need to be served through HTTP (like `http://localhost:8080`) for CSS, fonts, and JavaScript to work properly!

**✅ THE FIX - Use a Local Server:**

1. **Open Terminal** (`⌘ + Space`, type "Terminal")

2. **Navigate to your folder:**
   ```bash
   cd ~/Desktop/personal-web
   # Or wherever you saved it
   ```

3. **Start the server:**
   ```bash
   python3 -m http.server 8080
   ```

4. **Open in browser:**
   ```bash
   open http://localhost:8080
   ```

**What You Should See:**

When served correctly, your portfolio looks like this:

![Working Portfolio Design](https://github.com/user-attachments/assets/5d932b0f-7d61-4907-a580-a0c36a6614ca)

✨ **Features when working properly:**
- 🎨 Animated gradient background with floating purple/blue orbs
- 🎯 Modern navigation bar with smooth transitions
- 💎 Styled buttons and cards
- 🌈 Professional blue/purple color scheme
- ✨ Smooth animations when scrolling
- 📱 Responsive design that works on all devices

**Remember on Mac:** 
- ❌ DON'T double-click `index.html` in Finder
- ✅ DO use Terminal with `python3 -m http.server 8080`

---

### "Port already in use" Error

If port 8080 is busy, try a different port:

```bash
python3 -m http.server 8081
# Then open: http://localhost:8081
```

### "Permission Denied" Error

If you get permission errors:

```bash
# Make sure you're in the right directory
pwd

# Check if index.html exists
ls -la | grep index.html
```

### Python Not Found?

**Check which Python you have:**
```bash
# Try python3
python3 --version

# Try python (might be Python 2 on older Macs)
python --version

# Check if it's installed
which python3
```

**Install Python 3 using Homebrew:**
```bash
# First install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Python 3
brew install python3
```

### Browser Not Opening Automatically?

If `open` command doesn't work:
1. Manually open Safari, Chrome, or any browser
2. Type: `http://localhost:8080` in the address bar
3. Press Enter

### Changes Not Showing?

On Mac, hard refresh your browser:
- Safari: `⌘ + Option + R`
- Chrome/Firefox: `⌘ + Shift + R`

---

## 🌐 Deploy to Internet (GitHub Pages - FREE!)

### For Mac Users:

1. **Open Safari, Chrome, or any browser**

2. **Go to**: https://github.com/temuulengan/personal-web/settings/pages

3. **Login to GitHub** if prompted

4. **Click "Pages"** in the left sidebar

5. **Under "Source"**:
   - Select branch: `copilot/polish-portfolio-website-code` (or `main`)
   - Click **Save**

6. **Wait 2 minutes** ⏱️

7. **Refresh the page** and you'll see:
   ```
   Your site is live at https://temuulengan.github.io/personal-web/
   ```

8. **Click "Visit site"** to see your portfolio live on the internet!

---

## 🎯 Mac Terminal Tips & Tricks

### Useful Mac Terminal Shortcuts

- **Open new tab**: `⌘ + T`
- **Close tab**: `⌘ + W`
- **Clear screen**: `⌘ + K` or type `clear`
- **Stop process**: `Control + C` (not Command!)
- **Auto-complete**: Press `Tab` while typing
- **Previous command**: Press `↑` arrow key
- **Home directory**: `cd ~`
- **Go back one directory**: `cd ..`

### Quick Commands to Remember

```bash
# See where you are
pwd

# List files in current directory
ls

# List all files (including hidden)
ls -la

# Navigate to home directory
cd ~

# Navigate to a specific folder
cd /path/to/folder

# Open current directory in Finder
open .

# Open a specific file
open index.html
```

### Creating an Alias (Optional - for convenience)

Add this to your `~/.zshrc` or `~/.bash_profile`:

```bash
# Quick server alias
alias serve="python3 -m http.server 8080"
```

Then you can just type `serve` in your project folder!

To add it:
```bash
# For newer Macs (using zsh)
echo 'alias serve="python3 -m http.server 8080"' >> ~/.zshrc
source ~/.zshrc

# For older Macs (using bash)
echo 'alias serve="python3 -m http.server 8080"' >> ~/.bash_profile
source ~/.bash_profile
```

---

## 📱 Alternative Methods for Mac Users

### Method 1: Using PHP (pre-installed on Mac)

```bash
cd personal-web
php -S localhost:8080
```

Then open: http://localhost:8080

### Method 2: Using Node.js (if you have it)

```bash
cd personal-web
npx http-server -p 8080
```

Then open: http://localhost:8080

### Method 3: Using Python 2 (on older Macs)

```bash
cd personal-web
python -m SimpleHTTPServer 8080
```

Then open: http://localhost:8080

### Method 4: Double-click (simplest but not recommended)

Just navigate to your project folder in Finder and double-click `index.html`

⚠️ Note: Some features might not work properly with this method.

---

## 🍎 Mac-Specific Features

### Open in Multiple Browsers

```bash
# Open in Safari
open -a Safari http://localhost:8080

# Open in Chrome
open -a "Google Chrome" http://localhost:8080

# Open in Firefox
open -a Firefox http://localhost:8080
```

### View Server Logs

The Terminal will show you when someone accesses your site:
```
127.0.0.1 - - [01/Mar/2026 08:30:00] "GET / HTTP/1.1" 200 -
```

This helps you debug if something isn't loading correctly.

---

## ✅ Quick Reference Card

**Print or save this for quick access:**

```bash
# 1. Open Terminal: ⌘ + Space, type "Terminal"

# 2. Go to project
cd ~/personal-web  # or wherever your folder is

# 3. Start server
python3 -m http.server 8080

# 4. Open in browser (in new tab: ⌘ + T)
open http://localhost:8080

# 5. When done, stop server
# Press: Control + C
```

---

## 🎓 Understanding What You're Doing

**What does `cd` mean?**
- `cd` = "Change Directory" - moves you to a different folder

**What does `python3 -m http.server` do?**
- Starts a simple web server that serves your HTML/CSS/JS files
- Makes your portfolio accessible in a browser
- The `8080` is the port number (like a channel)

**What is `localhost`?**
- `localhost` = your own computer
- `127.0.0.1` = same thing (IP address format)
- When you visit `localhost:8080`, you're accessing the server running on your Mac

**What is a port?**
- Port = a numbered channel for network communication
- `8080` is a common port for development servers
- Think of it like apartment numbers in a building (localhost is the building)

---

## 🚀 Next Steps

1. ✅ **View locally** (you just did this!)
2. ✅ **Customize your content** (edit `index.html`)
3. ✅ **Deploy to GitHub Pages** (follow steps above)
4. ✅ **Share your URL** on resume & LinkedIn
5. ✅ **Apply for jobs** with your professional portfolio!

---

## 🆘 Still Need Help?

**Common Mac Issues:**

1. **"zsh: command not found: python3"**
   - Solution: Install Python 3 using Homebrew (see Step 3 above)

2. **"Operation not permitted"**
   - Solution: Make sure you're in the right directory with `pwd`

3. **Can't find my project folder**
   - Solution: Use Spotlight (`⌘ + Space`) to search for "personal-web"
   - Or drag folder from Finder onto Terminal to get the path

4. **Server starts but page won't load**
   - Check you're using the right URL: `http://localhost:8080`
   - Try a different browser
   - Check firewall settings (System Preferences → Security & Privacy)

**For more deployment options:**
- See `DEPLOYMENT.md` for Netlify, Vercel, and other platforms
- See `QUICKSTART.md` for general instructions

---

**Made with 💚 for Mac users. Happy coding! 🎉**
