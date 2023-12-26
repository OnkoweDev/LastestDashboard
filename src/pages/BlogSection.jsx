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
import { Link, useNavigate } from "react-router-dom";
import { blogSectionAction } from "../actions/ai/blogSectionAction";
import Loader from "../components/Loader";
import { getProjectAction } from "../actions/backend/projectAction";
import { addSectionAction } from "../actions/backend/blogSectionAction";
import toast, { Toaster } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";


const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const Facebook = () => {
  // state for audio option
  const myDiv = useRef(null)

  const [topic, setTopic] = useState([])
  const [intro, setIntro] = useState([])
  const [outputNumber, setOutputNumber] = useState(1);
  const [projectId, setProjectId] = useState();


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const blogSection = useSelector((state)=>state.blogSection)
  const {loading, success,error, blogsSec} = blogSection
  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const saveBlogSection = useSelector((state)=>state.saveBlogSection)
  const {loading:blogLoading, success:blogSuccess,error:blogError} = saveBlogSection
  
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(topic, outputNumber)
    dispatch(blogSectionAction(topic,intro,outputNumber))
  
  }

  // useEffect(() => {
   
  // }, [success])
  


  const [isListening, setIsListening] = useState(false)
  const [isListening_new, setIsListening_new] = useState(false)
  const [spokenText, setSpokenText] = useState('');
  const [spokenText_new, setSpokenText_new] = useState('');


  useEffect(() => {
    
    handleListening_two()
  }, [isListening_new,success])
  
  useEffect(() =>{
    handleListening()
  },[isListening])

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
        setIntro((prevContent) => prevContent + ' ' + transcript);
      };
  
  }

  const handleListening_two = () => {
    if(isListening_new){
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

        setSpokenText_new(transcript); // Set the spoken text

      setTopic((prevContent) => prevContent + ' ' + transcript);
    };

}
  
  
const handleForm = (index, subIndex,e) => {
  e.preventDefault()
  const specificDiv = document.getElementById(`div-${index}-${subIndex}`);
  const specificData = specificDiv.innerText;
  dispatch(addSectionAction(specificData))
    
    if(blogSuccess){
      toast.success("Blog section save successfuly");
        //navigate('/blogsection')
      
    }
  }

  useEffect(() => {
    dispatch(getProjectAction())
  }, [])

  //Typewriter Effect
  const TypeWriterEffect = ({ text }) => {
    return <Typewriter deleteSpeed={false} words={[text]}  cursor />;
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

  const [typingStatus, setTypingStatus] = useState([]);

  useEffect(() => {
    if (blogsSec) {
      setTypingStatus(Array(blogsSec.length).fill(true));
    }
  }, [blogsSec]);

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
            <div className="facebook-container inner-page-container">
              {/* header */}
              <ProjectHeader image={blog2} title="Blog Section Generator" />
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
                 

                  <p className="product-p">Intro*</p>

                     <textarea
                         onChange={(e)=>setIntro(e.target.value)}
                         value={intro}
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
                      height: "15%",
                      margin: "10px 0",
                      padding: "10px",
                      resize: "none",
                    }}
                  >
                     </textarea>
                  
                  {/*  number of output*/}
                  <OutputNumber
                    outputNumber={outputNumber}
                    setOutputNumber={setOutputNumber}
                    onChange={(e)=>setOutputNumber(e.target.value)}
                    value={outputNumber}
                  />
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Create Blog Section Generator
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
               
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                <Toaster />
                {Array.isArray(blogsSec) ? blogsSec && blogsSec.map((blog,index)=>(
                  
                  <div className="sec-1" ref={myDiv}>
                
                  {blog.generated_sections.map((d,idx)=>(
                    <div  className="txt-sec" key={idx}>
                        <div className="right-icons-container-fa">
                          <button className="icon-contain" onClick={() => handleCopy(`${index}-${idx}`)}>
                          <MdOutlineContentCopy className="icon" />
                          </button>

                          <button className="icon-contain" onClick={(e) =>handleForm(index,idx,e)}>
                           <MdOutlineSaveAlt className="icon" />
                          </button>
                        </div>
                            <div id={`div-${index}-${idx}`}>
                            {typingStatus[index] && <Typewriter deleteSpeed={false} typeSpeed={20} words={[d]} cursor />}
                            </div>
                         </div>
                  ))}
                  </div>
                  )):null}
                  
                  <br />
                  <br />
                  {/* <p className="product-p">Select Project*</p>
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
                        </button>*/}
                       
                        <Link to='/blogsection' className="article-btn">Saved Work</Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Facebook;
