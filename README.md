# Personal Portfolio Website

⚡ Dynamic Portfolio Website built with Next.js, Chakra UI, and Contentful!

This is a modern, responsive portfolio website template based on the open-source project by [Abdul Rahman](https://github.com/abdulrcs/abdulrahman.id) (MIT License).

## ✨ Features

- 🎨 Built with Next.js 13 and Chakra UI
- 📝 Blog functionality using GitHub Issues as CMS
- 🎯 Project showcase with dynamic content from Contentful
- 📊 Page view tracking with Firebase
- 📈 Google Analytics integration
- 🌙 Dark theme optimized
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js optimizations
- 🎭 Smooth animations with Framer Motion

## 🛠 Tech Stack

- **Framework:** Next.js 13
- **UI Library:** Chakra UI
- **Styling:** Emotion
- **CMS:** Contentful (for projects) + GitHub Issues (for blog)
- **Database:** Firebase (for analytics)
- **Deployment:** Vercel
- **Analytics:** Google Analytics (react-ga4)

## 📦 Getting Started

### Prerequisites

- Node.js 14+ and npm/yarn
- Contentful account (for project management)
- Firebase account (for view tracking)
- GitHub account (for blog via Issues)
- Google Analytics account (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local` and fill in your API keys:
   ```bash
   cp .env.example .env.local
   ```

   Update the following variables:
   - `NEXT_PUBLIC_BASE_URL`: Your website URL (default: `http://localhost:8080`)
   - `PORT`: Server port (default: `8080`)
   - `CONTENTFUL_SPACE_ID`: Your Contentful space ID
   - `CONTENTFUL_ACCESS_TOKEN`: Your Contentful access token
   - `FIREBASE_*`: Your Firebase configuration
   - `GITHUB_TOKEN`: Your GitHub personal access token
   - `NEXT_PUBLIC_UA_CODE`: Your Google Analytics tracking ID

4. **Run the development server**
   ```bash
   npm run dev
   # Server will start on http://localhost:8080
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   # Production server will start on http://localhost:8080
   ```

### Setting Up Contentful

1. Create a [Contentful](https://www.contentful.com/sign-up/) account
2. Create a new space
3. Add the following content types:

   **Featured Projects:**
   - Content Type ID: `featuredProjects`
   - Fields:
     - title (Short text)
     - slug (Short text)
     - description (Long text)
     - imageUrl (Short text)
     - tags (Short text, list)
     - order (Number)

   **Introduction:**
   - Content Type ID: `introduction`
   - Fields:
     - emoji (Short text)
     - description (Long text)
     - company (Short text)
     - companyUrl (Short text)

   **Contact Me:**
   - Content Type ID: `contactMe`
   - Fields:
     - title (Short text)
     - highlightText (Short text)
     - description (Long text)

4. Add your content to these content types
5. Get your Space ID and Access Token from Settings > API Keys

### Setting Up Firebase

1. Create a [Firebase](https://console.firebase.google.com/) project
2. Enable Firestore Database
3. Create a collection named `views`
4. Copy your Firebase config and add to `.env.local`

### Setting Up GitHub Blog

1. Create a GitHub repository for your portfolio
2. Enable Issues on your repository
3. Create blog posts as GitHub Issues with labels:
   - Add label `post` for blog posts
   - Add label `project` for project posts
4. In the issue body, add frontmatter:
   ```markdown
   ---
   slug: your-post-slug
   date: 2024-01-01
   image: https://your-image-url.com/image.jpg
   summary: Brief summary of your post
   readingTime: 5 min read
   techStack: React, Next.js, TypeScript
   ---
   
   Your content here...
   ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website.

## 🎨 Customization

### Update Personal Information

1. **Replace placeholder text** in the following files:
   - `pages/index.js` - Update meta tags and titles
   - `pages/blog/index.js` - Update meta tags
   - `pages/projects/index.js` - Update meta tags
   - `components/Introduction.js` - Update name, social links
   - `components/Navbar.js` - Update logo
   - `components/ContactMe.js` - Update contact links
   - `components/AboutMe.js` - Update about section
   - `components/Container.js` - Update footer

2. **Update GitHub repo references:**
   - Search for `yourusername/your-repo` and replace with your repo
   - Update in: `pages/index.js`, `pages/blog/[slug].js`, `pages/blog/index.js`, `pages/projects/index.js`

3. **Replace profile image:**
   - Update image URLs in `components/Introduction.js` and `components/AboutMe.js`

4. **Update domain:**
   - Search for `yourdomain.com` and replace with your actual domain
   - Update in meta tags across all pages

### Styling

- Theme configuration: `styles/theme.js`
- Syntax highlighting: `styles/prism.js`
- Global styles: `pages/_app.js`

## 📁 Project Structure

```
├── components/          # React components
│   ├── AboutMe.js
│   ├── Card.js
│   ├── ContactMe.js
│   ├── Container.js
│   ├── FeaturedProjects.js
│   ├── Introduction.js
│   ├── LatestArticle.js
│   ├── MDXComponents.js
│   ├── Navbar.js
│   ├── NextSeoData.js
│   ├── PostContainer.js
│   └── ProjectContainer.js
├── hook/               # Custom React hooks
│   ├── SlideUpWhenVisible.js
│   ├── useMediaQuery.js
│   └── useUtterances.js
├── pages/              # Next.js pages
│   ├── api/
│   │   └── views/
│   ├── blog/
│   ├── projects/
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── public/             # Static files
├── styles/             # Style configuration
│   ├── prism.js
│   └── theme.js
├── .env.example        # Environment variables template
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables from `.env.local`
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo)

### Deploy on Custom Server (Port 8080)

The application is pre-configured to run on port 8080. To deploy on your own server:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   # Server will start on http://localhost:8080
   ```

3. **Using PM2 (recommended for production)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "personal-web" -- start
   pm2 save
   pm2 startup
   ```

4. **Using custom port**
   
   You can change the port by editing `package.json` scripts or setting the `PORT` environment variable:
   ```bash
   PORT=8080 npm start
   ```

## 🐛 Troubleshooting

### Contentful Error: "Expected parameter accessToken"

If you see this error, make sure:
1. You have copied `.env.example` to `.env.local`
2. You have filled in your `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`
3. Your Contentful credentials are valid

The application now handles missing Contentful credentials gracefully with fallback values.

## 📝 License

This project is based on [abdulrahman.id](https://github.com/abdulrcs/abdulrahman.id) by Abdul Rahman, which is licensed under the MIT License.

## 🙏 Credits

Original design and implementation by [Abdul Rahman](https://github.com/abdulrcs)

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue in the repository
- Check the [original project](https://github.com/abdulrcs/abdulrahman.id) for more details

---

Made with ❤️ using Next.js and Chakra UI
