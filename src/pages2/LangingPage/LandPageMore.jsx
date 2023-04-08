import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneLangingPageAction } from "../../actions/backend/landingPageAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const LandingMore = () => {

  const dispatch = useDispatch()
  const getOneLandingPage = useSelector((state)=>state.getOneLandingPage)
  const {loading,error,LandingPage} = getOneLandingPage

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneLangingPageAction(id))
  }, [])
  
 

  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                {LandingPage && LandingPage.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                        {sub.page}                                       
                    </div>
                ))}
                <br />
                <Link to="/all_landing">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingMore;
