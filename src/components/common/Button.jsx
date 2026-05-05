import React from 'react'
import PropTypes from 'prop-types'

/**
 * Button Component
 * Reusable button with multiple variants and sizes
 * 
 * @component
 * @example
 * <Button variant="primary" size="md">Click Me</Button>
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  isLoading = false,
  icon: Icon = null,
  iconPosition = 'left',
  className = '',
  ...props
}) {
  // Base styles
  const baseStyles = 'font-semibold rounded-md transition-all duration-200 inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2'

  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus-visible:outline-primary-600 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 active:bg-primary-100 focus-visible:outline-primary-600',
    text: 'text-primary-600 hover:bg-primary-100 active:bg-primary-200 focus-visible:outline-primary-600',
    danger: 'bg-error text-white hover:bg-red-600 active:bg-red-700 focus-visible:outline-error shadow-md',
    success: 'bg-success text-white hover:bg-green-600 active:bg-green-700 focus-visible:outline-success shadow-md',
  }

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
    xl: 'px-10 py-4 text-xl',
  }

  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  // Full width styles
  const fullWidthStyles = fullWidth ? 'w-full' : ''

  // Combine all styles
  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabledStyles}
    ${fullWidthStyles}
    ${className}
  `.trim()

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {/* Icon on the left */}
      {Icon && iconPosition === 'left' && (
        <Icon size={size === 'sm' ? 16 : size === 'md' ? 20 : size === 'lg' ? 24 : 28} />
      )}

      {/* Loading spinner or children */}
      {isLoading ? (
        <>
          <div className="animate-spin inline-block">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.25" />
              <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
          <span>Loading...</span>
        </>
      ) : (
        children
      )}

      {/* Icon on the right */}
      {Icon && iconPosition === 'right' && (
        <Icon size={size === 'sm' ? 16 : size === 'md' ? 20 : size === 'lg' ? 24 : 28} />
      )}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'text', 'danger', 'success']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
}

export default Button
