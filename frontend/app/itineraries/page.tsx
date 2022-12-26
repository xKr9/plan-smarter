import React from 'react'
import Filterbar from '../(components)/Filterbar'
import ItineraryList from '../(components)/ItineraryList'

export default function ItinerariesPage() {
  return (
    <div className='text-black'>
        <Filterbar />
        <ItineraryList />
    </div>
  )
}
