import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FiX, FiCheckCircle, FiAlertCircle, FiInfo } from 'react-icons/fi'

/**
 * Toast Component
 * Temporary notification that appears at the bottom of the screen
 * 
 * @component
 * @example
 * <Toast type="success" message="Action completed!" />
 */
function Toast({
  message,
  type = 'info',
  duration = 3000,
  onClose = () => {},
}) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  // Type styles
  const typeStyles = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: FiCheckCircle,
      iconColor: 'text-success',
      text: 'text-green-800',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: FiAlertCircle,
      iconColor: 'text-error',
      text: 'text-red-800',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: FiAlertCircle,
      iconColor: 'text-warning',
      text: 'text-yellow-800',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: FiInfo,
      iconColor: 'text-primary-800',
      text: 'text-blue-800',
    },
  }

  const style = typeStyles[type]

  return (
    <div className={`
      fixed bottom-6 right-6 max-w-md
      ${style.bg} ${style.border}
      border rounded-lg p-4 shadow-lg
      flex items-start gap-3 animate-slideUp z-50
    `}>
      <style.icon className={`flex-shrink-0 mt-0.5 ${style.iconColor}`} size={20} />
      
      <div className={`flex-1 ${style.text} text-sm`}>
        {message}
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition"
        aria-label="Close notification"
      >
        <FiX size={18} />
      </button>
    </div>
  )
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  duration: PropTypes.number,
  onClose: PropTypes.func,
}

export default Toast
