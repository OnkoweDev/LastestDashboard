import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { getOneLinkAdsAction } from "../../actions/backend/linkdinAdsAction";

const LinkAdsMore = () => {

  const dispatch = useDispatch()
  const getOneLinkedinAds = useSelector((state)=>state.getOneLinkedinAds)
  const {loading,error,link} = getOneLinkedinAds

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneLinkAdsAction(id))
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
                {link && link.map((sub)=>(
                    <div key={sub.id} className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%",whiteSpace: 'pre-wrap' }}>
                        {sub.linkedin_ad}                                       
                    </div>
                ))}
                <br />
                <Link to="/all_link_post">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default LinkAdsMore;
