import React from 'react'
import PropTypes from 'prop-types'

/**
 * Card Component
 * Flexible card wrapper for content containers
 * 
 * @component
 * @example
 * <Card className="p-6">
 *   <Card.Header title="Title" />
 *   <Card.Body>Content here</Card.Body>
 * </Card>
 */
function Card({
  children,
  className = '',
  shadow = 'md',
  rounded = 'md',
  border = false,
  hoverEffect = false,
  ...props
}) {
  // Shadow styles
  const shadowStyles = {
    none: '',
    sm: 'shadow-soft',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  }

  // Border radius styles
  const roundedStyles = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
  }

  const borderStyles = border ? 'border border-primary-200' : ''
  const hoverStyles = hoverEffect ? 'hover:shadow-lg transition-shadow duration-300 cursor-pointer' : ''

  const cardClasses = `
    bg-white
    ${shadowStyles[shadow]}
    ${roundedStyles[rounded]}
    ${borderStyles}
    ${hoverStyles}
    ${className}
  `.trim()

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  )
}

/**
 * Card.Header - Header section of a card
 */
  Card.Header = function CardHeader({ title, subtitle, action, className = '' }) {
  return (
    <div className={`border-b border-primary-200 pb-4 mb-4 flex items-start justify-between ${className}`.trim()}>
      <div>
        {title && <h3 className="text-lg font-semibold text-secondary-900">{title}</h3>}
        {subtitle && <p className="text-sm text-secondary-700 mt-1">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}

/**
 * Card.Body - Body section of a card
 */
Card.Body = function CardBody({ children, className = '' }) {
  return <div className={className}>{children}</div>
}

/**
 * Card.Footer - Footer section of a card
 */
  Card.Footer = function CardFooter({ children, className = '' }) {
  return (
    <div className={`border-t border-gray-200 pt-4 mt-4 flex items-center justify-between ${className}`.trim()}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  rounded: PropTypes.oneOf(['sm', 'md', 'lg']),
  border: PropTypes.bool,
  hoverEffect: PropTypes.bool,
}

Card.Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  action: PropTypes.node,
  className: PropTypes.string,
}

Card.Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Card.Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Card
