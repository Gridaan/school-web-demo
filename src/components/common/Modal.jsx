import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { FiX } from 'react-icons/fi'
import Button from './Button'

/**
 * Modal Component
 * Dialog box for displaying content with focus trapping
 * 
 * @component
 * @example
 * <Modal isOpen={true} onClose={handleClose} title="Confirm Action">
 *   Are you sure?
 * </Modal>
 */
function Modal({
  isOpen = false,
  onClose = () => {},
  title = '',
  children,
  size = 'md',
  showCloseButton = true,
  footer = null,
  className = '',
}) {
  // Trap focus within modal when open
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Size styles
  const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  }

     return (
       <>
         {/* Backdrop */}
         <div
           className="fixed inset-0 bg-black/40 z-40 transition-opacity"
           onClick={onClose}
           aria-hidden="true"
         />
 
         {/* Modal */}
         <div
           className={`
             fixed inset-0 z-50 flex items-center justify-center
             p-4 sm:p-0 overflow-y-auto
           `}
           role="dialog"
           aria-modal="true"
           aria-labelledby="modal-title"
         >
           <div className={`
             bg-white text-secondary-900 rounded-lg shadow-xl border border-primary-700/30
             w-full ${sizeStyles[size]}
             animate-slideUp
             ${className}
           `}>
             {/* Header */}
             {title && (
               <div className="flex items-center justify-between border-b border-primary-700/30 px-6 py-4">
                 <h2
                   id="modal-title"
                   className="text-xl font-semibold text-secondary-900"
                 >
                   {title}
                 </h2>
                 {showCloseButton && (
                   <button
                     onClick={onClose}
                     className="text-gray-600 hover:text-secondary-900 transition"
                     aria-label="Close modal"
                   >
                     <FiX size={24} />
                   </button>
                 )}
               </div>
             )}
 
             {/* Body */}
             <div className="px-6 py-4 text-secondary-700">
               {children}
             </div>
 
             {/* Footer */}
             {footer && (
               <div className="border-t border-primary-700/30 px-6 py-4 flex items-center justify-end gap-3">
                 {footer}
               </div>
             )}
           </div>
         </div>
       </>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  showCloseButton: PropTypes.bool,
  footer: PropTypes.node,
  className: PropTypes.string,
}

export default Modal
