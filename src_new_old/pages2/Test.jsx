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
// import { addArticleBlog } from "../actions/ai/articleBlogAction";
import Loader from "../components/Loader";
import {articleAddAction} from "../actions/backend/articleWritterAction"

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'


const Test = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const[isListening, setIsListening] = useState(false)
  const [note, setNote] = useState([])

  const [content, setContent] = useState("")

  
  const dispatch = useDispatch()
  const articleRewriter = useSelector((state)=>state.articleRewriter)
  const {loading,error,success,rewriters} = articleRewriter 

  const handSubmit = (e) => {
    e.preventDefault()
    console.log(content)
    dispatch(articleAddAction(content))
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
              <ProjectHeader
                image={articleBlog}
                title="Article/Blog Rewriter"
              />
              {/* body container */}
              <div className="body-content">
               
                {/*  */}
                <div className="right">
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                <form onSubmit={handSubmit}>
              <p className="product-p">Content*</p>
              <textarea
                onChange={(e)=>setContent(e.target.value)}
                value={content}
                name=""
                id=""
                style={{
                  display: "block",
                  width: "100%",
                  background: "var(--primary-blue)",
                  borderRadius: "var(--border-radius-xs)",
                  border: "none",
                  outline: "none",
                  height: "300px",
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
                </div>
              </div>
            </div>
          </div>
        
      </main>
    </>
  );
};

export default Test;
