import React, { useEffect, useRef, useState } from "react";
import "./styles/GoogleAdTitle.css";
import articleBlog from "../assets/article-blog.png";
import toast, { Toaster } from "react-hot-toast";

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
import { addArticleRewriter } from "../actions/ai/artcleRewriterAction";
import { getProjectAction } from "../actions/backend/projectAction";
import { articleAddAction } from "../actions/backend/articleWritterAction";

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'


const ArticleRewriter2 = () => {
  // state for audio option
  const myDiv = useRef(null);
  const [isAudio, setIsAudio] = useState(false);

  const[isListening, setIsListening] = useState(false)
  const [note, setNote] = useState([])

  const [content, setContent] = useState([])

  const [article, setArticle] = useState()
  const [projectId, setProjectId] = useState()
  
  const dispatch = useDispatch()
  const articleRewriter = useSelector((state)=>state.articleRewriter)
  const {loading,error,success,rewriters} = articleRewriter 

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const articleWritter = useSelector((state)=>state.articleWritter)
  const  {loading:articleLoading,error:articleError, writer} = articleWritter



  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText;
      setArticle(divData)
      //console.log(divData) 
      //console.log(projectId) 
      dispatch(articleAddAction(divData,projectId))
      //console.log(error)
      
  }
  
  useEffect(() => {
    dispatch(getProjectAction())
  }, [])
  

  
  const handSubmit = (e) => {
    e.preventDefault()
    //console.log("loading")
    dispatch(addArticleRewriter(content))
  }

 


  useEffect(() => {
    handleListening()
  }, [isListening,success])
  

  const handleListening = () => {
      if(isListening){
          mic.start()
          mic.onend = () => {
              //console.log('continue ...')
              mic.start()
          }
      }
      else{
          mic.stop()
          mic.onend = () => {
              //console.log('stoped')
          }
      }
      mic.onstart = () => {
          //console.log('Mics is on')
      }

      mic.onresult = event => {
          const transcript = Array.from(event.results).map(result => result[0]).map(result=> result.transcript).join('')
          //console.log(transcript)
          setNote(transcript)
          mic.onerror = event => {
              //console.log(event.error)
          }
      }
  }


  // state to keep track of number of output
  // handle audio option
  const handleAudio = () => {
    //console.log("Mic is clicked");
    setIsAudio(true);
  };
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <div className="content">
            <div className="google-ad inner-page-container">
              {/* header */}
              <ProjectHeader
                image={articleBlog}
                title="Article/Blog Rewriter"
              />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handSubmit}>
                  <p className="product-p">Content*</p>
                  <textarea
                    onChange={(e)=>setContent(e.target.value)}
                    value={content}
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
                      overflow:"auto",
                       border:"0px",
                       outline:"0px",
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
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Create Article Rewriter
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right">
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}

                {articleLoading && <Loader />}
                {articleError && <div className=' bar error'>{articleError}</div>}

                
                <form onSubmit={handleForm}>
                {rewriters && rewriters.map((rewrite)=>(
                  <div className="sec-1" ref={myDiv} contentEditable  type='text'>
                  <BCDIcons />
                        {rewrite.generated_article}
                  </div>
                  ))}
                 <br />
                 
                 
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
                Save Article Rewriter
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

export default ArticleRewriter2;
