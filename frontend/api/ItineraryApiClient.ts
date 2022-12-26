import { AxiosInstance } from './../node_modules/axios/index.d';

export default class ItineraryApiClient {

    http: AxiosInstance

    constructor (http: AxiosInstance) {
        this.http = http
    }

    async getItineraries () {
        const result = await this.http.get('/test')
        return result.data
    }
}