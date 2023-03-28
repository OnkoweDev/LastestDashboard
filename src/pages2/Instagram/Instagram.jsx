import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { deleteInstagramAction, getInstagramAction } from "../../actions/backend/instagramCapAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const AllInstagram = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getInstagram = useSelector((state)=>state.getInstagram)
  const {loading,error,instagrams} = getInstagram

  const saveTitle = useSelector((state)=>state.saveTitle)
  const {error:googleError} = saveTitle

  const deleteInstagram = useSelector((state)=>state.deleteInstagram)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteInstagram

  useEffect(() => {
    dispatch(getInstagramAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteInstagramAction(id))
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
        to='/instagram'>Add Instagram Caption</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {googleError && <div className=' bar error'>{googleError}</div>}
               {error && <div className=' bar error'>{error}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {instagrams && instagrams.map((face)=>(
                <div className="card" key={face.id}>
                        <p>{face.instagram_caption.slice(0,300)}.....</p>
                        <Link to={`/allinstagram/${face.id}`}>Read more</Link><br/>
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

export default AllInstagram;
