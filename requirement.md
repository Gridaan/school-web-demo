
## Technical Requirements & Blueprint

---

## 1. Project Overview

### Goals
- Create a modern, professional, and responsive landing page for a premier educational institution
- Establish a cohesive digital presence that reflects the school's core values: excellence, happiness, and holistic learning
- Provide seamless navigation between key institutional information (About, Academics, Admissions, Achievements, Alumni)
- Implement interactive sections to engage prospective parents and students
- Support high-quality visual storytelling with images, icons, and testimonials
- Ensure accessibility compliance (WCAG 2.1 Level AA) and mobile-first responsiveness

### Target Audience
- Parents of prospective students (K-12)
- Current students and parents
- Alumni
- General educational stakeholders and community members

---

## 2. Component Architecture

### Reusable Components

#### Layout & Navigation
- **NavBar**: Fixed/sticky header with logo, primary navigation, and mobile hamburger menu
- **MobileMenu**: Overlay mobile navigation with dropdown support
- **Breadcrumb**: Optional breadcrumb navigation for inner pages
- **StickyHeader**: Variant of NavBar that becomes sticky on scroll

#### Hero & Sliders
- **HeroSlider/Carousel**: Full-width auto-playing carousel with hero images, headings, CTAs, and navigation dots
- **ImageCarousel**: Generic carousel component for alumni, activities, and testimonials (infinite scroll support)
- **StatCounter**: Animated numeric counters for achievement highlights (e.g., "1st in Pune CBSE Schools")

#### Content Cards & Sections
- **InfoCard**: Reusable card for presenting information with icon, title, description, and optional CTA
- **AwardCard**: Card component for displaying awards/accreditations with logo, title, and description
- **AlumniCard**: Profile card displaying alumni name, graduation year, university, field of study, and photo
- **ActivityCard**: Event/activity card with image, title, date, and read-more link
- **PillarCard**: Component for displaying curriculum pillars or academic offerings

#### Forms & CTAs
- **EnquiryForm**: Contact form for admissions inquiries with fields: Name, Email, Phone, Grade Interested, Message
- **NewsletterSignup**: Simple email subscription form with validation
- **CTAButton**: Prominently styled button for key actions (Admissions, Parent Portal, Enquiry)

#### Section Containers
- **SectionHeader**: Wrapper for section title, subtitle, and decorative elements
- **FeatureSection**: Container for alternating text/image layouts
- **GridContainer**: Responsive grid layout for cards (2-4 columns based on viewport)

#### Media & Utilities
- **ImageOptimizer**: Component for lazy-loading and responsive image variants
- **IconDisplay**: Icon renderer supporting multiple icon sets (educational, generic, decorative)
- **Testimonial**: Quote/testimonial display with attribution
- **Separator**: Visual dividers with optional text/decorative elements

#### Footer Components
- **FooterLinks**: Organized link groups for navigation, services, legal
- **ContactInfo**: Address, phone numbers, email display with icons
- **SocialMedia**: Social media icons and links
- **CopyrightNotice**: Attribution and legal information

---

## 3. Page Sections & Content Hierarchy

### Section 1: Global Header & Navigation
**Purpose**: Enable easy navigation across all major sections

**Content**:
- School logo (left-aligned)
- Primary navigation items:
  - About Us (dropdown: Legacy, Mission/Vision, Core Values)
  - Academics (dropdown: Curriculum Overview, Infrastructure, Specializations)
  - Admissions (dropdown: Enquiry Form, Requirements, Timeline)
  - Achievements (dropdown: Awards, Rankings, Success Stories)
  - Parents Corner (links to resources and portals)
  - Students Corner (links to student resources)
  - Alumni (dropdown: Alumni Directory, Success Stories, Guidance)
  - Career (for job listings)
- Secondary CTAs:
  - Parent Portal button (styled distinctly)
  - Admissions Enquiry button (primary color)
  - Contact Us link
- Mobile hamburger menu with collapsed navigation

**Interaction Logic**:
- Navigation becomes sticky on scroll (fixed positioning)
- Dropdown menus appear on hover (desktop) or click (mobile)
- Mobile menu toggles overlay navigation
- Active state highlights current page
- Responsive breakpoint: Collapses to hamburger at 768px

---

### Section 2: Hero Section
**Purpose**: Create strong first impression and present school's core value proposition

**Content**:
- Auto-playing carousel (3-4 hero images recommended)
- Overlay text:
  - Primary headline: "Welcome to The Kalyani School" (or rotating variants)
  - Tagline: "A school that every child, parent, and teacher loves"
  - Subheading: "Where happiness is at the heart of learning"
- Primary CTA: "Explore More" button
- Navigation dots/carousel indicators
- Optional: Auto-advance timer (5-7 seconds per slide)

**Layout**:
- Full-width, 60-70vh height on desktop
- Responsive height on mobile (40-50vh)
- Text centered or left-aligned with semi-transparent overlay
- Supports gradient overlay for text readability

**Interaction**:
- Manual slide navigation (prev/next buttons)
- Auto-play on page load
- Pause on hover (desktop)
- Touch-swipe support (mobile)
- Keyboard arrow navigation (accessibility)

