import React, { useEffect, useRef, useState } from "react";
import {
  BCDIcons,
  OutputNumber,
  ProjectHeader,
  SideNav,
  TopNav,
} from "../components";
import "./styles/Youtube.css";

import youtube from "../assets/youtube.png";
import { AiOutlineAudio } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { FiStopCircle } from "react-icons/fi";
import { CiPause1 } from "react-icons/ci";
import { RiVoiceprintFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { youtubeAction } from "../actions/ai/youtubeAction";
import Loader from "../components/Loader";
import { getProjectAction } from "../actions/backend/projectAction";
import { addYoutubeAction } from "../actions/backend/youtubeAction";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

const Youtube = () => {
    const [title, setTitle] = useState([])
    const [hook, setHook] = useState([])
    const [keywords, setKeywords] = useState([])
    const [tone, setTone] = useState()
    const [projectId, setProjectId] = useState()
    const myDiv = useRef(null)
    const myDivRefs = useRef([]);


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const youtube = useSelector((state)=>state.youtube)
    const {loading, error, success, youtubes} = youtube

    const getProject = useSelector((state)=>state.getProject)
    const {loading:projectLoading,error:projectError, project} = getProject

    
    const saveYoutube = useSelector((state)=>state.saveYoutube)
    const {loading:youtubeLoading,error:youtubeError,success:youtubeSuccess} = saveYoutube

  useEffect(() => {
    dispatch(getProjectAction())
}, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(tone,hook)
        dispatch(youtubeAction(title,hook,keywords,tone))
    }

    const handleForm = (index, subIndex) => {
      // e.preventDefault()
       const specificDiv = document.getElementById(`div-${index}-${subIndex}`);
       const specificData = specificDiv.innerText;
       ////console.log(specificData)
      dispatch(addYoutubeAction(specificData))
      
      toast.success("YouTube Intro successfuly");
      
   
    }
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  // state to keep track of number of output
  // handle audio option
  const handleAudio = () => {
    //console.log("Mic is clicked");
    setIsAudio(true);
  };

   //handle copy functionality

   const handleCopy = (id) => {
    //console.log('copying blog article');
    const divData = document.getElementById(`div-${id}`);
    if (divData) {
      navigator.clipboard.writeText(divData.innerText);
      toast.success('copied');
    }
  };
  

  //Typewriter Effect
  const TypeWriterEffect = ({ text }) => {
    return <Typewriter deleteSpeed={false} words={[text]}  cursor />;
  };

  const [typingStatus, setTypingStatus] = useState([]);

  useEffect(() => {
    if (youtubes) {
      setTypingStatus(Array(youtubes.length).fill(true));
    }
  }, [youtubes]);

  const updateTypingStatus = (index, status) => {
    setTypingStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = status;
      return newStatus;
    });
  };

  const renderIntroContents = () => {
    if (!youtubes || !youtubes.length) {
      return <div></div>;
    }
  
    return youtubes.map((product, index) => (
      <div className="sec-1" ref={myDiv} key={index}>
        <div className="right-icons-container-fa">
          <button className="icon-contain" onClick={() => handleCopy(index)}>
            <MdOutlineContentCopy className="icon" />
          </button>
          <button className="icon-contain" onClick={() => handleForm(index)}>
            <MdOutlineSaveAlt className="icon" />
          </button>
        </div>
        <div className="txt-sec" ref={(el) => myDivRefs.current[index] = el}>
          {product.generated_intros.map((description, idx) => (
            <div key={`${index}-${idx}`} style={{ marginBottom: '20px', margin:'15px', }}>

              <p style={{  textAlign: 'justify', margin:'10px', }} dangerouslySetInnerHTML={{ __html: description.replace(/"/g, '').replace(/Intro/g, '<span style="font-weight: bold;">Intro</span>') }} />

            </div>
          ))}
        </div>
      </div>
    ));
  };

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
            <div className="inner-page-container">
              {/* header */}
              <ProjectHeader image={youtube} title="YouTube Intro Generator" />
              {/* body content */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                  <p className="product-p">Title*</p>
                  <input required type="text" className="input" onChange={(e)=>setTitle(e.target.value)}  value={title}/>
                  <p className="product-p">Video hook*</p>
                  <textarea
                  onChange={(e)=>setHook(e.target.value)}  value={hook}
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
                      height: "17%",
                      margin: "10px 0",
                      padding: "10px",
                    }}
                  ></textarea>
                  
                  {/* keywords */}
                  <p className="product-p">Keywords*</p>
                  <input required type="text" onChange={(e)=>setKeywords(e.target.value)}  value={keywords}/>
                  {/* tone of voice */}
                  <p className="product-p">Tone of voice*</p>

                  <select
                  onChange={(e)=>setTone(e.target.value)}  value={tone}
                    name=""
                    id=""
                    required
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
                    <option value="" selected disabled hidden>Select Tone</option>
                    <option value="Funny">Funny</option>
                    <option value="Excited">Excited</option>
                    <option value="Professional">Professional</option>
                    <option value="Dramatic">Dramatic</option>
                    <option value="Encouraging">Encouraging</option>
                    <option value="Creative">Creative</option>
                  </select>
                  {/*  number of output*/}
                 
                  <button className="article-btn" style={{ fontSize: "12px" }}>
                    Create Youtube Intro
                  </button>
                     </form>
                </div>
                {/*  */}
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
               
                {loading && <Loader />}
                {error && <div className='bar error'>{error}</div>}
                <Toaster />
                {Array.isArray(youtubes) && youtubes.map((you,index)=>(
                  <div className="sec-1" key={index} ref={myDiv}>
                  
                  {you.generated_intros.map((d,idx)=>(
                    <div  className="txt-sec" key={idx}>
                    <div className="right-icons-container-fa">
                        <button className="icon-contain" onClick={() => handleCopy(`${index}-${idx}`)}>
                          <MdOutlineContentCopy className="icon" />
                          </button>

                          <button className="icon-contain" onClick={(e) => handleForm(index, idx, e)}>
                          <MdOutlineSaveAlt className="icon" />
                        </button>
                    </div>   
                     <div id={`div-${index}-${idx}`}>
                     {typingStatus[index] && <Typewriter deleteSpeed={false} typeSpeed={20} words={[d.replace(/"/g, '')]} cursor />}
                     </div>
                  </div>
                  ))} 
                                    
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

export default Youtube;
