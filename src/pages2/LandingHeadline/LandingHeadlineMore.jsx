import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneLandingHeadlineAction } from "../../actions/backend/landingHeadlineAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const LandingHeadlineMore = () => {

  const dispatch = useDispatch()
  const getOneHeadline = useSelector((state)=>state.getOneHeadline)
  const {loading,error,Land} = getOneHeadline

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneLandingHeadlineAction(id))
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
                {Land && Land.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                        {sub.headline}                                       
                    </div>
                ))}
                <br />
                <Link to="/all_landing_headline">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingHeadlineMore;
