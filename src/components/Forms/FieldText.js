import React from 'react'

const FieldText = ({
  label,
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
  let inputClass = 'form-control'
  inputClass += ' md:flex md:items-center mb-6'
  let labelClasses = 'form-label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
  let inputClasses = 'form-control  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'

  return (
    <div className={inputClass}>
   
      <div className="md:w-1/3">
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      </div>
      
      <div className="md:w-2/3">
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
      </div>
      
      {description &&
        <p className="text-gray-600 text-xs italic">{description}</p>
      }
    </div>
  )
}

export default FieldText