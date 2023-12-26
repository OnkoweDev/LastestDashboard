import React, { useEffect, useState } from "react";
import "./styles/GoogleAdTitle.css";
import articleBlog from "../assets/article-blog.png";
import {
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

import { MdOutlineContentCopy } from "react-icons/md";
import "../components/styles/BCDIcons.css";
import { Typewriter } from 'react-simple-typewriter';
import { MdSaveAlt } from "react-icons/md";



const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'


const GoogleAdTitile = () => {

  const TypeWriterEffect = ({ text }) => {
    return <Typewriter deleteSpeed={false} words={[text]}  cursor />;
  };

  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');


  const [article, setArticle] = useState([])
  const [outputNumber, setOutputNumber] = useState(1);
  const [projectId, setProjectId] = useState()
  const myDiv = useRef([])

  //copy function

  const handleCopy = (id) => {
    console.log('copying blog article');
    const divData = document.getElementById(`div-${id}`);
    if (divData) {
      navigator.clipboard.writeText(divData.innerText);
      toast.success('copied');
    }
  };

  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const articleBlogs = useSelector((state)=>state.articleBlogs)
  const {loading,error,success,conclusions} = articleBlogs 

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const saveConclusion = useSelector((state)=>state.saveConclusion)
  const {loading:conLoading,error:conError} = saveConclusion

  // const [typewriterText, setTypewriterText] = useTypewriter({
  //   words: ['working on the type writer effect'],
  //   loops:{},
  //   typeSpeed:100,

  // });
  //useTypewrite(typewriterText, setTypewriterText);




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


  const handleForm = (index, subIndex,e) => {
    e.preventDefault()
    const specificDiv = document.getElementById(`div-${index}-${subIndex}`);
    const specificData = specificDiv.innerText;
    console.log(specificData)
    dispatch(addConclusionAction(specificData))
   
   if(success){
      toast.success("Blog Article saved successfuly");
      //navigate('/conclusion')
    }
  }

  
  

  
  
  
  

 
  const handleModal = () => {
      console.log('this is the pop for creating project')
  }

  const [typingStatus, setTypingStatus] = useState([]);

  useEffect(() => {
    if (conclusions) {
      setTypingStatus(Array(conclusions.length).fill(true));
    }
  }, [conclusions]);

  const updateTypingStatus = (index, status) => {
    setTypingStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = status;
      return newStatus;
    });
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
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                <Toaster />
                

                {conclusions && conclusions.map((conclusion)=>(
                  
                  <div className="sec-1"    >
                   <div className="sec-2">
                    
                   {conclusions &&
                    conclusions.map((conclusion, index) => (
                      <div className="sec-1" contentEditable suppressContentEditableWarning={true} key={index}>
                        <div className="sec-2">
                          {conclusion.generated_conclusions.map((d, idx) => (
                            <div className="txt-sec" ref={myDiv} key={idx}>

                                <div className="right-icons-container-fa">
                                  <button className="icon-contain" onClick={() => handleCopy(`${index}-${idx}`)}>
                                    <MdOutlineContentCopy className="icon" />
                                  </button>
                                  <button className="icon-contain" >
                                    <MdSaveAlt className="icon" onClick={(e) =>      handleForm(index, idx,e)} />
                                  </button>
                                </div>
                                
                              <div id={`div-${index}-${idx}`}>
                              {typingStatus[index] && <Typewriter deleteSpeed={false} typeSpeed={10} words={[d]} cursor />}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  
                  </div> 
                 
                    </div>
                    ))}

                    <br />
                     {/* <button className="article-btn" style={{ fontSize: "14px" }}>
                      Save Article Conclusion
                          </button>*/}
                    <Link to='/conclusion' className="article-btn">Saved Work</Link>
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
