import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { getOneAudioAction } from "../../actions/backend/audioAction";

const AudioMore = () => {

  const dispatch = useDispatch()
  const getOneAudio = useSelector((state)=>state.getOneAudio)
  const {loading,error,audio} = getOneAudio

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneAudioAction(id))
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
                {Array.isArray(audio) ?audio && audio?.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%",whiteSpace: 'pre-wrap' }}>
                        {sub.generated_transcription}                                       
                    </div>
                )):null}
                <br />
                <Link to="/all_audio">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default AudioMore;
