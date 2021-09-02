import { useEffect, useState } from 'react'

const useLoaded = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => setLoaded(true), [setLoaded])

  return loaded
}
export default useLoaded
