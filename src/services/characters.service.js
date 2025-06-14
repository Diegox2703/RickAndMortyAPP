import { characterAdapter, characterPreviewAdapter } from '../adapters/character.adapter.js'
import axios from 'axios'

const characterURL = 'https://rickandmortyapi.com/api/character?page=1'

export const getCharacters = async ({ pageParam: nextPage = characterURL }) => {
    const { data } = await axios.get(nextPage)
    return {
        info: data.info,
        results: data.results.map(characterAdapter)
    }
}

export const getCharactersById = async (URL) => {
    const { data } = await axios(URL)
    return characterPreviewAdapter(data)
}