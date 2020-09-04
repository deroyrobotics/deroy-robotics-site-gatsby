import React from 'react'
import FieldText from './FieldText'
import FieldRadios from './FieldRadios'

const Field = ({
  label,
  type,
  placeholder,
  required,
  // autoComplete,
  value,
  onChange,
  name,
  options,
  description,
}) => {
  let wrapperClasses = 'form-control'
  let universalProps = {label, name, required, value, onChange, description}
  let textProps = { ...placeholder}
  let radioProps = { options}
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