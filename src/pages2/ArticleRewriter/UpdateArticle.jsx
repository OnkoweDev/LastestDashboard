import React, { useEffect, useRef, useState } from "react";
import "../styles/GoogleAdTitle.css";
import articleBlog from "../../assets/article-blog.png";
import {
  BCDIcons,
  OutputNumber,
  ProjectHeader,
  SideNav,
  TopNav,
} from "../../components";
import { AiOutlineAudio } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { FiStopCircle } from "react-icons/fi";
import { CiPause1 } from "react-icons/ci";
import { RiVoiceprintFill } from "react-icons/ri";
import {useDispatch, useSelector} from 'react-redux'
import Loader from "../../components/Loader";
import { useParams } from "react-router-dom";
import { getOneArticleAction, updateArticleAction } from "../../actions/backend/articleWritterAction";


const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'


const UpdateArticle = () => {
  // state for audio option
  const myDiv = useRef(null);
  const [isAudio, setIsAudio] = useState(false);

  const[isListening, setIsListening] = useState(false)
  const [note, setNote] = useState([])

  const [content, setContent] = useState([])

  const [article, setArticle] = useState()
  
  const dispatch = useDispatch()
  
  const getOneArticleWriter = useSelector((state)=>state.getOneArticleWriter)
  const {loading,error,wroter} = getOneArticleWriter

  const {id} = useParams();

  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText;
      setArticle(divData)
      //console.log(divData) 
      dispatch(updateArticleAction(divData))
     
      
  }
  
  useEffect(() => {
    dispatch(getOneArticleAction(id))
  }, [])
  

  
 

 


  useEffect(() => {
    handleListening()
  }, [isListening])
  

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
                <form onSubmit={handleForm}>
                    {wroter && wroter.map((wrote)=>(
                        <div className="sec-1" ref={myDiv} contentEditable  type='text'>
                        <BCDIcons />   
                            {wrote.article_rewriter}
                        </div>
                    ))}
                 <br />
                 
                <button className="article-btn" style={{ fontSize: "14px" }}>
                Update Article Rewriter
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

export default UpdateArticle;
