import React, { useEffect, useRef, useState } from "react";
import "./styles/LinkedInShort.css";
import blog3 from "../assets/blog-writer.png";
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
import { addArticleWriter } from "../actions/ai/blogArticleAction";
import Loader from "../components/Loader";
import { getProjectAction } from "../actions/backend/projectAction";
import { blogWriterAddAction } from "../actions/backend/blogWriterAction";

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const LinkedInShort = () => {
  // state for audio option
  const [title,setTitle] = useState([])
  const [intro,setIntro] = useState([])
  const [sections,setSections] = useState([])
  const [projectId,setProjectId] = useState()

  const myDiv = useRef(null);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const blogArticle = useSelector((state)=>state.blogArticle)
  const {loading, error, success, writers} = blogArticle
  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const addBlogWriter = useSelector((state)=>state.addBlogWriter)
  const {loading:blogLoading, error:blogError, success:blogSuccess} = addBlogWriter


  const handleArticle = (e) => {
    e.preventDefault()
    console.log("loading data")
    dispatch(addArticleWriter(title,intro,sections))
  }

  useEffect(() => {
    dispatch(getProjectAction())
  }, [])

useEffect(() => {
}, [success])

  const [isAudio, setIsAudio] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null)

  //STORE DATA
  const [article, setArticle] = useState("")

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

  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText;
    setArticle(divData)
    console.log(divData)
    console.log(projectId)
    dispatch(blogWriterAddAction(divData, projectId))
    navigate('/allBlogs')
  }

 





  // state to keep track of number of output
  const [outputNumber, setOutputNumber] = useState(1);
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
              <ProjectHeader image={blog3} title="Blog Article writer" />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleArticle}>
                       
                        <p className="product-p">Title*</p>
                        <input type="text" className="input"  onChange={(e)=>setTitle(e.target.value)} value={title}/>
                        <p className="product-p">Intro*</p>
                        <textarea
                            onChange={(e)=>setIntro(e.target.value)}
                            value={intro}
                            name=""
                            id=""
                            style={{
                            display: "block",
                            width: "100%",
                            background: "var(--primary-blue)",
                            borderRadius: "var(--border-radius-xs)",
                            border: "none",
                            outline: "none",
                            height: "20%",
                            margin: "10px 0",
                            padding: "10px",
                            resize: "none",
                            }}
                        >{note}</textarea>

                            <p className="product-p">Sections</p>
                            <textarea
                            onChange={(e)=>setSections(e.target.value)} 
                            value={sections}
                            name=""
                            id=""
                            style={{
                            display: "block",
                            width: "100%",
                            background: "var(--primary-blue)",
                            borderRadius: "var(--border-radius-xs)",
                            border: "none",
                            outline: "none",
                            height: "20%",
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
                            { isListening ?  <RiVoiceprintFill /> : <FiStopCircle />}
                            <AiOutlineAudio
                                className="icon-div mic-icon"
                                onClick={() => setIsListening(prevState => !prevState)}
                            />
                        </div>
                        <button className="article-btn" style={{ fontSize: "14px" }}>
                            Create Blog Article writer
                        </button>
                  </form>
                </div>
                {/*  */}
                <div className="right">
                {loading && <Loader />}
                <form onSubmit={handleForm}>
                  {writers && writers.map((writer)=>(
                    <div className="sec-1" ref={myDiv} contentEditable>
                    <BCDIcons />
                    {writer.generated_contents}
                    </div>
                    ))}
                    <br/>
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

export default LinkedInShort;
