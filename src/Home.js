import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)



  useEffect(() => {
    // runs every time the data changes / renders
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setBlogs(data)
      })
  }, []) // if empty, the array makes it only run on mounted

  return (
    <div className="home">
      {blogs &&<BlogList blogs={blogs} title="All Blogs"></BlogList>}
    </div>
  );
}
 
export default Home;