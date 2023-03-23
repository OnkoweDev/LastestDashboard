import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogWriterAction } from "../../actions/backend/blogWriterAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const AllBlog = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getBlogWriter = useSelector((state)=>state.getBlogWriter)
  const {loading,error,blogs} = getBlogWriter

  const deleteArticleWriter = useSelector((state)=>state.deleteArticleWriter)
  const {loading:deleteLoading,error:deleteError,success} = deleteArticleWriter

  useEffect(() => {
    dispatch(getBlogWriterAction())
  }, [success])
  
//   const handleDelete = (id) =>{
//     if(window.confirm(`Are you sure you want to delete Item`)){
//     dispatch(deleteArticleAction(id))
//     setMessage("Item deleted Successful")
//     setTimeout(()=>{
//         setMessage("")
//     },4000)
//     }
   
// }

  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
          <Link className="article-btn"  
          style={{ 
            fontSize: "14px",
            width:"20%",
            textAlign:"center",
            justifyContent:"center",
            alignItems:"center",
            padding:"5px",
            
        }} 
        to='/blog-article-writer'>ADD BLOG REWRITER</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {error && <div className=' bar error'>{error}</div>}

               {blogs && blogs.map((blog)=>(
                <div className="card" key={blog.id}>
                        <p numberOfLines={1}>{blog.article}</p>
                        <Link to={`/allblogs/${blog.id}`}>Read more</Link><br/>
                        <Link to={`/update/${blog.id}`}>Update</Link><br/>
                        
                </div>
                ))}
              </div>
            {/* <Voice /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default AllBlog;
