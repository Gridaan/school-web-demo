<!-- Quick Start Guide for the React Project -->

# 🚀 Quick Start Guide - School Landing Page

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 18, React DOM
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Swiper (carousels)
- React Hook Form (form management)
- Axios (HTTP client)
- And more...

## Step 2: Setup Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
VITE_ENVIRONMENT=development
```

## Step 3: Start Development Server

```bash
npm run dev
```

Your app will open at **http://localhost:5173** with hot module replacement (HMR).

## Step 4: Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 📂 Project Structure at a Glance

```
school_web_demo/
│
├── src/
│   ├── components/
│   │   ├── layout/              # Header, Footer
│   │   ├── sections/            # Landing page sections
│   │   ├── common/              # Reusable UI components
│   │   └── forms/               # Form components
│   ├── pages/
│   │   └── Home.jsx             # Landing page
│   ├── hooks/                   # Custom React hooks
│   ├── services/
│   │   └── api.js               # API calls
│   ├── utils/
│   │   └── helpers.js           # Utility functions
│   ├── config/
│   │   └── constants.js         # App constants
│   ├── styles/
│   │   └── index.css            # Global styles
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── App.jsx                  # Root component
│   └── main.jsx                 # Entry point
│
├── public/                      # Static assets
├── .github/workflows/           # CI/CD
├── index.html                   # HTML template
├── vite.config.js               # Vite config
├── tailwind.config.js           # Tailwind config
├── postcss.config.js            # PostCSS config
├── .eslintrc.json               # ESLint config
├── .prettierrc.json             # Prettier config
├── package.json
├── README.md
├── requirement.md               # Technical requirements
└── PROJECT_STRUCTURE.md         # Detailed structure guide
```

## 🎯 Next Steps

### 1. Create Components
Start building components based on `requirement.md` sections:

**Example: Create Hero Section**
```bash
# Create file: src/components/sections/HeroSection.jsx
```

### 2. Add Sections
Build page sections in sequence:
1. Hero with carousel
2. Awards section
3. Mission/Vision pillars
4. Academics section
5. Infrastructure gallery
6. Alumni carousel
7. Admissions CTA
8. Newsletter section

### 3. Setup Routing (if needed)
Install React Router:
```bash
npm install react-router-dom
```

### 4. API Integration
Update `src/services/api.js` with your backend endpoints

### 5. Deploy
- Connect to Vercel, Netlify, or your hosting provider
- Set environment variables on hosting platform
- Deploy using `npm run build`

## 📱 Development Commands

```bash
npm run dev          # Start dev server (port 5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
npm run format       # Auto-format code
npm run type-check   # TypeScript checking (if added)
```

## 🎨 Design Tokens

### Colors
Available in Tailwind config:
- `primary-*` (blues)
- `secondary-*` (navy)
- `accent-*` (gold)
- `success`, `warning`, `error`

### Spacing
- Use Tailwind spacing: `p-4`, `m-8`, `space-y-6`, etc.
- Base unit: 4px

### Typography
- Headings: Inter (600-700 weight)
- Body: Inter/Open Sans (400 weight)
- Use classes: `text-4xl`, `font-bold`, etc.

## 🔍 Key Files to Understand

1. **App.jsx** - Main app component setup
2. **src/pages/Home.jsx** - Landing page template
3. **src/components/layout/Header.jsx** - Navigation
4. **src/components/layout/Footer.jsx** - Footer
5. **requirement.md** - Complete technical blueprint
6. **PROJECT_STRUCTURE.md** - Detailed folder guide

## ⚡ Performance Tips

1. **Code Splitting**: Use `React.lazy()` for routes
2. **Images**: Lazy load images, use WebP format
3. **Bundles**: Vite automatically code-splits
4. **Tree Shaking**: Unused code is automatically removed

## 🐛 Debugging

- Use React DevTools extension
- Check browser console for errors
- Use Vite's built-in debug output
- Check Network tab for API calls

## 📚 Resources

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev)
- [Framer Motion](https://www.framer.com/motion)
- [React Hook Form](https://react-hook-form.com)

## 🚨 Troubleshooting

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Dependencies not installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styles not applying?
- Check Tailwind class names
- Rebuild CSS: `npm run dev`
- Ensure `index.css` is imported in `main.jsx`

### HMR not working?
- Refresh the browser
- Restart dev server: `Ctrl+C` then `npm run dev`

---

## Need Help?

Refer to:
1. **requirement.md** - Technical specifications
2. **PROJECT_STRUCTURE.md** - Folder organization
3. **README.md** - Full documentation

Happy coding! 🎉
