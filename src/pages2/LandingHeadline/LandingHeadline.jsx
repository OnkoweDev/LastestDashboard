import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteLandingHeadlineAction, getLandingHeadlineAction } from "../../actions/backend/landingHeadlineAction";


import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const LandingHeadline = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getHeadline = useSelector((state)=>state.getHeadline)
  const {loading,error,Landings} = getHeadline

  const saveHealines = useSelector((state)=>state.saveHealines)
  const {error:googleError} = saveHealines

  const deleteHeadline = useSelector((state)=>state.deleteHeadline)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteHeadline

  useEffect(() => {
    dispatch(getLandingHeadlineAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteLandingHeadlineAction(id))
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
        to='/landingpage'>Add Landing Page Headline</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {googleError && <div className=' bar error'>{googleError}</div>}
               {error && <div className=' bar error'>{error}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {Landings && Landings.map((face)=>(
                <div className="card" key={face.id}>
                        <p>{face.headline.slice(0,300)}.....</p>
                        <Link to={`/all_landing_headline/${face.id}`}>Read more</Link><br/>
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

export default LandingHeadline;
