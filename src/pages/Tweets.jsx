import React, { useState } from "react";

import {
  BCDIcons,
  OutputNumber,
  ProjectHeader,
  SideNav,
  TopNav,
} from "../components";

import tweet from "../assets/tweet.png";
import { AiOutlineAudio } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { FiStopCircle } from "react-icons/fi";
import { CiPause1 } from "react-icons/ci";
import { RiVoiceprintFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addTwitter } from "../actions/ai/twitterAction";
import Loader from "../components/Loader";

const Tweets = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const [topic, setTopic] = useState([])
  const [keywords, setKeywords] = useState([])

  const dispatch = useDispatch()
  const twitter = useSelector((state)=>state.twitter)
  const {loading, error,success, tweets} = twitter

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(topic,keywords)
    dispatch(addTwitter(topic,keywords))
  }
  // handle audio option
  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
  };

  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="inner-page-container">
              {/* header */}
              <ProjectHeader image={tweet} title="Tweets Generation" />
              {/* body content */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                  <p className="product-p">Topic*</p>
                  <input type="text" className="input" onChange={(e)=>setTopic(e.target.value)} value={topic} />
                  <p className="product-p">Keyword*</p>
                  <textarea
                  onChange={(e)=>setKeywords(e.target.value)}
                  value = {keywords}
                    name=""
                    id=""
                    style={{
                      display: "block",
                      width: "100%",
                      background: "var(--primary-blue)",
                      borderRadius: "var(--border-radius-xs)",
                      border: "none",
                      outline: "none",
                      height: "30%",
                      margin: "10px 0",
                      padding: "10px",
                    }}
                  ></textarea>
                  <div
                    className="mic"
                    style={{
                      display: "block",
                      textAlign: "right",
                      margin: "10px 0",
                    }}
                  >
                    {isAudio ? (
                      <div className="audio">
                        <button
                          className="icon-div"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <RiVoiceprintFill />
                        </button>
                        <button
                          className="icon-div"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <CiPause1 />
                        </button>
                        <button
                          className="icon-div"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <FiStopCircle />
                        </button>
                        <button
                          className="icon-div"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsAudio(false);
                          }}
                        >
                          <HiOutlinePencil />
                        </button>
                      </div>
                    ) : (
                      <AiOutlineAudio
                        className="icon-div mic-icon"
                        onClick={handleAudio}
                      />
                    )}
                  </div>
                  {/* tone of voice */}
               
                  {/*  number of output*/}
                 
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Create Tweets
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right">
                    {loading && <Loader />}
                    {error && <div className='bar error'>{error}</div>}
                    {tweets && tweets.map((tweet)=>(

                  <div className="sec-1">
                    <BCDIcons />
                    {tweet.generated_tweets}
                  </div>
                    ))}
                  {/* <div className="sec-2">
                    <BCDIcons />
                    <div className="txt-sec"></div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tweets;
