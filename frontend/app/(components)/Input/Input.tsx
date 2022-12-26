import React, { InputHTMLAttributes } from 'react'

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value?: any,
    placeholder?: string | undefined,
    name?: string,
}

export default function Input({onChange, value, placeholder, name}: Props) {
  return (
    <input
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e)}
    className='w-full rounded-full px-5 py-2 bg-white' />
  )
}
