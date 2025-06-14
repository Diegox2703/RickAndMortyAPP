import { useInfiniteQuery } from '@tanstack/react-query'
import { getEpisodes } from '../../../services/episodes.service.js'

export const useGetEpisodes = () => {
    return useInfiniteQuery({
        queryKey: ['episodes'],
        queryFn: getEpisodes,
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.info.next
            return nextPage ? nextPage : undefined
        }
    })
}