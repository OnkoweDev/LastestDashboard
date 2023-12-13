import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneGoogleAdsAction } from "../../actions/backend/googleAdsAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const GoogleAdsMore = () => {

  const dispatch = useDispatch()
  const getOneGoogleAds = useSelector((state)=>state.getOneGoogleAds)
  const {loading,error,GoogleAd} = getOneGoogleAds

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneGoogleAdsAction(id))
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
                {GoogleAd && GoogleAd.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                        {sub.google_ad}                                       
                    </div>
                ))}
                <br />
                <Link to="/allgoogleads">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default GoogleAdsMore;
