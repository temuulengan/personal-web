# Personal Portfolio Website

A minimal and stylish portfolio website for a Computer Science graduate looking to land a software engineering position.

## 🚀 Quick Start - View Your Portfolio NOW!

### 🔄 Already Have the Repository? Get Latest Changes!

If you already have the portfolio on your computer and want to get the **latest fancy design updates**:

```bash
cd personal-web
git pull origin copilot/polish-portfolio-website-code
```

📖 **See full instructions**: [PULL_CHANGES.md](PULL_CHANGES.md)

---

### First: Download the repository to your computer
```bash
# If you have git installed:
git clone https://github.com/temuulengan/personal-web.git
cd personal-web
```

**OR** download as ZIP from GitHub:
1. Go to https://github.com/temuulengan/personal-web
2. Click green "Code" button → "Download ZIP"
3. Unzip and navigate to the folder

### ⚠️ IMPORTANT: Use a Local Server (Don't Just Double-Click index.html!)

**Why?** Modern web features (CSS, fonts, animations) need HTTP protocol to work. Double-clicking `index.html` opens it as `file://` which won't show the design!

**✅ RIGHT WAY - Use a server:**
```bash
cd personal-web
python3 -m http.server 8080
# Then open: http://localhost:8080
```

**❌ WRONG WAY - Don't do this:**
- Double-clicking `index.html` in Finder/Explorer
- Opening it directly in browser shows plain text with no design

**What it should look like when working:**

![Working Portfolio](https://github.com/user-attachments/assets/5d932b0f-7d61-4907-a580-a0c36a6614ca)

### Then: See it locally in 30 seconds
```bash
cd personal-web
python3 -m http.server 8080
# Then open: http://localhost:8080
```

🍎 **Mac Users**: See detailed step-by-step Mac Terminal instructions in [MAC_QUICKSTART.md](MAC_QUICKSTART.md)

### Deploy to internet for FREE (GitHub Pages):
1. Go to: https://github.com/temuulengan/personal-web/settings/pages
2. Select your branch under "Source" and click Save
3. Your live URL: `https://temuulengan.github.io/personal-web/`

📖 **Detailed Instructions**: 
- 🍎 Mac Terminal Guide: [MAC_QUICKSTART.md](MAC_QUICKSTART.md) 
- 📘 General Guide: [QUICKSTART.md](QUICKSTART.md)
- 🔄 Pull Latest Changes: [PULL_CHANGES.md](PULL_CHANGES.md)
- 🚀 All Deployment Options: [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 🌟 Features

- **Modern & Minimal Design**: Clean, professional aesthetic that focuses on content
- **Fully Responsive**: Looks great on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Subtle animations and transitions for enhanced user experience
- **Easy Customization**: Simple HTML/CSS/JavaScript structure for easy updates
- **SEO Optimized**: Proper meta tags and semantic HTML for better search visibility
- **Fast Loading**: No heavy frameworks, pure vanilla JavaScript
- **Accessibility**: Built with ARIA labels and keyboard navigation support

## 📂 Project Structure

```
personal-web/
├── index.html          # Main HTML file with all sections
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
├── resumetest1.pdf     # Your resume PDF file
└── README.md           # This file
```

## 🚀 Quick Start

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/temuulengan/personal-web.git
   cd personal-web
   ```
   
   💡 **Note:** Make sure to include `git clone` before the URL. Just pasting the URL alone (`https://github.com/...`) will give an error!

2. Open `index.html` in your browser:
   - Double-click the `index.html` file, or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. Visit `http://localhost:8000` in your browser

## 🎨 Customization

### Update Personal Information

1. **Name and Title**: Edit the `index.html` file
   - Find the hero section and update the name
   - Update the hero subtitle with your title

2. **Contact Information**: 
   - Update email address in the contact section
   - Add your GitHub, LinkedIn URLs

3. **Skills**: 
   - Modify the skills section to match your tech stack
   - Add or remove skill categories as needed

4. **Projects**: 
   - Replace placeholder projects with your actual projects
   - Update project descriptions, technologies, and links

5. **About Section**:
   - Customize the about text to reflect your background
   - Update education details

### Color Scheme

The color palette can be customized in `styles.css` by modifying the CSS variables:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #10b981;    /* Accent color */
    --text-primary: #1f2937;       /* Main text color */
    --text-secondary: #6b7280;     /* Secondary text color */
}
```

### Resume

Replace `resumetest1.pdf` with your own resume PDF and update the filename reference in `index.html` if needed.

## 🌐 Deployment

### GitHub Pages (Recommended - Free)

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the branch (usually `main`)
4. Click "Save"
5. Your site will be published at `https://temuulengan.github.io/personal-web/`

### Netlify (Free)

1. Create an account at [Netlify](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Click "Deploy site"
5. Your site will be live with a custom URL

### Vercel (Free)

1. Create an account at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Click "Deploy"
4. Your site will be live instantly

### Custom Domain

After deploying to any of the above platforms, you can add a custom domain:

1. Purchase a domain from a registrar (e.g., Namecheap, Google Domains)
2. Follow the platform's instructions to add your custom domain
3. Update DNS settings as required

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive features
- **Google Fonts**: Inter font family

## ✨ Best Practices Implemented

- ✅ Semantic HTML5 elements
- ✅ Mobile-first responsive design
- ✅ Smooth scroll behavior
- ✅ Accessible navigation
- ✅ Optimized performance
- ✅ SEO-friendly structure
- ✅ Cross-browser compatibility

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use!

## 📞 Support

If you have any questions or need help customizing your portfolio:
- Open an issue on GitHub
- Check existing issues for solutions

---

**Good luck with your job search! 🚀**