---

### Section 3: Key Associations & Partnerships
**Purpose**: Establish credibility through organizational affiliations

**Content**:
- Horizontal logo display:
  - "Promoted By": [Logo]
  - "Academic Collaboration": [Logo]
  - "Affiliated to CBSE": [Affiliation badge]
- Optional: Linguistic Minority status badge

**Layout**:
- Centered logo container
- Gray background for contrast
- Logos arranged horizontally (responsive wrap on mobile)
- Icons or text labels beneath each logo
- 3-4 logos visible simultaneously

---

### Section 4: Awards & Accreditations
**Purpose**: Highlight institutional recognition and rankings

**Content**:
- Grid/carousel of award cards:
  - **QS I-GAUGE**: Diamond+ rating for Indian schools
  - **Education World C-Fore**: 1st rank in Pune for CBSE schools following National Curriculum
  - **Green School Rankings**: Platinum category by Climate Project Foundation
  - **Education World India Rankings**: 1st in Pune, 6th in Maharashtra (Day Schools)
  - **IC3 Institute**: Grade A+ accreditation
- Each card includes:
  - Award icon/logo
  - Award title
  - Recognition details/description
  - Award year (where applicable)

**Layout**:
- 2-3 column grid on desktop
- Single column on mobile
- Card design with icon, title, description
- Optional hover effect for emphasis

**Interaction**:
- Optional carousel for mobile (swipe to view more)
- Tooltip on hover with additional details

---

### Section 5: Mission, Vision & Core Values
**Purpose**: Communicate school's foundational philosophy and values

**Content**:
- Section heading: "Mission, Vision & Core Values"
- Icon-based pillars (4-5 items):
  - Mission Icon + Description
  - Vision Icon + Description
  - Core Values (expandable or linked to separate page)
  - Environment & Community Outreach
  - After School Activities
  - Bus Routes / Student Support Services
- Each pillar includes:
  - Icon (32-48px)
  - Heading
  - Brief description
  - "Read More" link

**Layout**:
- Centered grid (2-3 columns on desktop, 1 on mobile)
- Icon-text-link hierarchy
- Alternating colors or neutral background

**Interaction**:
- Links navigate to detailed pages or open modals
- Hover effect on icons (scale/color change)

---

### Section 6: Curriculum & Academic Offerings
**Purpose**: Showcase academic programs and educational approach

**Content**:
- Section title: "Curriculum Overview"
- Cards for curriculum pillars:
  - CBSE-aligned curriculum
  - Subject specializations
  - Sports & Athletics programs
  - Arts & Creative Pursuits
  - Technology & Innovation
  - Language programs
  - Co-curricular activities
- Each card includes:
  - Heading
  - 2-3 bullet points or description
  - Icon or illustrative image

**Layout**:
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Consistent card styling (height, padding, borders)
- Optional gradient or accent color per pillar

---

### Section 7: Infrastructure & Facilities Gallery
**Purpose**: Visually showcase school amenities and modern facilities

**Content**:
- Section title: "Infrastructure & Facilities"
- Image gallery with filter/category options:
  - Classrooms
  - Science Labs
  - Sports Complex
  - Library
  - Auditorium/Amphitheater
  - Cafeteria
  - Grounds
- Each image:
  - High-quality photograph (2000x1500px minimum)
  - Optional caption/overlay
  - Optional: Lightbox/modal on click for full view

**Layout**:
- Masonry or grid layout (3-4 columns on desktop, 2 on tablet, 1 on mobile)
- Lazy-loaded images for performance
- Optional: Auto-play slideshow

**Interaction**:
- Filter by category (optional tabs/buttons)
- Lightbox modal with navigation arrows
- Responsive image optimization (WebP format with fallback)

---

### Section 8: Alumni Success Stories
**Purpose**: Demonstrate student outcomes and institutional credibility

**Content**:
- Section title: "Guiding Alumni" / "Alumni Success Stories"
- Alumni carousel with individual profiles:
  - Alumni name
  - Graduation year
  - University/College attended
  - Field of study
  - Profile photo
  - Optional: Achievement badge (Rhodes Scholar, Top 100, etc.)
- Multiple carousel items visible (3-4 on desktop, 1-2 on mobile)

**Layout**:
- Horizontal carousel with navigation arrows
- Card design with image, text, and link
- 3-4 items per viewport

**Interaction**:
- Click to view full profile (optional link)
- Auto-advance carousel (5-7 second interval)
- Manual navigation (arrows, dots)
- Touch/swipe support (mobile)
- Pause on hover (desktop)

---

### Section 9: Recent Activities & Events
**Purpose**: Showcase current school life and engagement

**Content**:
- Section title: "Recent Activities"
- Activity cards grid:
  - Activity name (e.g., "Founder's Day Celebration 2024")
  - Featured image
  - Date or category badge
  - "Read More" link
  - Optional: Brief description

**Layout**:
- 3-4 column grid on desktop, 2 on tablet, 1 on mobile
- Consistent card height with image scaling
- Activity metadata (date, category)

**Interaction**:
- Click card to navigate to activity details page
- Hover effect (shadow, slight scale)

