import React from 'react'
import PropTypes from 'prop-types'

/**
 * FormField Component
 * Wrapper for form inputs with label and validation
 * 
 * @component
 * @example
 * <FormField
 *   label="Email"
 *   type="email"
 *   error={errors.email?.message}
 *   {...register('email')}
 * />
 */
function FormField({
  label,
  type = 'text',
  placeholder,
  error,
  helperText,
  required = false,
  disabled = false,
  className = '',
  inputClassName = '',
  children,
  ...props
}) {
  const hasError = !!error

  const inputClasses = `
    w-full px-4 py-2.5 rounded-md
    border-2 transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${hasError
      ? 'border-error focus:ring-error focus:border-error'
      : 'border-primary-700/40 focus:border-primary-700 focus:ring-primary-700'
    }
    ${disabled ? 'bg-gray-100 cursor-not-allowed text-gray-400' : 'bg-white text-secondary-900'}
    ${inputClassName}
  `.trim()

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-secondary-900 mb-2">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}

      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          disabled={disabled}
          className={inputClasses}
          {...props}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClasses}
          {...props}
        />
      )}

      {error && (
        <p className="text-red-600 text-sm mt-1.5 flex items-center gap-1">
          <span>✕</span> {error}
        </p>
      )}

      {helperText && !error && (
        <p className="text-secondary-700 text-sm mt-1.5">
          {helperText}
        </p>
      )}

      {children && <div className="mt-2">{children}</div>}
    </div>
  )
}

FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'tel', 'number', 'password', 'textarea', 'select']),
  placeholder: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  children: PropTypes.node,
}

export default FormField
