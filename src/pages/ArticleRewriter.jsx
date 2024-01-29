import React, { useEffect, useRef, useState } from "react";
import "./styles/GoogleAdTitle.css";
import articleBlog from "../assets/article-blog.png";
import ReactTextFormat from 'react-text-format';
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
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import ArticleReType from "../components/ArticleReType";

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'


const ArticleRewriter = () => {
  // state for audio option
  const myDiv = useRef(null);
  const [isAudio, setIsAudio] = useState(false);

  const[isListening, setIsListening] = useState(false)
  const [note, setNote] = useState([])
  const [spokenText, setSpokenText] = useState('');

  const [content, setContent] = useState([])

  const [article, setArticle] = useState()
  const [projectId, setProjectId] = useState()
  const [formattedContent, setFormattedContent] = useState("");

  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const articleRewriter = useSelector((state)=>state.articleRewriter)
  const {loading,error,success,rewriters} = articleRewriter 

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const articleWritter = useSelector((state)=>state.articleWritter)
  const  {loading:articleLoading,error:articleError, success:saveSuccess} = articleWritter



const handleForm = (index) => {
    //e.preventDefault()
    const specificDiv = document.getElementById(`div-${index}`);
    const specificData = specificDiv.innerText;
    console.log(specificData)
      dispatch(articleAddAction(specificData))
      
        toast.success("Article rewriter saved successfuly");       
        //navigate('/allArticle') 
     
      
  }
  
  useEffect(() => {
    dispatch(getProjectAction())
  }, [])
  

  
  const handSubmit = (e) => {
    e.preventDefault()
    console.log("loading")
    dispatch(addArticleRewriter(content))
  }

  //Typewriter Effect
  const TypeWriterEffect = ({ text }) => {
    return <Typewriter typeSpeed={50} deleteSpeed={false} words={[text]}  cursor />;
  };
//copy Effect
  const handleCopy = (id) => {
    console.log('copying blog article');
    const divData = document.getElementById(`div-${id}`);
    if (divData) {
      navigator.clipboard.writeText(divData.innerText);
      toast.success('copied');
    }
  };



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
        setContent((prevContent) => prevContent + ' ' + transcript);
      };
  
  }

  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
  };

  const [typingStatus, setTypingStatus] = useState([]);

  useEffect(() => {
    if (rewriters) {
      setTypingStatus(Array(rewriters.length).fill(true));
    }
  }, [rewriters]);

  const updateTypingStatus = (index, status) => {
    setTypingStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = status;
      return newStatus;
    });
  };

  useEffect(() => {
    if (rewriters) {
      // Assuming writers is an array of strings containing your content
      const joinedContent = rewriters.join('\n\n'); // Joining content with double line breaks
      setFormattedContent(joinedContent);
    }
  }, [rewriters]);
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
               
                  {/*  number of output*/}
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Create Article Rewriter
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                
                {articleLoading && <Loader />}
                {articleError && <div className=' bar error'>{articleError}</div>}
                <Toaster />
                
               
                {rewriters && rewriters.map((rewrite,index)=>(
                  <div className="sec-1" key={index} ref={myDiv}  type='text'>
                  <div className="right-icons-container-fa">
                    <button className="icon-contain" onClick={() => handleCopy(`${index}`)}>
                       <MdOutlineContentCopy className="icon" />
                    </button>
                    
                    <button className="icon-contain" onClick={(e) =>handleForm(index,e)}>
                      <MdOutlineSaveAlt className="icon" />
                    </button>
                  </div>
                 
                  <div className="txt-sec" id={`div-${index}`} style={{ whiteSpace: 'pre-wrap' }}>

                  {formattedContent && (
                   
                    <Typewriter typeSpeed={20} words={[rewrite.generated_article]} />
                  )}
                   
                 
                  </div>
                  </div>
                  ))}
                  <br />

                 {/* <form>
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
                  */}
                    </div>
                    </div>
                    </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ArticleRewriter;