---

### Section 10: Newsletter Signup
**Purpose**: Build mailing list and encourage community engagement

**Content**:
- Section heading: "Stay Connected"
- Subheading: Value proposition for newsletter (e.g., "Get latest news, events, and school updates")
- Newsletter signup form:
  - Email input field (with placeholder text)
  - Subscribe button
  - Optional: Privacy/opt-in checkbox
- Optional: Decorative illustration or school mascot

**Layout**:
- Centered content area
- Form fields inline (email + button) on desktop, stacked on mobile
- Light background color to differentiate section

**Interaction**:
- Form validation (email format check)
- Success/error messages (toast notification or inline)
- Loading state on button during submission
- Clear error handling with user-friendly messages

---

### Section 11: Admissions Call-to-Action
**Purpose**: Encourage prospective parents to engage in admissions process

**Content**:
- Prominent CTA section with:
  - Heading: "Ready to Join Our Community?"
  - Subheading: Brief value proposition
  - Primary CTA button: "Admissions Enquiry"
  - Secondary links:
    - "View Requirements"
    - "Admissions Timeline"
    - "Parent Portal"
- Optional: Contact phone numbers or quick facts

**Layout**:
- Full-width banner or card-based container
- Centered text
- Large, prominent button styling (primary brand color)

**Interaction**:
- Admissions Enquiry button opens EnquiryForm modal or navigates to dedicated page
- Parent Portal button opens in new tab or modal

---

### Section 12: Global Footer
**Purpose**: Provide navigation, contact, and legal information

**Content**:
- **Footer Grid (4-5 columns on desktop, 2-3 on mobile)**:

  **Column 1: Quick Links**
  - Home
  - About Us
  - Curriculum
  - Admissions
  - Achievements
  - Parents Corner
  - Career
  - Contact Us

  **Column 2: Academic Links**
  - Academics Overview
  - Specializations
  - Clubs & Activities
  - Sports Programs
  - Infrastructure

  **Column 3: Useful Resources**
  - Bus Routes
  - Parent Portal
  - Student Portal
  - Alumni Portal
  - Newsletter Archive

  **Column 4: Contact Information**
  - Address (with location icon)
  - Phone numbers (3 numbers provided)
  - Email
  - Operating hours (optional)

  **Column 5: Social & Legal**
  - Social media icons (Facebook, LinkedIn, Instagram, etc.)
  - Terms & Conditions link
  - Privacy Policy link
  - Copyright notice
  - Accreditation badge

**Layout**:
- Dark background (navy, charcoal, or dark blue)
- Responsive grid (4-5 cols desktop → 2-3 cols tablet → 1 col mobile)
- Consistent icon styling
- Divider lines between sections

**Interaction**:
- All links are clickable and accessible
- Social media icons link to respective profiles (external)
- Contact information is copyable or linkable (href for email/phone)
- Back-to-top button (optional, positioned bottom-right)

---

## 4. Technical Stack Requirements

### Frontend Framework & Core
- **Framework**: React 18.x or later (or Next.js 14+ for SSR/static generation)
- **Build Tool**: Vite (recommended) or Create React App
- **Package Manager**: npm or yarn

### Styling & CSS
- **Primary Solution**: Tailwind CSS 3.x (utility-first CSS framework)
  - Alternative: SCSS/SASS with CSS Modules for component scoping
  - Ensure BEM naming convention if using custom CSS
- **CSS-in-JS** (optional): Styled-components or Emotion for dynamic styles
- **Icon Library**: 
  - React Icons (for general icons: FiMenu, FiX, FiChevron, etc.)
  - Font Awesome or Heroicons as fallback

### Animation & Motion
- **Framer Motion**: For scroll animations, carousel transitions, modal effects
- **AOS (Animate On Scroll)**: For on-scroll fade-in/slide-in effects
- **React Spring** (optional): For complex spring physics animations

### Carousel/Slider
- **Swiper**: Lightweight carousel library with React support
  - Features needed:
    - Auto-play with configurable delay
    - Touch/swipe gesture support
    - Keyboard navigation
    - Pagination dots
    - Responsive breakpoints
- Alternative: React Slick (if team preference)

### Form Handling
- **React Hook Form**: Lightweight form validation and state management
  - Integration: Combine with Zod or Yup for schema validation
- **Alternative**: Formik (more verbose but battle-tested)

### API & Data Fetching
- **Axios**: HTTP client for API calls
- **React Query (TanStack Query)**: Data fetching and caching layer
  - Handles loading, error, and success states
  - Automatic retry logic
- **Environment Variables**: .env files for API endpoints

### Image Optimization
- **Next.js Image Component**: If using Next.js (built-in optimization)
- **React Lazy Load Image Component**: Lazy loading and progressive loading
- **Image Format Support**: WebP with PNG fallback for broader compatibility

### Modal/Dialog
- **Headless UI / Radix UI**: Unstyled, accessible dialog primitives
  - Wrapper component for EnquiryForm modal, lightbox, etc.
- **React Portal**: For rendering modals outside DOM hierarchy

