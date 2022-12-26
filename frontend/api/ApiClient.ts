import axios from 'axios'
import config from '../utils/config'
import ItineraryApiClient from './ItineraryApiClient'

const http = axios.create({
    baseURL: config.baseAPI,
    withCredentials: true
})

export default class ApiClient {
    static itineraries = new ItineraryApiClient(http)
}