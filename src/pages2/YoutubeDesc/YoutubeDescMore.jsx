import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { getOneYoutubeDescAction } from "../../actions/backend/youtubeDescAction";

const YoutubeDescMore = () => {

  const dispatch = useDispatch()
  const getOneYoutubeDesc = useSelector((state)=>state.getOneYoutubeDesc)
  const {loading,error,youtubesDesc} = getOneYoutubeDesc

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneYoutubeDescAction(id));
  }, [id, dispatch]);
  
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
                {youtubesDesc && youtubesDesc.length > 0 ? (
                  youtubesDesc.map((you) => (
                    <div key={you.id} className="cards-container">
                      {you.description}
                    </div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
                <br />
                <Link to="/all_youtubeDesc">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default YoutubeDescMore;
