import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { deleteGoogleAdsAction, getGoogleAdsAction } from "../../actions/backend/googleAdsAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const ALLGoogleAds = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getGoogleAds = useSelector((state)=>state.getGoogleAds)
  const {loading,error,GoogleAds} = getGoogleAds

  const saveGoogleAds = useSelector((state)=>state.saveGoogleAds)
  const {error:googleError} = saveGoogleAds

  const deleteGoogleAds = useSelector((state)=>state.deleteGoogleAds)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteGoogleAds

  useEffect(() => {
    dispatch(getGoogleAdsAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteGoogleAdsAction(id))
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
        to='/googleads'>Add GoogleAds Generator</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {googleError && <div className=' bar error'>{googleError}</div>}
               {error && <div className=' bar error'>{error}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {GoogleAds && GoogleAds.map((face)=>(
                <div className="card" key={face.id}>
                        <p>{face.google_ad.slice(0,300)}.....</p>
                        <Link to={`/allgoogleads/${face.id}`}>Read more</Link><br/>
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

export default ALLGoogleAds;
