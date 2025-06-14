import { episodeAdapter } from '../adapters/episode.adapter.js'
import axios from "axios"

const episodesURL = 'https://rickandmortyapi.com/api/episode?page=1'

export const getEpisodes = async ({ pageParam: nextPage = episodesURL }) => {
    const { data } = await axios.get(nextPage)
    return {
        info: data.info,
        results: data.results.map(episodeAdapter)
    }
}