import React from 'react'
import PropTypes from 'prop-types'

/**
 * Container Component
 * Max-width wrapper for consistent page layout
 * 
 * @component
 * @example
 * <Container size="lg" className="py-20">Content</Container>
 */
function Container({
  children,
  size = 'lg',
  className = '',
  ...props
}) {
  // Container size styles
  const sizeStyles = {
    sm: 'max-w-2xl',      // ~42rem
    md: 'max-w-4xl',      // ~56rem
    lg: 'max-w-7xl',      // ~80rem
    xl: 'max-w-full',     // 100%
    full: 'w-full',       // Full width, no max
  }

  const containerClasses = `
    w-full mx-auto px-4 sm:px-6 lg:px-8
    ${sizeStyles[size]}
    ${className}
  `.trim()

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
  className: PropTypes.string,
}

export default Container
