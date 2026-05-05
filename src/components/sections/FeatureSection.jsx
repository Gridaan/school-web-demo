import React from 'react'
import PropTypes from 'prop-types'

/**
 * FeatureSection Component
 * Alternating text and image layout for feature presentations
 * 
 * @component
 * @example
 * <FeatureSection
 *   title="Our Vision"
 *   description="Lorem ipsum..."
 *   image="/image.jpg"
 *   imageAlt="Vision"
 *   imagePosition="right"
 * />
 */
function FeatureSection({
  title,
  subtitle,
  description,
  image,
  imageAlt = 'Feature image',
  imagePosition = 'right',
  textContent = null,
  cta = null,
  className = '',
}) {
  // Image position styles
  const containerClasses = `
    flex flex-col ${imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'}
    gap-8 lg:gap-12 items-center
    ${className}
  `.trim()

  // Text content width
  const textWrapperClasses = 'flex-1 flex flex-col justify-center'
  const imageWrapperClasses = 'flex-1'

  return (
    <div className={containerClasses}>
      {/* Text Content */}
      <div className={textWrapperClasses}>
        {subtitle && (
          <p className="font-sans text-primary-400 font-medium text-sm uppercase tracking-[2px] mb-2">
            {subtitle}
          </p>
        )}

        {title && (
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">
            {title}
          </h3>
        )}

        {description && (
          <p className="font-body text-base md:text-lg font-normal text-gray-300 mb-6 leading-relaxed">
            {description}
          </p>
        )}

        {textContent && (
          <div className="mb-6">
            {textContent}
          </div>
        )}

        {cta && (
          <div className="flex gap-4">
            {cta}
          </div>
        )}
      </div>

      {/* Image Content */}
      {image && (
        <div className={imageWrapperClasses}>
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
        </div>
      )}
    </div>
  )
}

FeatureSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  imagePosition: PropTypes.oneOf(['left', 'right']),
  textContent: PropTypes.node,
  cta: PropTypes.node,
  className: PropTypes.string,
}

export default FeatureSection
