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
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineContentCopy } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

const Youtube = () => {
    const [title, setTitle] = useState([])
    const [hook, setHook] = useState([])
    const [keywords, setKeywords] = useState([])
    const [tone, setTone] = useState()
    const [projectId, setProjectId] = useState()
    const myDiv = useRef(null)

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
        console.log(tone,hook)
        dispatch(youtubeAction(title,hook,keywords,tone))
    }

    const handleForm = (e) => {
      e.preventDefault()
      const divData = myDiv.current.innerText
      console.log(divData,projectId)
      dispatch(addYoutubeAction(divData,projectId))
      
      
    if(youtubeSuccess){
      toast.success("YouTube Intro successfuly");
      setTimeout(()=>{
        navigate('/all_youtube')
      },5000)
    }
    }
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  // state to keep track of number of output
  // handle audio option
  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
  };

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
  const TypeWriterEffect = ({ text }) => {
    return <Typewriter deleteSpeed={false} words={[text]}  cursor />;
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
                {Array.isArray(youtubes) ? youtubes && youtubes.map((yout,index)=>(
                  <div className="sec-1" key={index} ref={myDiv} contentEditable suppressContentEditableWarning={true}>
                  {yout.generated_intros.map((d,idx)=>(
                    <div  className="txt-sec" key={idx}>
                      <button className="icon-contain" onClick={() => handleCopy(`${index}-${idx}`)}>
                      <MdOutlineContentCopy className="icon" />
                      </button>
                      <div id={`div-${index}-${idx}`}>
                        <TypeWriterEffect text={d} />
                       </div>
                    </div> 
                  ))}
                  </div>
                  
                  )):null}

                  <br />
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
                <option value="" selected disabled hidden>Select project</option>
                
                {
                  project && project.map((pro, i)=>(
                    <option key={i} value={pro.id}>{pro.name}</option>
                    ))
                  }
                  </select>
                  <br />
            <button className="article-btn" style={{ fontSize: "12px" }}>
            Save Youtube Intro
          </button>
                  </form>
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

export default Youtube;
