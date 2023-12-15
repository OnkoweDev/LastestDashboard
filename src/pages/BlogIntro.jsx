import React, { useState,useEffect, useRef } from "react";
import "./styles/Article.css";
import blog1 from "../assets/article.png";
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
import { addEbook, viewMyEbook } from "../actions/ebookaction";
import { useNavigate } from "react-router-dom";
import { addBlog, getBlogIntroAction } from "../actions/ai/blogIntroAction";
import Loader from '../components/Loader'
import { getProjectAction } from "../actions/backend/projectAction";
import { blogIntroAddAction } from "../actions/backend/blogIntroAction";

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'


const TTR = () => {

    
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  const [projectId, setProjectId] = useState();

  const myDiv = useRef(null)
  

  const [title, setTitle] = useState([])
  const [outputNumber, setOutputNumber] = useState(1);
  const [spokenText, setSpokenText] = useState('');


//   const [number_of_outputs,setNumber_of_outputs] = useState([])

  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState([])

  const dispatch = useDispatch()
  const navigate = useNavigate()
  //const AddEbook = useSelector((state)=>state.AddEbook)
  //const viewEbook = useSelector((state)=>state.viewEbook)

  //const {loading,error,success} = AddEbook
  //const {loading:ebookloading,error:ebookError,ebooks} = viewEbook
  const addBlogIntro = useSelector((state)=>state.addBlogIntro)
  const {loading,error,success,newBlogs} = addBlogIntro

  const saveBlogIntro = useSelector((state)=>state.saveBlogIntro)
  const {loading:saveIntroLoading, error:saveIntroError} = saveBlogIntro

  const userLogin = useSelector((state)=>state.userLogin)
  const {userInfo} = userLogin

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

 

const handleForm  = (e) => {
  e.preventDefault()
  const divData = myDiv.current.innerText;
  console.log(divData)
  console.log(projectId)
  dispatch(blogIntroAddAction(divData,projectId))
  navigate('/all_intro')
}

useEffect(() => {
  dispatch(getProjectAction())
}, [])
     
  

    useEffect(() => {
        dispatch(getBlogIntroAction())
        if(!userInfo){
            navigate('/')
        } 
       
    }, [])
    
    
  const handleIntro = (e) =>{
        e.preventDefault()
        console.log(title,outputNumber)
        dispatch(addBlog(title,outputNumber))
        navigate('/blog-intro-generator')
       // dispatch(addBlog())
        
  }

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
        setTitle((prevContent) => prevContent + ' ' + transcript);
      };
  
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
            <div className="article-container inner-page-container">
              {/* header */}
              <ProjectHeader image={blog1} title="Blog Intro Generator" />
              {/* body */}
              <div className="body-content">
                <div className="left">
              
                    <form onSubmit={handleIntro}>
                  <p className="product-p">Topic*</p>
                 

                  
                  <textarea
                    name=""
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                    id=""
                    required
                    style={{
                      display: "block",
                      width: "100%",
                      background: "var(--primary-blue)",
                      borderRadius: "var(--border-radius-xs)",
                      border: "none",
                      outline: "none",
                      height: "15%",
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
                    value={setOutputNumber}
                    
                  />
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Create Blog Intro Generator
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                
               


                <form onSubmit={handleForm}>
                
                {
                  Array.isArray(newBlogs) ?
                   newBlogs.map((d)=>(
                    <div className="sec-1" suppressContentEditableWarning={true} contentEditable ref={myDiv}>
                        {d.generated_intros.map((d)=>(
                          <p>{d}</p>
                        ))}
                      </div>
                      )):null
                    }

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
                        {
                         project && project.map((pro, i)=>(
                          <option key={i} value={pro.id}>{pro.name}</option>
                          ))
                         }
                        </select>
                     <br />
                    <button className="article-btn" style={{ fontSize: "14px" }}>
                    Save Blog Intro Generated
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

export default TTR;
