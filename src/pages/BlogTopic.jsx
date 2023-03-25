import React, { useEffect, useRef, useState } from "react";
import "./styles/Facebook.css";
import blog2 from "../assets/blog-section.png";
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
import { useNavigate } from "react-router-dom";
import { blogSectionAction } from "../actions/ai/blogSectionAction";
import { blogTopicAction } from "../actions/ai/blogTopicAction";
import Loader from "../components/Loader";
import { getProjectAction } from "../actions/backend/projectAction";
import { blogTopicAddAction } from "../actions/backend/blogTopicAction";

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const BlogTopic = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  const myDiv = useRef(null)
  const [projectId, setProjectId] = useState()

  const [topic, setTopic] = useState([])
  const [outputNumber, setOutputNumber] = useState(1);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const blogTopic = useSelector((state)=>state.blogTopic)
  const {loading, success,error, topics} = blogTopic

  const saveBlogTopic = useSelector((state)=>state.saveBlogTopic)
  const {loading:topicLoading, success:topicSuccess,error:topicError} = saveBlogTopic


  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(topic, outputNumber)
    dispatch(blogTopicAction(topic,outputNumber))
  }

  const handleForm = (e) =>{
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData)
    console.log(projectId)
    dispatch(blogTopicAddAction(divData,projectId))
  }

  useEffect(() => {
    dispatch(getProjectAction())
  }, [])


  useEffect(() => {
   
  }, [success])
  


  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState([])

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
            <div className="facebook-container inner-page-container">
              {/* header */}
              <ProjectHeader image={blog2} title="Blog Topic Generator" />
              {/* body */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                  <p className="product-p">Title*</p>
                  <textarea
                    onChange={(e)=>setTopic(e.target.value)}
                    value={topic}
                    name=""
                    id=""
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
                    value={outputNumber}
                  />
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Create Blog Topic Generator
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right">
                <form onSubmit={handleForm}>
                  {loading && <Loader />}
                  {error && <div className='bar error'>{error}</div>}
                  {topics?.map((blog)=>(
                    
                    <div className="sec-1" ref={myDiv} contentEditable>
                    <BCDIcons />
                    {blog.generated_topics?.map((d)=>(
                      
                      <p>
                      {d}
                      </p>
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
                        {
                         project && project.map((pro, i)=>(
                          <option key={i} value={pro.id}>{pro.name}</option>
                          ))
                         }
                        </select>
                      <br />
                      <button className="article-btn" style={{ fontSize: "14px" }}>
                         {topicLoading ? "Please wait..." : "Save Blog Topic Generator"}
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

export default BlogTopic;
