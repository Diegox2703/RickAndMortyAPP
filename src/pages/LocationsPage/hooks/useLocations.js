import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getLocations } from '../../../services/location.service.js'

export const useGetLocations = () => {
    return useInfiniteQuery({
        queryKey: ['locations'],
        queryFn: getLocations,
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.info.next
            return nextPage ? nextPage : undefined
        }
    })
}