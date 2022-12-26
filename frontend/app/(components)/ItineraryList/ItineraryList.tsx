import React from 'react'
import ApiClient from '../../../api/ApiClient'

async function getServerSideProps () {
    const result = await ApiClient.itineraries.getItineraries()
    return result
}

export default async function ItineraryList() {
  const itineraries = getServerSideProps()
  console.log(itineraries)
  return (
    <div>
        <h1>heyy</h1>
    </div>
  )
}
