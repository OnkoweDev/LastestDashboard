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
import toast, { Toaster } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";

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
   const {loading:contentLoading,error:contentError,success:conSuccess} = saveContent

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("working")
    dispatch(addContentRephesal(content,outputNumber))
  }

  const handleForm = (index, subIndex,e) => {
    //e.preventDefault()
    const specificDiv = document.getElementById(`div-${index}-${subIndex}`);
    const specificData = specificDiv.innerText;
    console.log(specificData)
    dispatch(addContentRepreAction(specificData))
   
    if(conSuccess){
      toast.success("Content Rephraser saved successfuly");
      // setTimeout(()=>{
      //   navigate('/content')
      // },5000)
    }
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
 

  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
  };

   //Typewriter Effect
   const TypeWriterEffect = ({ text }) => {
    return <Typewriter deleteSpeed={false} words={[text]}  cursor />;
  };
//copy Effect
  const handleCopy = (id) => {
    console.log('copied');
    const divData = document.getElementById(`div-${id}`);
    if (divData) {
      navigator.clipboard.writeText(divData.innerText);
      toast.success('copied');
    }
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
                    <Toaster />
                    
                        {rephesals && rephesals.map((rephesal,index)=>(
                          
                          <div className="sec-1" ref={myDiv} suppressContentEditableWarning={true} contentEditable>
                          {rephesal.generated_rephrase_contents.map((d,idx)=>(
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
                                  <TypeWriterEffect text={d} />
                                </div>
                            </div>
                          ))}
                          </div>
                          ))}
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
