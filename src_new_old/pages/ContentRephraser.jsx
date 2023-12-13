import React, { useEffect, useRef, useState } from "react";
import "./styles/GoogleAdDesc.css";
import content from "../assets/content.png";
import {
  BCDIcons,
  OutputNumber,
  ProjectHeader,
  SideNav,
  TopNav,
} from "../components";
import { AiOutlineAudio } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { FiStopCircle } from "react-icons/fi";
import { CiPause1 } from "react-icons/ci";
import { RiVoiceprintFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addContentRephesal } from "../actions/ai/contentRepresalAction";
import Loader from "../components/Loader";
import { getProjectAction } from "../actions/backend/projectAction";
import { addContentRepreAction } from "../actions/backend/contentRepreAction";
import { useNavigate } from "react-router-dom";

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const GoogleAdDesc = () => {
  const [isAudio, setIsAudio] = useState(false);
  const[isListening, setIsListening] = useState(false)
  const [note, setNote] = useState([])

  const [projectId, setProjectId] = useState()
  const myDiv = useRef(null)

  const [content, setContent] = useState([])
  const [outputNumber, setOutputNumber] = useState(1);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const contentRephesal = useSelector((state)=>state.contentRephesal)
  const {loading,error, rephesals,success} = contentRephesal

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

   const saveContent = useSelector((state)=>state.saveContent)
   const {loading:contentLoading,error:contentError} = saveContent

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("working")
    dispatch(addContentRephesal(content,outputNumber))
  }

  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData)
    console.log(projectId)
    dispatch(addContentRepreAction(divData,projectId))
    navigate('/content')
  }

  useEffect(() => {
    dispatch(getProjectAction())
  }, [])



  useEffect(() => {
    handleListening()
  }, [isListening])
  

  const handleListening = () => {
      if(isListening){
          mic.start()
          mic.onend = () => {
              console.log('continue ...')
              mic.start()
          }
      }
      else{
          mic.stop()
          mic.onend = () => {
              console.log('stoped')
          }
      }
      mic.onstart = () => {
          console.log('Mics is on')
      }

      mic.onresult = event => {
          const transcript = Array.from(event.results).map(result => result[0]).map(result=> result.transcript).join('')
          console.log(transcript)
          setNote(transcript)
          mic.onerror = event => {
              console.log(event.error)
          }
      }
  }
  // state to keep track of number of output
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
            <div className="google-ad inner-page-container">
              {/* header */}
              <ProjectHeader image={content} title="Content Rephrase" />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                  <p className="product-p">Content*</p>
                  <textarea
                  onChange={(e)=>setContent(e.target.value)}
                  value ={content}
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
                      resize: "none",
                    }}
                  >{note}</textarea>
                  <div
                    className="mic"
                    style={{
                      display: "block",
                      textAlign: "right",
                      margin: "10px 0",
                    }}
                  >
                    {/* {isAudio ? (
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
                    )} */}
                     {isListening ?  <RiVoiceprintFill className="icon-div mic-icon" /> :  <FiStopCircle className="icon-div mic-icon" />}
                     <AiOutlineAudio
                        className="icon-div mic-icon"
                        onClick={()=>setIsListening(prevState =>!prevState)}
                      />
                  </div>
                  {/*  number of output*/}
                  <OutputNumber
                    outputNumber={outputNumber}
                    setOutputNumber={setOutputNumber}
                    onChange={(e)=>setOutputNumber(e.target.value)}
                    value ={outputNumber}
                  />
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Create Content Rephrase
                  </button>
                  </form>
                </div>

                {/*  */}
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                    {loading && <Loader />}
                    {error && <div className=' bar error'>{error}</div>}
                    {contentLoading && <Loader />}
                    {contentError && <div className=' bar error'>{contentError}</div>}
                    <form onSubmit={handleForm}>
                        {rephesals && rephesals.map((rephesal)=>(
                          
                          <div className="sec-1" ref={myDiv} suppressContentEditableWarning={true} contentEditable>
                          <BCDIcons />
                          {rephesal.generated_rephrase_contents.map((d)=>(
                            <p>{d}</p>
                          ))}
                          </div>
                          ))}
                          <br />
                 
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
                <button className="article-btn" style={{ fontSize: "14px" }}>
                Save Article Rewriter
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

export default GoogleAdDesc;
