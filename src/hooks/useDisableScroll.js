import { useEffect } from 'react'

export const useDisableScroll = (isOpen) => {
    useEffect(() => {
    if (isOpen) document.documentElement.style.overflow='hidden'

    return () => document.documentElement.style.overflow='auto'
    }, [isOpen])
}