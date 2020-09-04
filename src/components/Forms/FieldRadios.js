import React from 'react'

const RadioInput = ({ label, onChange, name, id, value}) => {
  let labelClass = 'px-2'
  let radioClass = ''
  return (
    <> 
      <label htmlFor={id} className="mr-4">
        <input
          className={radioClass}
          id={id}
          name={name}
          type='radio'
          value={value}
          onChange={onChange}
        />
        <span className={labelClass}>
          {label}
        </span>
      </label>
    </>
  )
}

const FieldRadios = ({
  label,
  required,
  value,
  onChange,
  checked,
  name,
  description,
  options = []
}) => {
  let inputClass = 'md:flex md:items-start mb-1'
  let labelClasses = 'md:pt-2 form-label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1'

  let radios = options.map((input, id) => {
    return (
      <RadioInput {...input} name={name}  key={`radio_key_${id}`} />
    )
  })
  
  console.log('description', description)
  return (
    <div className={inputClass}>
      {label &&
      <div className="md:w-1/3">
        <span className={labelClasses}>{label}</span>
      </div>
      }
      <div className="md:w-2/3">
        {radios}

        {description &&
          <p className="text-gray-600 text-xs italic mb-4">{description}</p>
        }
      </div>
    </div>
  )
}

export default FieldRadios