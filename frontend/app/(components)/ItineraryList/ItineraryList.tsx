import React from 'react'
import ApiClient from '../../../api/ApiClient'

async function getServerSideProps () {
    const result = await ApiClient.itineraries.getItineraries()
    return result
}

export default async function ItineraryList() {
  const itineraries = await getServerSideProps()
  return (
    <div>
        {JSON.stringify(itineraries)}
    </div>
  )
}
