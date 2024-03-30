import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // runs every time the data changes / renders

    const abortController = new AbortController()

    setLoading(true)
    setTimeout(() => {
      fetch(url, {signal: AbortController.signal})
        .then(res => {
          if (!res.ok){
            throw Error('could not fetch data')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setLoading(false)
          setError(null)
        })
        .catch(e => {
          if (e.name === 'AbortError'){
            console.log('fetch aborted')
          } else {
            setLoading(false)
            setError(e.message)
          }
        })
      }, 1000)

      return () => abortController.abort()

  }, [url])// if empty, the array makes it only run on mounted
  
  return {data, loading, error}
}

export default useFetch