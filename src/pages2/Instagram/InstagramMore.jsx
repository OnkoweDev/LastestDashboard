import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneGoogleTilteAction } from "../../actions/backend/googleTitleAction";
import { getOneInstagramAction } from "../../actions/backend/instagramCapAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const InstagramMore = () => {

  const dispatch = useDispatch()
  const getOneInstagram = useSelector((state)=>state.getOneInstagram)
  const {loading,error,instagram} = getOneInstagram

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneInstagramAction(id))
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
                {instagram && instagram.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%", whiteSpace: 'pre-wrap' }}>
                        {sub.instagram_caption}                                       
                    </div>
                ))}
                <br />
                <Link to="/allinstagram">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default InstagramMore;
