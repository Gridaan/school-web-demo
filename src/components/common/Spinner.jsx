import React from 'react'
import PropTypes from 'prop-types'

/**
 * Spinner Component
 * Loading indicator with multiple variants and sizes
 * 
 * @component
 * @example
 * <Spinner size="lg" />
 */
function Spinner({
  size = 'md',
  variant = 'primary',
  fullScreen = false,
  label = 'Loading...',
  className = '',
}) {
  // Size styles
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }

  // Color styles
  const colorStyles = {
    primary: 'text-primary-800',
    secondary: 'text-secondary-800',
    white: 'text-white',
  }

  const spinnerClasses = `
    animate-spin
    ${sizeStyles[size]}
    ${colorStyles[variant]}
    ${className}
  `.trim()

  // Full screen overlay
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4">
          <svg className={spinnerClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" />
            <path
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {label && <p className="text-secondary-700 font-medium">{label}</p>}
        </div>
      </div>
    )
  }

  // Inline spinner
  return (
    <div className="flex items-center justify-center gap-3">
      <svg className={spinnerClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" />
        <path
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {label && <span className="text-secondary-700 font-medium">{label}</span>}
    </div>
  )
}

Spinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'white']),
  fullScreen: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
}

export default Spinner
