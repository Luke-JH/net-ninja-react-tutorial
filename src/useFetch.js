import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // runs every time the data changes / renders
    setLoading(true)
    setTimeout(() => {
      fetch(url)
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
          setLoading(false)
          setError(e.message)
        })
      }, 1000)
  }, [url])// if empty, the array makes it only run on mounted
  
  return {data, loading, error}
}

export default useFetch