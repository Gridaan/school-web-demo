

A modern, responsive React-based landing page for The Kalyani School built with Vite, Tailwind CSS, and best practices for web development.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd school_web_demo

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Development

```bash
# Start development server
npm run dev

# The app will open at http://localhost:5173
```

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
school_web_demo/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Layout wrappers
│   │   ├── sections/        # Landing page sections (Hero, About, etc.)
│   │   ├── common/          # Reusable UI components (Buttons, Cards, etc.)
│   │   └── forms/           # Form components (EnquiryForm, Newsletter, etc.)
│   ├── pages/               # Page components
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API services and business logic
│   ├── context/             # React Context for state management
│   ├── utils/               # Utility functions and helpers
│   ├── config/              # Configuration files and constants
│   ├── styles/              # Global CSS and Tailwind imports
│   ├── assets/              # Images, icons, fonts
│   ├── App.jsx              # Main App component
│   └── main.jsx             # React entry point
├── public/                  # Static assets
├── .github/
│   └── workflows/           # CI/CD workflows
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## 🛠️ Technology Stack

### Core
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation

### Form & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### UI Components & Animations
- **Swiper** - Carousel/slider component
- **Framer Motion** - Animation library
- **AOS (Animate On Scroll)** - Scroll animations
- **React Icons** - Icon library
- **Headless UI / Radix UI** - Accessible component primitives

### Data Fetching
- **Axios** - HTTP client
- **@tanstack/react-query** - Data fetching and caching

### Styling Utilities
- **clsx** - Class name utility
- **tailwind-merge** - Tailwind class merging

## 📋 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
npm run type-check # Run TypeScript type checking
```

## 🎨 Design System

### Colors
- **Primary Blue**: `#1E40AF`
- **Secondary Navy**: `#0F172A`
- **Accent Gold**: `#D97706`
- **Success**: `#10B981`
- **Warning**: `#F59E0B`
- **Error**: `#EF4444`

### Typography
- **Font**: Inter (headings & body), Open Sans (body)
- **Sizes**: Responsive scales from 12px to 60px

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: ≥ 1024px

## ♿ Accessibility

This project follows WCAG 2.1 Level AA guidelines:
- Semantic HTML markup
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader support

## 📱 Responsive Design

The application is fully responsive across:
- Mobile (375px - 640px)
- Tablet (641px - 1024px)
- Desktop (1025px+)

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) for automated deployment to Vercel.

## 🔐 Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_GOOGLE_ANALYTICS_ID=your-analytics-id
VITE_ENVIRONMENT=development
```

## 📦 Component Guide

### Layout Components
- `Header` - Global navigation header
- `Footer` - Global footer with links and contact info
- `Container` - Max-width wrapper

### Common Components
- `Button` - Primary, secondary, text variants
- `Card` - Reusable card component
- `Modal` - Dialog/modal for forms and content
- `Carousel` - Image and content carousel

### Section Components
- `HeroSection` - Landing hero with carousel
- `AwardsSection` - Achievements and certifications
- `AboutSection` - School mission and values
- `AcademicsSection` - Curriculum overview
- `GallerySection` - Infrastructure photos
- `AlumniSection` - Alumni showcase carousel
- `TestimonialSection` - Parent/student testimonials

### Form Components
- `EnquiryForm` - Admissions inquiry form
- `NewsletterForm` - Email subscription form
- `ContactForm` - General contact form

## 🧪 Testing

Testing setup (to be configured):
- Vitest for unit tests
- React Testing Library for component tests
- Cypress for E2E tests

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## 🔍 SEO

- Meta tags and Open Graph configured
- Semantic HTML structure
- Structured data (schema.org) ready for implementation
- Sitemap generation ready
- Robots.txt configured

## 📈 Performance

### Optimization Techniques
- Code splitting with Vite
- Image lazy loading
- CSS minification
- JavaScript minification
- Tree shaking
- Vendor bundle separation

### Target Metrics
- Lighthouse Score: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🐛 Debugging

- React DevTools extension recommended
- Vite HMR (Hot Module Replacement) for fast development
- Browser DevTools for styling and network debugging
- Console errors logged to browser console

## 📝 Contributing

1. Create a feature branch
2. Make changes following code style
3. Commit with clear messages
4. Push and create a pull request
5. Follow the PR review process

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For issues and support, contact: info@thekalyanischool.edu.in

---

**Built with ❤️ for The Kalyani School**
