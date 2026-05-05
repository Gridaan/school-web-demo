# Project Structure Guide

## Directory Breakdown

### `/src` - Main Application Code

#### `/src/components` - React Components
Organized by functionality for maintainability:

- **layout/** - Page layout components
  - `Header.jsx` - Navigation header (sticky, responsive)
  - `Footer.jsx` - Footer with links and contact info
  - `Layout.jsx` - Main layout wrapper (if needed)

- **sections/** - Landing page sections
  - `HeroSection.jsx` - Hero carousel
  - `AwardsSection.jsx` - Awards and accreditations
  - `AboutSection.jsx` - Mission, vision, values
  - `AcademicsSection.jsx` - Curriculum overview
  - `GallerySection.jsx` - Infrastructure gallery
  - `AlumniSection.jsx` - Alumni carousel
  - `AdmissionsCtaSection.jsx` - Admissions call-to-action
  - `NewsletterSection.jsx` - Newsletter signup

- **common/** - Reusable UI components
  - `Button.jsx` - Button component (variants: primary, secondary, text)
  - `Card.jsx` - Card wrapper component
  - `Modal.jsx` - Modal dialog component
  - `Carousel.jsx` - Generic carousel component
  - `Container.jsx` - Max-width container wrapper
  - `Badge.jsx` - Badge for labels and tags
  - `Icon.jsx` - Icon wrapper component
  - `Spinner.jsx` - Loading spinner
  - `Toast.jsx` - Toast notifications

- **forms/** - Form components
  - `EnquiryForm.jsx` - Admissions inquiry form
  - `NewsletterForm.jsx` - Email subscription form
  - `ContactForm.jsx` - General contact form
  - `FormField.jsx` - Reusable form field wrapper

#### `/src/pages` - Page Components
- `Home.jsx` - Landing page (combines all sections)
- `Index.jsx` - Route index

#### `/src/hooks` - Custom React Hooks
- `useIsMobile.js` - Detect mobile viewport
- `useLocalStorage.js` - Persist data to localStorage
- `useFetch.js` - Data fetching with loading/error states
- `useIntersectionObserver.js` - Intersection observer for scroll animations
- `useScroll.js` - Track scroll position

#### `/src/services` - API & Business Logic
- `api.js` - Axios instance with interceptors
- `enquiry.js` - Admissions enquiry API calls
- `newsletter.js` - Newsletter subscription API calls
- `auth.js` - Authentication services (if needed)

#### `/src/context` - React Context
- `AppContext.jsx` - Global app context (UI state)
- `ThemeContext.jsx` - Theme/dark mode context (if implementing)

#### `/src/utils` - Helper Functions
- `helpers.js` - General utility functions
- `formatters.js` - Text formatting utilities
- `validators.js` - Form validation functions
- `constants.js` - App-wide constants (moved to /config)

#### `/src/config` - Configuration
- `constants.js` - App constants (API URLs, animation durations, etc.)
- `theme.js` - Color and typography configuration

#### `/src/styles` - Global Styles
- `index.css` - Global styles and Tailwind imports
- `animations.css` - Custom animation definitions (optional)

#### `/src/assets` - Static Assets
- **images/** - Hero, gallery, og-image, etc.
- **icons/** - Custom SVG icons
- **fonts/** - Local font files (if self-hosting)

#### `/src/App.jsx` - Root Component
Main application component with routing setup (if using React Router)

#### `/src/main.jsx` - Entry Point
React application initialization and rendering

### Root Level Files

#### Configuration Files
- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS plugins
- `.eslintrc.json` - ESLint rules
- `.prettierrc.json` - Code formatting rules
- `tsconfig.json` - TypeScript config (if using TypeScript)

#### Environment & Git
- `.env.example` - Environment variables template
- `.env.local` - Local environment variables (git-ignored)
- `.gitignore` - Git ignore rules
- `.prettierignore` - Prettier ignore rules

#### Documentation
- `README.md` - Project documentation
- `CONTRIBUTING.md` - Contributing guidelines (optional)
- `CHANGELOG.md` - Version history (optional)

#### Public Files
- `index.html` - HTML template
- `public/` - Static assets served as-is
  - `favicon.svg` - Favicon
  - `og-image.png` - Open Graph image
  - `robots.txt` - SEO robots directive

#### CI/CD
- `.github/workflows/` - GitHub Actions workflows
  - `deploy.yml` - Deployment pipeline

## File Naming Conventions

### Components
- **Functional Components**: PascalCase (e.g., `HeroSection.jsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useIsMobile.js`)
- **Utilities**: camelCase (e.g., `helpers.js`, `validators.js`)

### File Organization
- One component per file
- Related files grouped in directories
- Alphabetical ordering within directories
- Index files for barrel exports (optional)

## Barrel Exports (Optional)

Create `index.js` files in directories for cleaner imports:

```javascript
// src/components/common/index.js
export { default as Button } from './Button'
export { default as Card } from './Card'
export { default as Modal } from './Modal'
```

Then import as:
```javascript
import { Button, Card, Modal } from '@/components/common'
```

## Component File Template

```javascript
import React from 'react'
import PropTypes from 'prop-types'

function ComponentName({ prop1, prop2 }) {
  return (
    <div>
      {/* Component JSX */}
    </div>
  )
}

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
}

ComponentName.defaultProps = {
  prop2: 0,
}

export default ComponentName
```

## Best Practices

1. **Single Responsibility**: Each component has one clear purpose
2. **Reusability**: Components in `/common` can be used across sections
3. **Separation of Concerns**: Business logic in services, UI in components
4. **DRY (Don't Repeat Yourself)**: Extract repeated patterns into utilities
5. **Documentation**: JSDoc comments for complex functions
6. **Accessibility**: Semantic HTML and ARIA attributes
7. **Performance**: Lazy load components and images
8. **Testing**: Keep components pure and testable

## Development Workflow

1. Create component in appropriate directory
2. Define PropTypes/TypeScript interfaces
3. Export from barrel file (if using)
4. Import in page or parent component
5. Test responsiveness and accessibility
6. Run linter and formatter before committing

---

For questions or updates to this structure, refer to `requirement.md`
