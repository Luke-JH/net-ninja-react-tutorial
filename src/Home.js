import { useState, useEffect } from "react"
import BlogList from "./BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // runs every time the data changes / renders
    setLoading(true)
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok){
            throw Error('could not fetch data')
          }
          return res.json()
        })
        .then((data) => {
          setBlogs(data)
          setLoading(false)
          setError(null)
        })
        .catch(e => {
          setLoading(false)
          setError(e.message)
        })
      }, 1000)
  }, [])// if empty, the array makes it only run on mounted

  return (
    <div className="home">
      {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {blogs &&<BlogList blogs={blogs} title="All Blogs"></BlogList>}
    </div>
  )
}
 
export default Home