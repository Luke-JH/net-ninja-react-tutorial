import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [loading, setLoading] = useState(false)



  useEffect(() => {
    // runs every time the data changes / renders
    setLoading(true)
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setBlogs(data)
          setLoading(false)
        })
      }, 1000)
  }, [])// if empty, the array makes it only run on mounted

  return (
    <div className="home">
      {loading && <p>Loading...</p>}
      {blogs &&<BlogList blogs={blogs} title="All Blogs"></BlogList>}
    </div>
  );
}
 
export default Home;