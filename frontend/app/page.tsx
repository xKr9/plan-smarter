import React from 'react'
import Input from './(components)/Input'
import Dropdown from './(components)/Dropdown'

export default function page() {
  return (
    <div className='min-h-screen relative w-full'>
        <div className="">
            <h1 className='text-6xl font-black'>Plan your next trip just a <span className='text-secondary'>little</span> smarter</h1>
            <p className='mt-5'>Look through over <span>thousands</span> of highly rated itineraries all</p>
            <Dropdown />
        </div>
    </div>
  )
}
