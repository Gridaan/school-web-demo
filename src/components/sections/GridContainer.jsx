import React from 'react'
import PropTypes from 'prop-types'

/**
 * GridContainer Component
 * Responsive grid layout for displaying cards and items
 * 
 * @component
 * @example
 * <GridContainer columns={3}>
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </GridContainer>
 */
function GridContainer({
  children,
  columns = 3,
  gap = 6,
  className = '',
  ...props
}) {
  // Column styles
  const columnStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  }

  // Gap styles
  const gapStyles = {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
    10: 'gap-10',
    12: 'gap-12',
  }

  const gridClasses = `
    grid
    ${columnStyles[columns]}
    ${gapStyles[gap]}
    ${className}
  `.trim()

  return (
    <div className={gridClasses} {...props}>
      {children}
    </div>
  )
}

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  gap: PropTypes.oneOf([2, 3, 4, 6, 8, 10, 12]),
  className: PropTypes.string,
}

export default GridContainer
