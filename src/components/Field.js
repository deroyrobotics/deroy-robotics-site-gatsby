import React, {useState} from 'react'

const Field = ({
  label,
  labelPosition,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
  checked,
  name,
  description,
}) => {
  let inputClass = type === 'radio' ? 'form-control-radio' : 'form-control'
  let labelClasses = 'form-label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
  let inputClasses = 'form-control appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'

  return (
    <div className={inputClass}>
      {labelPosition !== 'after' &&
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      }
      <input
        className={inputClasses}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        checked={checked}
        onChange={onChange}
        />
      {labelPosition === 'after' &&
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      }

      {description &&
        <p className="text-gray-600 text-xs italic">{description}</p>
      }
    </div>
  )
}

export default Field