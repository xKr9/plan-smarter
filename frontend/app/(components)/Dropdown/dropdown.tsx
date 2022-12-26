'use client'
import React, { useEffect, useState } from 'react'
import {countries, getEmojiFlag} from 'countries-list'
import { useRouter } from 'next/navigation'

type SelectedCountry = {
    code: String ,
    name: String
}


export default function Dropdown() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState<SelectedCountry>({code: '', name: ''})

  useEffect(() => {
    if (selectedCountry.name) {
        router.push(`/itineraries?${selectedCountry.name}`)
        return
    }
  }, [selectedCountry.name])

  return (
    <>
        <button onClick={() => setOpen(!open)}
            className={`
            ${!open ? 'rounded-md' : 'rounded-tr-md rounded-tl-md'}
            w-full text-xl text-black  bg-white py-2 px-5`}>
            {
                selectedCountry.code 
                ? <p>{getEmojiFlag(selectedCountry.code)} {selectedCountry.name}</p>
                : 'No country selected'
            }
        </button>
        <div className="overflow-y-auto h-52">
        {
            open && Object.entries(countries).map((country) => {
                return (
                    <button key={country[0]} onClick={() => {
                        if (selectedCountry.name === country[1]['name']) return setSelectedCountry({code: '', name: ''})
                        setSelectedCountry({
                            code: country[0],
                            name: country[1]['name']
                        })
                        setOpen(false)
                    }} className="w-full text-black py-3 items-center flex gap-x-5 bg-white px-10">
                        {getEmojiFlag(country[0])}
                        <p>{country[1]['name']}</p>
                    </button>
                )
            })
        }
        </div>
    </>
  )
}