### State Management (if needed)
- **Local State**: React Context API + useReducer for medium complexity
- **Global State** (optional): Zustand or Redux (if application grows)

### Testing (Optional for Phase 1)
- **Vitest**: Fast unit testing framework (Vite-native)
- **React Testing Library**: Component testing
- **Cypress or Playwright**: E2E testing for critical user flows

### Accessibility
- **React Aria**: Accessible component hooks (ARIA labels, keyboard nav, focus management)
- **axe DevTools**: Accessibility audit tool (browser extension)
- **WCAG 2.1 Level AA Compliance Target**

### Performance
- **Lighthouse**: Performance auditing
- **Web Vitals**: Monitor Core Web Vitals (LCP, FID, CLS)
- **Code Splitting**: React lazy() and Suspense for route-based code splitting

### Deployment & Hosting
- **Hosting Options**:
  - Vercel (Next.js optimized, recommended)
  - Netlify (alternative, free tier available)
  - AWS S3 + CloudFront (for static builds)
- **CI/CD**: GitHub Actions for automated builds and deployment
- **Domain & SSL**: Custom domain with SSL certificate (auto-renewing)

### Dev Tools & Environment
- **Node.js**: 18.x LTS or 20.x
- **IDE**: VS Code (recommended)
- **Extensions**: ESLint, Prettier, Tailwind CSS IntelliSense, ES7+ React/Redux/React-Native snippets
- **Git**: Version control (GitHub, GitLab, or Bitbucket)

### Optional Libraries
- **Helmet**: SEO metadata management (if using React without Next.js)
- **React Scroll**: Smooth scrolling to sections
- **Lodash**: Utility functions (debounce, throttle, etc.)

---

## 5. UI/UX Specifications

### Color Palette

#### Primary Colors
- **Primary Blue**: #1E40AF (Button CTAs, hover states, active links)
- **Secondary Navy**: #0F172A (Header background, footer, dark text)
- **Accent Gold/Orange**: #D97706 (Highlights, badges, secondary CTAs)
- **Light Gray**: #F3F4F6 (Section backgrounds, cards)

#### Neutral Colors
- **Dark Gray**: #374151 (Body text, labels)
- **Medium Gray**: #9CA3AF (Secondary text, descriptions)
- **Light Gray**: #E5E7EB (Borders, dividers)
- **White**: #FFFFFF (Card backgrounds, primary backgrounds)

#### Semantic Colors
- **Success Green**: #10B981 (Form validation, success messages)
- **Warning Amber**: #F59E0B (Alerts, warnings)
- **Error Red**: #EF4444 (Error messages, validation errors)

#### Usage
- Primary Blue for main CTAs, hover states, and active navigation
- Navy for header and footer for professional, institutional feel
- Accent Gold for secondary actions and highlights
- Light Gray for section differentiation and card backgrounds
- Grays for text hierarchy and neutral elements

---

### Typography

#### Font Stack
- **Headings (H1-H6)**: 
  - Primary: "Inter", "Helvetica Neue", sans-serif
  - Fallback: System sans-serif stack
  - Weight: 600-700 (Semi-bold to Bold)

- **Body Text**:
  - Primary: "Inter", "Open Sans", sans-serif
  - Fallback: System sans-serif stack
  - Weight: 400 (Regular) for body, 500 (Medium) for emphasis

- **Accents/Special**:
  - Optional serif for quotes/testimonials: "Lora" or "Merriweather"

#### Size Scale (Responsive)
| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| H1 (Hero) | 48px | 36px | 28px |
| H2 (Section) | 36px | 28px | 24px |
| H3 (Subsection) | 28px | 24px | 20px |
| H4 (Card) | 20px | 18px | 16px |
| Body (Large) | 16px | 16px | 14px |
| Body (Normal) | 14px | 14px | 13px |
| Body (Small) | 12px | 12px | 11px |

#### Line Height
- Headings: 1.2 (tight spacing)
- Body: 1.6 (comfortable reading)
- Descriptions: 1.5 (slightly compressed)

#### Letter Spacing
- Headings: -0.02em (tight)
- Body: 0px (normal)
- Uppercase labels: 0.05em (spaced)

---

### Spacing & Layout

#### Grid System
- Base unit: 4px
- Used for: Padding, margins, gaps between elements
- Common spacings: 4, 8, 12, 16, 24, 32, 48, 64, 96px

#### Container & Breakpoints
| Breakpoint | Width | Sidebar | Container Max-Width |
|-----------|-------|---------|---------------------|
| Mobile (xs) | < 640px | None | 90vw |
| Tablet (sm) | 640-768px | None | 95vw |
| Tablet (md) | 768-1024px | Optional | 90vw (672px) |
| Desktop (lg) | 1024-1280px | N/A | 960px |
| Desktop (xl) | 1280-1536px | N/A | 1140px |
| Ultra (2xl) | ≥ 1536px | N/A | 1320px |

#### Section Padding
- Top/Bottom: 60px (desktop), 40px (tablet), 24px (mobile)
- Left/Right: 20px (mobile), 40px (tablet), 60px (desktop)

---

### Visual Hierarchy

