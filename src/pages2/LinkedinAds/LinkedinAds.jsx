import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { deleteLinkAdsAction, getLinkAdsAction } from "../../actions/backend/linkdinAdsAction";

const AllLinkAds = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getLinkedinAds = useSelector((state)=>state.getLinkedinAds)
  const {loading,error,links} = getLinkedinAds

  const saveLinkedinAds = useSelector((state)=>state.saveLinkedinAds)
  const {error:googleError} = saveLinkedinAds

  const deleteLinkedinAds = useSelector((state)=>state.deleteLinkedinAds)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteLinkedinAds

  useEffect(() => {
    dispatch(getLinkAdsAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteLinkAdsAction(id))
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
        to='/linkdlnads'>Create LinkedlnAds</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {googleError && <div className=' bar error'>{googleError}</div>}
               {error && <div className=' bar error'>{error}</div>}
               {deleteError && <div className=' bar error'>{deleteError}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {links && links.map((face)=>(
                <div className="card" key={face.id}>
                        <p>{face.linkedin_ad.slice(0,300)}.....</p>
                        <Link to={`/all_linkedin_ads/${face.id}`}>Read more</Link><br/>
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

export default AllLinkAds;
