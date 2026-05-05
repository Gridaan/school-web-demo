import React from 'react'
import PropTypes from 'prop-types'

/**
 * Icon Component
 * Wrapper for consistent icon styling and sizing
 * 
 * @component
 * @example
 * <Icon icon={FiPhone} size="lg" color="primary" />
 */
function Icon({
  icon: IconComponent,
  size = 'md',
  color = 'secondary',
  className = '',
  ...props
}) {
  // Size styles
  const sizeMap = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 40,
    '2xl': 48,
  }

  // Color styles
  const colorStyles = {
    primary: 'text-primary-800',
    secondary: 'text-secondary-700',
    accent: 'text-accent-500',
    white: 'text-white',
    gray: 'text-gray-500',
    success: 'text-success',
    error: 'text-error',
    warning: 'text-warning',
  }

  if (!IconComponent) {
    return null
  }

  const iconClasses = `
    flex-shrink-0
    ${colorStyles[color]}
    ${className}
  `.trim()

  return (
    <IconComponent
      size={sizeMap[size]}
      className={iconClasses}
      {...props}
    />
  )
}

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  color: PropTypes.oneOf(['primary', 'secondary', 'accent', 'white', 'gray', 'success', 'error', 'warning']),
  className: PropTypes.string,
}

export default Icon
