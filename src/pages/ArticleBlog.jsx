import React, { useEffect, useState } from "react";
import "./styles/GoogleAdTitle.css";
import articleBlog from "../assets/article-blog.png";
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
import {useDispatch, useSelector} from 'react-redux'
import { addArticleBlog } from "../actions/ai/articleBlogAction";
import Loader from "../components/Loader";
import { useRef } from "react";
import { getProjectAction } from "../actions/backend/projectAction";
import { addConclusionAction } from "../actions/backend/conclusionAction";
import { Link, useNavigate } from "react-router-dom";
import ProjectModal from "../pages/ProjectModal"
import '../pages/styles/projectModal.css';
import toast, { Toaster } from "react-hot-toast";

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'


const GoogleAdTitile = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');


  const [article, setArticle] = useState([])
  const [outputNumber, setOutputNumber] = useState(1);
  const [projectId, setProjectId] = useState()
  const myDiv = useRef(null)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const articleBlogs = useSelector((state)=>state.articleBlogs)
  const {loading,error,success,conclusions} = articleBlogs 

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const saveConclusion = useSelector((state)=>state.saveConclusion)
  const {loading:conLoading,error:conError} = saveConclusion



  useEffect(() => {
    handleListening()
  }, [isListening,success])
  

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

      mic.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('');
  
        setSpokenText(transcript); // Set the spoken text
  
        // Update the content in the textarea with spoken words
        setArticle((prevContent) => prevContent + ' ' + transcript);
      };
  
  }

 useEffect(() => {
    dispatch(getProjectAction())
  }, [])

  const handSubmit = (e) => {
    e.preventDefault()
    console.log("loading")
    dispatch(addArticleBlog(article,outputNumber))
  }


  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData,projectId)
    dispatch(addConclusionAction(divData,projectId))
   
    if(success){
      toast.success("Blog Article saved successfuly");
    
      setTimeout(()=>{
          navigate('/conclusion')
      },5000)
    }
  }


  
  

 
  const handleModal = () => {
      console.log('this is the pop for creating project')
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
              <ProjectHeader
                image={articleBlog}
                title="Article/Blog Conclusion"
              />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handSubmit}>
                  <p className="product-p">Description of Article/Blog*</p>
                  <textarea
                    onChange={(e)=>setArticle(e.target.value)}
                    value={article}
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
                      height: "40%",
                      margin: "10px 0",
                      padding: "10px",
                      resize: "none",
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
                    
                  {isListening ? <RiVoiceprintFill  className="icon-div mic-icon" /> : <FiStopCircle  className="icon-div mic-icon" />}
                  <AiOutlineAudio
                     className="icon-div mic-icon"
                     onClick={()=>setIsListening(prevState => !prevState)}
                   />
                  </div>
                  {/*  number of output*/}
                  <OutputNumber
                    outputNumber={outputNumber}
                    setOutputNumber={setOutputNumber}
                    onChange={(e)=>setOutputNumber(e.target.value)}
                    value={outputNumber}
                  />
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Create Blog Conclusion
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                <form onSubmit={handleForm}>
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                <Toaster />

                {conclusions && conclusions.map((conclusion)=>(
                  
                  <div className="sec-1" ref={myDiv} contentEditable suppressContentEditableWarning>
                  <BCDIcons />
                  {conclusion.generated_conclusions.map((d)=>(
                    <p>{d}</p>
                    
                    ))}
                    </div>
                    ))}

                    <br />
                  
                    <Link onClick={setOpenModal} style={{backgroundColor:"blue", padding:"5px",paddingBottom:"4px", color:'#fff'}} className="openModal" >Create Project</Link>
                    {openModal && <ProjectModal closeModal={setOpenModal} />}
                    <select
                    onChange={(e)=>setProjectId(e.target.value)} 
                    value={projectId}
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
                    <option value="" selected disabled hidden>Select project</option>
                    
                    {
                      project && project.map((pro, i)=>(
                        <option key={i} value={pro.id}>{pro.name}</option>
                        ))
                      }
                      </select>
                      <br />
                      <button className="article-btn" style={{ fontSize: "14px" }}>
                      Save Article Conclusion
                      </button>
                    
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default GoogleAdTitile;
