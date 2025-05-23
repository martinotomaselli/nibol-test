// src/components/Button.tsx

import React from 'react'

type ButtonProps = {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

// Componente bottone riutilizzabile
const Button = ({ text, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition"
    >
      {text}
    </button>
  )
}

export default Button
