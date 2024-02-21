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
  
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  useEffect(()=>{
    if (!userInfo) {
      navigate('/')
    }
  },[])

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
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%",whiteSpace: 'pre-wrap' }}>
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
