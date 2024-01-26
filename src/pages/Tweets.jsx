import React, { useEffect, useRef, useState } from "react";

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
import { getProjectAction } from "../actions/backend/projectAction";
import { addTweetAction } from "../actions/backend/tweetAction";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

const Tweets = () => {


  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  const [projectId, setProjectId] = useState()
  const myDiv = useRef('')

  const [topic, setTopic] = useState([])
  const [keywords, setKeywords] = useState([])


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const twitter = useSelector((state)=>state.twitter)
  const {loading, error,success, tweets} = twitter

  const [typingStatus, setTypingStatus] = useState([]);

  useEffect(() => {
    if (tweets) {
      setTypingStatus(Array(tweets.length).fill(true));
    }
  }, [tweets]);

  const updateTypingStatus = (index, status) => {
    setTypingStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = status;
      return newStatus;
    });
  };

  const saveTweet = useSelector((state)=>state.saveTweet)
  const {loading:tweetLoading,error:tweetError,success:tweetSuccess} = saveTweet

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  useEffect(() => {
    dispatch(getProjectAction())
}, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(topic,keywords)
    dispatch(addTwitter(topic,keywords))
  }

  const handleForm = (index, subIndex) => {
   // e.preventDefault()
    const specificDiv = document.getElementById(`div-${index}-${subIndex}`);
    const specificData = specificDiv.innerText;
    console.log(specificData)
    dispatch(addTweetAction(specificData))
    
    if(tweetSuccess){
      toast.success("Tweet saved successfuly");
        //navigate('/all_tweet')
    }
  }

  //handle copy functionality

  const handleCopy = (id) => {
    console.log('copying blog article');
    const divData = document.getElementById(`div-${id}`);
    if (divData) {
      navigator.clipboard.writeText(divData.innerText);
      toast.success('copied');
    }
  };

  //Typewriter Effect
  // const TypeWriterEffect = ({ text }) => {
  //   return <Typewriter deleteSpeed={false} words={[text]}  cursor />;
  // };
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
                  <p className="product-p">Tweet Title*</p>
                  <input type="text" required className="input" onChange={(e)=>setTopic(e.target.value)} value={topic} />
                  <p className="product-p">Keyword*</p>
                  <textarea
                  onChange={(e)=>setKeywords(e.target.value)}
                  value = {keywords}
                    name=""
                    id=""
                    required
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
                 
                  {/* tone of voice */}
               
                  {/*  number of output*/}
                 
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Create Tweets
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
             
                {loading && <Loader />}
                {error && <div className='bar error'>{error}</div>}
                <Toaster />
                {tweets && tweets.map((tweet,index)=>(
                  
                  <div className="sec-1" key={index} ref={myDiv}>
                  <div className="sec-2">
                  
                  {tweet.generated_tweets.map((d,idx)=>(
              
                    <div  className="txt-sec" key={idx}>
                    <div className="right-icons-container-fa">
                        <button className="icon-contain" onClick={() => handleCopy(`${index}-${idx}`)}>
                          <MdOutlineContentCopy className="icon" />
                        </button>

                        <button className="icon-contain" onClick={() => handleForm(index,idx)}>
                              <MdOutlineSaveAlt className="icon" />
                          </button>
                    </div>
                      
                      <div id={`div-${index}-${idx}`}>
                      {typingStatus[index] && <Typewriter deleteSpeed={false} typeSpeed={20} words={[d.replace(/"/g, '')]} cursor />}
                       </div>
                    </div>
                  ))}
                </div>
                  
                  </div>
                  ))}
                  <br />
                   {/*
                    <form onSubmit={handleForm}>
                              <p className="product-p">Select Project*</p>
                              <select
                                onChange={(e)=>setProjectId(e.target.value)} 
                                value={projectId}
                                name=""
                                id=""
                                className="select"
                                style={{
                                  display: "block",
                                  width: "100%",
                                  background: "var(--primary-blue)",
                                  borderRadius: "var(--border-radius-xs)",
                                  border: "none",
                                  outline: "none",
                                  height: "10%",
                                  margin: "5px 0",
                                  padding: "5px",
                                  fontWeight: "400",
                                  fontSize: "14px",
                                  lineHeight: "21px",
                                  color: "rgba(0, 22, 51, 0.5)",
                                }}
                              >
                              <option value="" selected disabled hidden>Choose here</option>

                              {
                                project && project.map((pro, i)=>(
                                <option key={i} value={pro.id}>{pro.name}</option>
                                ))
                                }
                              </select>
                            <br />
                              <button className="article-btn" style={{ fontSize: "14px" }}>
                              Save Blog Writer
                            </button>
                              </form>*/}
                  
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
