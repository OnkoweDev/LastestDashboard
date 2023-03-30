import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteIntroAction, getBlogintroAction } from "../../actions/backend/blogIntroAction";


import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const ALLBlogIntro = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getBlogIntro = useSelector((state)=>state.getBlogIntro)
  const {loading,error,blogs} = getBlogIntro

//   const saveTitle = useSelector((state)=>state.saveTitle)
//   const {error:googleError} = saveTitle

  const deleteBlogIntro = useSelector((state)=>state.deleteBlogIntro)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteBlogIntro

  useEffect(() => {
    dispatch(getBlogintroAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteIntroAction(id))
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
        to='/land'>Create paragraph writer</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {error && <div className=' bar error'>{error}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {blogs && blogs.map((face)=>(
                <div className="card" key={face.id}>
                        <p>{face.intro.slice(0,300)}.....</p>
                        <Link to={`/all_blogs/${face.id}`}>Read more</Link><br/>
                        <a  onClick={()=>handleDelete(face.id)} className="btn btn-danger">delete</a>

                     
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

export default ALLBlogIntro;
