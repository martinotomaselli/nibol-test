// src/components/Input.tsx

import React from 'react'

type InputProps = {
  label: string
  name: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// Componente di input riutilizzabile con etichetta
const Input = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  )
}

export default Input
