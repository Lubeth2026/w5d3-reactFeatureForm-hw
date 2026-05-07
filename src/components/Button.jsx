
import React from 'react'

function Button({ text, color }) {

  return (
    <div>
      <button type="submit" style={{ backgroundColor: color }}>{text}</button>
    </div>
  )
}

export default Button