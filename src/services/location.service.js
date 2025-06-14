import axios from 'axios'
import { locationAdapter } from '../adapters/location.adapter.js'

const locationsURL = 'https://rickandmortyapi.com/api/location?page=1'

export const getLocations = async ({ pageParam: nextPage = locationsURL }) => {
    const { data } = await axios.get(nextPage)
    return {
        info: data.info,
        results: data.results.map(locationAdapter)
    }
}