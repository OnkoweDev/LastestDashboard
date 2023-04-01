import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneTweetAction } from "../../actions/backend/tweetAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const TweetMore = () => {

  const dispatch = useDispatch()
  const getOneTweet = useSelector((state)=>state.getOneTweet)
  const {loading,error,tweeter} = getOneTweet

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneTweetAction(id))
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
                {tweeter && tweeter.map((sub)=>(
                    <div key={sub.id}className="cards-container">
                        {sub.tweet}                                       
                    </div>
                ))}
                <br />
                <Link to="/all_tweet">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default TweetMore;
