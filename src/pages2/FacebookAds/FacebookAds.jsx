import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { deleteFacebookAdsAction, getFacebookAdsAction } from "../../actions/backend/facebookAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const FacebookAds = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getFacebook = useSelector((state)=>state.getFacebook)
  const {loading,error,subjects,facebooks} = getFacebook

  const saveFacebook = useSelector((state)=>state.saveFacebook)
  const {error:faceError} = saveFacebook

  const deleteFacebook = useSelector((state)=>state.deleteFacebook)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteFacebook

  useEffect(() => {
    dispatch(getFacebookAdsAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteFacebookAdsAction(id))
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
        to='/facebook'>Add Facebook Generator</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {faceError && <div className=' bar error'>{faceError}</div>}
               {error && <div className=' bar error'>{error}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {facebooks && facebooks.map((face)=>(
                <div className="card" key={face.id}>
                        <p>{face.facebook_ad.slice(0,300)}.....</p>
                        <Link to={`/allfacebookads/${face.id}`}>Read more</Link><br/>
                        <a  onClick={()=>handleDelete(face.id)}>delete</a>

                     
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

export default FacebookAds;
