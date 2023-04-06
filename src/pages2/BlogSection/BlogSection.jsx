import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { deleteSectionAction, getSectionAction } from "../../actions/backend/blogSectionAction";

const AllBlogSection = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getBlogSection = useSelector((state)=>state.getBlogSection)
  const {loading,error,blogs} = getBlogSection

  const deleteBlogSection = useSelector((state)=>state.deleteBlogSection)
  const {loading:deleteLoading,error:deleteError,success} = deleteBlogSection

  const saveBlogSection = useSelector((state)=>state.saveBlogSection)
  const  {loading:articleLoading,error:articleError} = saveBlogSection

  useEffect(() => {
    dispatch(getSectionAction())
  }, [success])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteSectionAction(id))
    setMessage("Item deleted Successful")
    setTimeout(()=>{
        setMessage("")
    },4000)
    }
   
}

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
        to='/blog-section-generator'>Create Blog Section</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {error && <div className=' bar error'>{error}</div>}
               {articleError && <div className=' bar error'>{articleError}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {blogs && blogs.slice(0,10).map((blog)=>(
                <div className="card" key={blog.id}>
                        <p>{blog.section.slice(0,300)}....</p>
                        <Link to={`/blogsection/${blog.id}`}>Read more</Link><br/>
                        <a onClick={()=>handleDelete(blog.id)}>Delete</a>
                        
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

export default AllBlogSection;
