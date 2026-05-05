// API Configuration
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  timeout: import.meta.env.VITE_API_TIMEOUT || 10000,
}

// Navigation menu items
export const NAV_ITEMS = [
  { label: 'About Us', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Achievements', href: '#achievements' },
]

// Breakpoints
export const BREAKPOINTS = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

// Animation durations
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 600,
}

// Hero carousel settings
export const CAROUSEL_SETTINGS = {
  autoPlayInterval: 5000,
  transitionDuration: 300,
  slidesPerView: 1,
}

// Form validation rules
export const VALIDATION_RULES = {
  nameMinLength: 3,
  messageMaxLength: 500,
  phonePattern: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
}
