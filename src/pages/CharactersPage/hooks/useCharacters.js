import { useInfiniteQuery } from '@tanstack/react-query'
import { getCharacters } from '../../../services/characters.service.js'

export const useGetCharacters = () => {
    return useInfiniteQuery({
        queryKey: ['characters'],
        queryFn: getCharacters,
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.info.next
            return nextPage ? nextPage : undefined
        }
    })
}