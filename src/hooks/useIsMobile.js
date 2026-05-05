import { useState, useEffect } from 'react'
import { BREAKPOINTS } from '../config/constants'

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < BREAKPOINTS.md)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.md)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}
