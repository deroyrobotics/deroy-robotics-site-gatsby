import React from 'react'

const RadioInput = ({ label, onChange, name, id, className, value}) => {

  return (
    <> 
      <label htmlFor={id}>
        <input
          className={className}
          id={id}
          name={name}
          type='radio'
          value={value}
          onChange={onChange}
        />
        {label}
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
  let inputClass = 'form-control md:flex md:items-center mb-6'
  let labelClasses = 'form-label block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'

  let radios = options.map((input, id) => {
    return (
      <RadioInput {...input} name={name}  key={`radio_key_${id}`} />
    )
  })
  
  return (
    <div className={inputClass}>
      {label &&
      <div className="md:w-1/3">
        <span className={labelClasses}>{label}</span>
      </div>
      }
      <div className="md:w-2/3">
        {radios}
      </div>
    </div>
  )
}

export default FieldRadios