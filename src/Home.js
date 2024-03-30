import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
  const {data: blogs, loading, error} = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {blogs &&<BlogList blogs={blogs} title="All Blogs"></BlogList>}
    </div>
  )
}
 
export default Home