#### Card Design
- **Padding**: 24px (desktop), 16px (mobile)
- **Border Radius**: 8px (standard), 12px (prominent cards)
- **Box Shadow**: 
  - Normal: `0 1px 3px rgba(0, 0, 0, 0.1)`
  - Hover: `0 10px 25px rgba(0, 0, 0, 0.15)`
  - Active: `0 15px 35px rgba(0, 0, 0, 0.2)`
- **Border**: 1px solid #E5E7EB
- **Background**: White (#FFFFFF) with optional subtle gradient

#### Button Styles
- **Primary Button**:
  - Background: #1E40AF (Primary Blue)
  - Text Color: White
  - Padding: 12px 24px
  - Border Radius: 6px
  - Font Weight: 600
  - Hover: Background #1E3A8A (darker), scale 1.05
  - Active: Background #1E3A8A with inset shadow

- **Secondary Button**:
  - Background: White
  - Border: 2px solid #1E40AF
  - Text Color: #1E40AF
  - Hover: Background #F0F9FF

- **Text Link**:
  - Color: #1E40AF
  - Text Decoration: None (underline on hover)
  - Hover: Underline + darker blue

---

### Responsiveness Requirements

#### Mobile (< 768px)
- **Header**: Hamburger menu replaces nav links
- **Hero**: 40-50vh height, single text overlay
- **Sections**: Single-column layout (100% width)
- **Grids**: 1-2 columns maximum
- **Typography**: Reduced sizes (see Typography scale)
- **Spacing**: Reduced padding and gaps
- **Carousels**: Full-width with visible left/right edges

#### Tablet (768px - 1024px)
- **Header**: Condensed primary nav with dropdowns on click
- **Hero**: 50-60vh height
- **Sections**: 2-column layout where appropriate
- **Grids**: 2-3 columns
- **Typography**: Intermediate sizes

#### Desktop (1024px+)
- **Header**: Full navigation with hover dropdowns
- **Sections**: Multi-column layouts (3-4 columns)
- **Spacing**: Full spacing (as specified)
- **Sidebars**: Optional for complex pages

#### Orientation Handling
- Landscape mode: Maintain readability; may stack differently on tablets
- Portrait mode: Single-column emphasis on mobile

#### Testing
- Test on devices: iPhone 12 Pro, iPhone SE, iPad, iPad Pro, Desktop 1920x1080
- Use Chrome DevTools device emulation
- Test on real devices if possible

---

### Accessibility (WCAG 2.1 Level AA)

#### ARIA Labels & Attributes
- All interactive elements: `aria-label` or `aria-labelledby`
- Form inputs: Associated `<label>` with `htmlFor`
- Buttons with icons: Text alternative via `aria-label`
- Modals: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- Carousels: `role="region"`, `aria-label="[Name] carousel"`
- Images: Descriptive `alt` text (not "image" or "photo")

#### Keyboard Navigation
- Tab order: Logical, left-to-right, top-to-bottom
- Focus visible: Outline or ring on all focusable elements (min 2px)
- Skip links: "Skip to main content" link on page load
- Modals: Trap focus within modal (Tab cycles through modal elements)
- Dropdowns: Arrow keys for menu navigation, Enter to select

#### Color & Contrast
- **Text Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Interactive Elements**: 3:1 contrast ratio
- **Links**: Distinguish from body text (not color alone; use underline on hover)
- **Status Messages**: Use color + icon + text (not color alone)

#### Motion & Animation
- Respect `prefers-reduced-motion` media query
- Auto-playing carousels: Pause on user focus/interaction
- Animations: < 3 seconds duration (recommended)
- Avoid flickering content (< 3 flashes per second)

#### Form Accessibility
- Required fields: Mark with asterisk + aria-required="true"
- Error messages: Associated with form field, clear language
- Success messages: Announced to screen readers (aria-live="polite")
- Placeholder text: Not a substitute for labels

#### Image & Media
- All images: Descriptive alt text
- Decorative images: `alt=""` and `role="presentation"`
- Icons: Treat as images (alt text) or as semantic elements (aria-label)
- Videos: Captions and audio descriptions (optional for MVP)

#### Testing Tools
- Axe DevTools browser extension
- Lighthouse (Chrome DevTools)
- NVDA screen reader (Windows), VoiceOver (Mac)
- WAVE browser extension

---

## 6. Interaction Logic

### Navigation Behavior

#### Primary Navigation (NavBar)
- **Desktop Hover State**:
  - Main menu items trigger submenu display on hover
  - Submenu persists while hovering over menu or submenu
  - Delay: 150ms before submenu appears
  
- **Mobile Click State**:
  - Hamburger icon toggles mobile menu overlay
  - Menu item tap expands dropdown or navigates
  - Overlay closes on link click or backdrop click
  - Smooth animation (fade-in, slide-up)

- **Sticky Behavior**:
  - Header becomes fixed on scroll (top: 0)
  - Smooth transition when crossing sticky threshold
  - Optional: Reduce padding on sticky state to save space

- **Active State**:
  - Current page link highlighted with primary color or underline
  - Breadcrumb navigation on inner pages (optional)

#### Secondary Navigation (Footer Links)
- Organized in columns
- All links clickable (aria-label for clarity)
- Social icons link to external platforms (target="_blank")
- Contact info (email) opens mailto: link, phone opens tel: link

---

### Gallery & Image Filtering

#### Infrastructure Gallery
- **Filter/Category Tabs** (optional):
  - Click to filter images by category (Classrooms, Labs, Sports, etc.)
  - "All" tab shows all images
  - Active tab highlighted with primary color
  - Animation: Fade transition between image sets (150-300ms)

- **Lightbox Modal**:
  - Click image to open fullscreen lightbox
  - Navigation arrows (prev/next) for browsing
  - Close button (X) and ESC key to close
  - Caption/title displayed (optional)
  - Responsive: Image scales to fit viewport
  - Touch support: Swipe left/right to navigate

- **Lazy Loading**:
  - Images load on scroll into viewport
  - Blur-up effect or skeleton loader while loading
  - Performance: Load max 6-8 images initially, rest on demand

---

### Carousel/Slider Behavior

#### Hero Carousel
- **Auto-play**: 5-7 second interval (configurable)
- **Controls**:
  - Previous/Next arrow buttons (visible, centered vertically)
  - Pagination dots at bottom (clickable to jump to slide)
  - Touch swipe support (mobile)
- **Pause Behavior**:
  - Pause on hover (desktop) or on click (mobile)
  - Resume on mouse leave or page focus regain
- **Keyboard**:
  - Arrow Left/Right to navigate
  - Enter on dot to select slide

#### Alumni / Activity Carousel
- **Visible Items**: 3-4 on desktop, 2 on tablet, 1 on mobile
- **Auto-play**: Optional (5-7 second interval if enabled)
- **Navigation**:
  - Arrow buttons (prev/next) outside carousel
  - Pagination dots (optional)
- **Scroll Behavior**: Smooth snap to slides (CSS scroll-snap)
- **Loop**: Infinite scroll (last slide loops to first)

---

### Form Validation & Interaction

#### Admissions Enquiry Form

**Fields**:
1. **Full Name** (text input)
   - Validation: Required, min 3 characters
   - Error: "Please enter a valid name"

2. **Email Address** (email input)
   - Validation: Required, valid email format
   - Error: "Please enter a valid email address"

3. **Phone Number** (tel input)
   - Validation: Required, 10 digits (Indian format)
   - Format: +91 9XXXXXXXXX or 9XXXXXXXXX
   - Error: "Please enter a valid phone number"

4. **Grade Interested** (select dropdown)
   - Options: K-12, Grade 1-10
   - Validation: Required
   - Error: "Please select a grade"

5. **Message** (textarea)
   - Validation: Optional, max 500 characters
   - Character counter: "250 / 500"
   - Error: "Message exceeds maximum length"

6. **Checkbox**: "I agree to receive communications"
   - Validation: Required (if enabled)
   - Error: "Please accept to continue"

**Interaction**:
- **Real-time Validation**:
  - Validate on field blur (not keystroke) to reduce distraction
  - Display inline error messages below field
  - Green checkmark on valid field (optional)

- **Submit Button**:
  - Disabled until all required fields valid
  - Loading state: Button text changes to "Submitting..." with spinner
  - Prevent double-submit (button disabled during submission)

- **Success State**:
  - Show success toast notification: "Thank you for your enquiry! We'll be in touch soon."
  - Clear form fields
  - Optional: Redirect to thank-you page after 3 seconds

- **Error State**:
  - Show error toast: "Something went wrong. Please try again."
  - Log error to console/monitoring service
  - Keep form data intact for resubmission

- **Accessibility**:
  - Form title linked to first input via aria-labelledby
  - Required fields marked with asterisk + aria-required
  - Error messages associated with inputs via aria-describedby
  - Focus management: Focus moves to first error field on validation failure

#### Newsletter Signup Form
- **Email Input**: Required, valid email format
- **Subscribe Button**: Disabled if email invalid
- **Success**: Toast: "Thanks for subscribing!"
- **Loading State**: Button shows spinner
- **Accessibility**: aria-label for email input

---

### Scroll Behavior

#### Smooth Scrolling
- Anchor links (e.g., navigation to sections) use smooth scroll
- Duration: 500-800ms
- Offset: Account for fixed header height (80-100px)

#### Scroll-Triggered Animations
- Elements fade-in and slide-up on scroll into view (Framer Motion / AOS)
- Animation triggers at 80% into viewport
- Stagger multiple elements for cascading effect

#### Sticky Elements
- Header becomes sticky on scroll (top: 0)
- Optional: Back-to-top button appears when scrolled past hero (bottom-right)
- Back-to-top smooth scrolls to page top (500ms)

---

### Modal & Dialog Behavior

#### Enquiry Form Modal
- **Trigger**: Click "Admissions Enquiry" button
- **Appearance**: Fade-in, optional scale animation
- **Focus Trap**: Focus cycles within modal
- **Close**: Click X button, ESC key, or click backdrop
- **Backdrop**: Semi-transparent dark overlay (rgba(0,0,0,0.5))
- **Responsive**: Full-height on mobile, centered card on desktop

#### Image Lightbox
- **Trigger**: Click gallery image
- **Controls**: Prev/Next arrows, close X, swipe (mobile)
- **Keyboard**: ESC to close, Arrow keys to navigate
- **Viewport**: Image scales to fit with padding

---

## 7. Asset Requirements

### Images

#### Hero Carousel
- **Quantity**: 3-4 images
- **Dimensions**: 1920x1080px (16:9 aspect ratio)
- **Format**: JPG/WebP (high quality, < 300KB each after optimization)
- **Content**: 
  - Happy students in classroom/library
  - School building/campus aerial view
  - Students in activities/sports
  - Inspiring learning environment
- **Variants**: 3 sizes (mobile: 640px, tablet: 1024px, desktop: 1920px)

#### Awards & Accreditations Logos
- **Quantity**: 5+ logos (QS I-GAUGE, Education World, Green School, IC3, CBSE)
- **Dimensions**: 200x120px or scalable SVG
- **Format**: PNG with transparency or SVG
- **Color Variants**: Full color + grayscale (if needed for footer)

#### Facility Images (Infrastructure Gallery)
- **Quantity**: 12-20 images (3-4 per category)
- **Categories**:
  - Classrooms (3-4)
  - Science Labs (3-4)
  - Sports Complex (3-4)
  - Library (3)
  - Auditorium (2)
  - Cafeteria (2)
  - Grounds/Outdoor (2)
- **Dimensions**: 1024x768px or higher (4:3 aspect ratio)
- **Format**: JPG/WebP (< 200KB each)
- **Quality**: Professional photography, well-lit, clear subjects

#### Alumni Profile Photos
- **Quantity**: 12-20 headshots
- **Dimensions**: 200x200px (1:1 square)
- **Format**: JPG/WebP
- **Content**: Headshots of successful alumni
- **Variants**: Circular crop option

#### Activity/Event Images
- **Quantity**: 8-12 featured images
- **Dimensions**: 600x400px or 800x600px
- **Format**: JPG/WebP
- **Content**: Events, celebrations, activities from calendar

#### School Logo
- **Versions**: 
  - Horizontal (with tagline)
  - Vertical (stacked)
  - Icon-only (symbol)
  - Dark theme (for footer)
  - Light theme (for header on dark backgrounds)
- **Format**: SVG + PNG fallback
- **Sizes**: 24px, 48px, 96px (for various contexts)

#### Decorative Illustrations
- **Purpose**: Landing page sections, empty states, accent elements
- **Style**: Modern, flat, professional (matching school aesthetic)
- **Quantity**: 3-5 illustrations
- **Format**: SVG preferred
- **Variations**: Colored + monochrome

---

### Icons

#### Icon Sets Required
- **Navigation Icons**: 
  - Hamburger menu, close (X), dropdown arrow, back arrow
- **Social Media Icons**: 
  - Facebook, LinkedIn, Instagram, Twitter, YouTube
- **Contact Icons**: 
  - Phone, email, location/map, clock
- **Feature Icons** (for mission/vision section):
  - Mission, Vision, Values, Environment, Activities, Transport
- **Interactive Icons**:
  - Calendar (events), Users (alumni), Trophy (awards)
  - Magnifying glass (search), Filter, Close, Check (validation)

#### Icon Library
- **Primary**: React Icons (lightweight, 1000+ icons)
  - Feather Icons (FiMenu, FiX, FiChevronDown, FiArrowLeft, FiArrowRight)
  - Font Awesome (FaPhone, FaEnvelope, FaMapMarkerAlt)
  - Heroicons (small/large variants)

#### Custom Icons
- If branding requires custom icons, provide as SVG files
- Size: 24px, 32px, 48px variants
- Stroke weight: 1.5-2px for consistency

---

### Fonts & Typography

#### Google Fonts (Recommended)
- **Headings**: Inter or Poppins
  - Weights: 600, 700
- **Body**: Inter or Open Sans
  - Weights: 400, 500, 600
- **Optional Accent**: Merriweather or Lora (for quotes)

#### Font Files
- Include local font files as fallback:
  - WOFF2 format (primary, modern browsers)
  - WOFF format (fallback, older browsers)
- Hosted via Google Fonts CDN or self-hosted
- Pre-load critical fonts (headings) for performance

#### Font Sizes & Weights Checklist
- [ ] H1: 48px, weight 700
- [ ] H2: 36px, weight 600
- [ ] H3: 28px, weight 600
- [ ] H4: 20px, weight 600
- [ ] Body: 16px, weight 400
- [ ] Small: 14px, weight 400

---

### Color Assets

#### Color Variables (CSS/Tailwind Config)
```
Primary Blue: #1E40AF
Secondary Navy: #0F172A
Accent Gold: #D97706
Success Green: #10B981
Warning Amber: #F59E0B
Error Red: #EF4444
Light Gray BG: #F3F4F6
Dark Gray Text: #374151
Medium Gray Text: #9CA3AF
Light Gray Border: #E5E7EB
White: #FFFFFF
```

#### Gradient Overlays
- Hero text overlay: `linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.5))`
- Card hover: `linear-gradient(135deg, rgba(30, 64, 175, 0.05), rgba(217, 119, 6, 0.05))`

---

### Video & Media (Optional for Phase 2)

#### Video Content
- **Hero video background** (if applicable):
  - Format: MP4 (H.264), WebM fallback
  - Duration: 5-10 seconds looping
  - File size: < 5MB
  - Resolution: 1920x1080px minimum

#### Audio (Optional)
- Subtle background music or sound effects
- Format: MP3, AAC
- File size: < 100KB
- License: Royalty-free or licensed

---

### Checklist for Asset Delivery

#### Before Development Starts
- [ ] Hero carousel images (3-4) - optimized, responsive variants
- [ ] Award/accreditation logos (5+) - SVG format
- [ ] School logo (5 versions) - SVG + PNG
- [ ] Icon library (20+) - SVG or React Icons list
- [ ] Color palette (Figma file or CSS variables)
- [ ] Font files and @font-face declarations
- [ ] Facility gallery images (12-20) - organized by category
- [ ] Alumni profile photos (12+) - cropped 1:1
- [ ] Activity/event images (8+)
- [ ] Decorative illustrations (3-5) - SVG
- [ ] Favicon files (.ico, .png)
- [ ] Open Graph image (1200x630px) for social sharing
- [ ] Brand guidelines document (if available)

#### File Naming Convention
- `logo-horizontal.svg`, `logo-icon.svg`
- `hero-classroom.webp`, `hero-classroom-mobile.webp`
- `award-qs-gauge.png`
- `gallery-lab-01.webp`, `gallery-lab-02.webp`
- `alumni-johndoe-2022.jpg`
- `icon-calendar.svg`, `icon-trophy.svg`

#### Image Optimization Requirements
- JPG/WebP files: Compressed to < 200KB
- PNG: Compressed with tools like PNGCrush or TinyPNG
- All images: Alt text and descriptive filenames
- Responsive variants: 1x, 2x (for retina displays)
- Format priority: WebP (modern) → JPG/PNG (fallback)

---

## 8. Summary of Deliverables

### Phase 1: MVP (Core Landing Page)
- Global header with navigation (desktop + mobile)
- Hero carousel (3 slides)
- Awards section (grid)
- Mission/Vision pillars (grid)
- Alumni carousel (scrollable)
- Recent activities grid
- Newsletter signup
- Admissions CTA
- Global footer
- Mobile responsiveness (< 768px)
- Accessibility basics (WCAG AA target)

### Phase 2: Enhancements (Post-MVP)
- Infrastructure gallery with filters & lightbox
- Carousel animations (Framer Motion)
- Form validation & submission integration (backend)
- Smooth scroll-to-anchor
- Advanced accessibility features
- SEO optimization (meta tags, structured data)
- Performance optimization (image lazy loading, code splitting)
- Analytics integration (Google Analytics / Mixpanel)

### Phase 3: Advanced Features (Future)
- Student/parent portal integration
- Blog section (news & updates)
- Video embedding (testimonials, school life)
- Internationalization (multi-language support)
- Dark mode toggle
- PWA capabilities (offline support)
- Admin dashboard for content management

---

## 9. Testing & Quality Assurance

### Manual Testing Checklist
- [ ] Desktop (Chrome, Safari, Firefox, Edge) - 1920x1080, 1440x900
- [ ] Tablet (iPad, iPad Pro) - 768x1024, 1024x1366
- [ ] Mobile (iPhone 12 Pro, iPhone SE, Android flagship) - 375x667, 540x960
- [ ] Navigation: All links functional, dropdowns work
- [ ] Forms: Validation works, submission succeeds/fails gracefully
- [ ] Carousels: Auto-play, manual navigation, responsive
- [ ] Images: Load correctly, alt text present, lightbox works
- [ ] Accessibility: Keyboard navigation, screen reader (NVDA/VoiceOver), ARIA labels

### Browser Support
- **Desktop**: Chrome 90+, Safari 14+, Firefox 88+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Android 90+
- **Testing Tools**: BrowserStack or CanIUse

### Performance Targets
- Lighthouse Performance: > 80
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Bundle size: < 200KB (gzipped)

---

## 10. Maintenance & Content Updates

### Admin/CMS Considerations (Future)
- Mechanism for updating hero images
- Alumni carousel data (periodic updates)
- Activities/events posting workflow
- Newsletter template management
- Contact info updates (phone, email, address)
- Suggested tool: Contentful, Strapi, or Sanity CMS

### Analytics & Monitoring
- Page performance tracking (Lighthouse CI)
- User interaction analytics (heatmaps, session recordings)
- Form submission tracking (completion rate, drop-off)
- Link tracking (which CTAs are clicked most)
- Error tracking (Sentry or LogRocket)

### Backup & Security
- HTTPS enforcement
- Regular backups (weekly)
- DDoS protection (Cloudflare CDN)
- Dependency updates (security patches)
- Regular security audits

---

## Document Version & History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | May 3, 2026 | AI Assistant | Initial comprehensive blueprint |

---

**End of Technical Requirements Document**
