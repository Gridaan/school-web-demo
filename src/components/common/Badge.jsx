import React from 'react'
import PropTypes from 'prop-types'

/**
 * Badge Component
 * Used for displaying labels, status indicators, and tags
 * 
 * @component
 * @example
 * <Badge variant="primary">New</Badge>
 */
function Badge({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon = null,
  className = '',
  ...props
}) {
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-50 text-secondary-900',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-warning bg-opacity-10 text-warning',
    error: 'bg-error bg-opacity-10 text-error',
    gold: 'bg-accent-400 bg-opacity-10 text-accent-600',
  }

  // Size styles
  const sizeStyles = {
    sm: 'px-2 py-1 text-xs font-medium',
    md: 'px-3 py-1.5 text-sm font-medium',
    lg: 'px-4 py-2 text-base font-medium',
  }

  const badgeClasses = `
    inline-flex items-center gap-1.5 rounded-full
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim()

  return (
    <span className={badgeClasses} {...props}>
      {Icon && <Icon size={size === 'sm' ? 12 : size === 'md' ? 14 : 16} />}
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'gold']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  icon: PropTypes.elementType,
  className: PropTypes.string,
}

export default Badge
