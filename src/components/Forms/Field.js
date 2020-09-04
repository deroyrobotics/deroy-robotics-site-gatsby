import React from 'react'
import FieldText from './FieldText'
import FieldRadios from './FieldRadios'

const Field = ({
  label,
  type,
  placeholder,
  required,
  value,
  onChange,
  name,
  options,
  description,
  pattern,
  errors,
}) => {
  let wrapperClasses = 'form-control'
  let universalProps = {label, name, required, value, onChange, description}
  let textProps = { ...placeholder, type, pattern }
  let radioProps = { options }

  if (errors[name]) {
    universalProps.required = true
  }

  return (
    <div className={wrapperClasses}>
      {type === 'radio' &&
        <FieldRadios {...universalProps} {...radioProps} />
      }

      {type !== 'radio' &&
        <FieldText {...universalProps} {...textProps} />
      }

    </div>
  )
}

export default Field