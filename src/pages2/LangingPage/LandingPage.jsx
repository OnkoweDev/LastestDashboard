import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteLandingPageAction, getLandingPageAction } from "../../actions/backend/landingPageAction";


import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const AllLandingPage = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getLandingPage = useSelector((state)=>state.getLandingPage)
  const {loading,error,LandingPages} = getLandingPage

  const saveLandingPage = useSelector((state)=>state.saveLandingPage)
  const {error:googleError} = saveLandingPage

  const deleteLandingPage = useSelector((state)=>state.deleteLandingPage)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteLandingPage

  useEffect(() => {
    dispatch(getLandingPageAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteLandingPageAction(id))
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
        to='/land'>Add Landing Page Generator</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {error && <div className=' bar error'>{error}</div>}
               {googleError && <div className=' bar error'>{googleError}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {LandingPages && LandingPages.map((face)=>(
                <div className="card" key={face.id}>
                        <p>{face.page.slice(0,300)}.....</p>
                        <Link to={`/all_landing/${face.id}`}>Read more</Link><br/>
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

export default AllLandingPage;
