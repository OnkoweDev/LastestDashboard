import React, { useState,useEffect } from "react";
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

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'


const TTR = () => {

    
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  const [arrayData, setArrayData] = useState([]);
  

  const [title, setTitle] = useState([])
  const [outputNumber, setOutputNumber] = useState(1);

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
  const {loading,error,success} = addBlogIntro

  const getBlogIntro = useSelector((state)=>state.getBlogIntro)
  const {loading:blogIntroLoading, error:blogIntroError,blogs,success:blogSuccess} = getBlogIntro
  const userLogin = useSelector((state)=>state.userLogin)

  const {userInfo} = userLogin

  const data = []
  blogs && blogs.forEach(function(blog){
        if(Array.isArray(blog)){
            blog.forEach(function(intro){
                console.log(intro)
                data.push(intro)
               // console.log(data)
            })
        }
     })

     
  

    useEffect(() => {
        dispatch(getBlogIntroAction())
        if(!userInfo){
            navigate('/')
        }    
    }, [success])
    
    
  const handleIntro = (e) =>{
        e.preventDefault()
        console.log(title,outputNumber)
        dispatch(addBlog(title,outputNumber))
        navigate('/test')
        
  }

  

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
                    {isListening ?  <RiVoiceprintFill /> :  <FiStopCircle />}
                    <AiOutlineAudio onClick={()=>setIsListening(prevState =>!prevState)} />
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
                <div className="right">
                
                  <div className="sec-1">
                    <BCDIcons />
                   
                        {data && data.slice(0,1).map((d)=>(

                         <div  className="txt-sec">
                            {d.generated_intros}
                         </div>
                        ))}
                  </div>
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
