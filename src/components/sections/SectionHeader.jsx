import React from 'react'
import PropTypes from 'prop-types'
import Container from '../common/Container'

/**
 * SectionHeader Component
 * Standardized header for landing page sections
 * 
 * @component
 * @example
 * <SectionHeader
 *   title="Our Awards"
 *   subtitle="Recognized for excellence"
 * />
 */
function SectionHeader({
  title,
  subtitle,
  description,
  alignment = 'center',
  size = 'md',
  className = '',
}) {
  // Alignment styles
  const alignmentStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  // Title size styles
  const titleSizeStyles = {
    sm: 'text-3xl',
    md: 'text-4xl',
    lg: 'text-5xl',
  }

  return (
    <div className={`${alignmentStyles[alignment]} mb-12 ${className}`}>
      {subtitle && (
        <p className="font-sans text-primary-400 font-medium text-sm uppercase tracking-[2px] mb-2">
          {subtitle}
        </p>
      )}

      {title && (
        <h2 className={`${titleSizeStyles[size]} font-bold font-serif tracking-tight leading-tight text-secondary-900 mb-4`}>
          {title}
        </h2>
      )}

      {description && (
        <p className="font-body text-base font-normal text-secondary-700 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}

      {/* Decorative line under title for center alignment */}
      {alignment === 'center' && (
        <div className="flex justify-center mt-6">
          <div className="w-12 h-1 bg-primary-700 rounded-full" />
        </div>
      )}
    </div>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
}

export default SectionHeader
