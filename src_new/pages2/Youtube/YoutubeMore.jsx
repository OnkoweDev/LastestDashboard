import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneYoutubeAction } from "../../actions/backend/youtubeAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const YoutubeMore = () => {

  const dispatch = useDispatch()
  const getOneYoutube = useSelector((state)=>state.getOneYoutube)
  const {loading,error,youtube} = getOneYoutube

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneYoutubeAction(id))
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
                {youtube && youtube.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                        {sub.youtube_intro}                                       
                    </div>
                ))}
                <br />
                <Link to="/all_youtube">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default YoutubeMore;
