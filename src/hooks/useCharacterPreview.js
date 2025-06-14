import { useQuery } from "@tanstack/react-query"
import { getCharactersById } from '../services/characters.service.js'

export const useGetCharacterPreview = (URL, id) => {
    return useQuery({
        queryKey: [`character-${id}`],
        queryFn: () => getCharactersById(URL)
    })
}