import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ field }) => {
  const { placeholder, meta: { error } } = field

  return (
    <div>
      <input
        placeholder={ placeholder }
        { ...field.input }
      />
      { error }
    </div>
  )
}

Input.propTypes = {
  field: PropTypes.object.isRequired
}

export default Input
