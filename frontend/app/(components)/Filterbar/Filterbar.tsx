'use client'
import React, { useState } from 'react'
import Input from '../Input'

export default function Filterbar() {
  const [search, setSearch] = useState<string>('')
  return (
    <div>
        <Input
            onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  )
}
