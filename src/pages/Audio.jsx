import React, { useEffect, useState } from "react";
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
import { blogTopicAction } from "../actions/ai/blogTopicAction";
import Loader from "../components/Loader";
import { landAction } from "../actions/ai/landAction";
import axios from "axios";
import { useRef } from "react";
import { getProjectAction } from "../actions/backend/projectAction";
import { addAudioAction } from "../actions/backend/audioAction";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";


const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const Audio = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const [file, setAudio] = useState([])
  const [lands, setLands] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [projectId, setProjectId] = useState()
  const [upload, setUpload] = useState('')
  const myDiv = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const saveAudio = useSelector((state)=>state.saveAudio)
  const {loading:Loading,error:error,success} = saveAudio

    useEffect(() => {
      dispatch(getProjectAction())
    }, [])

const handleChange = (event) => {
    setAudio(event.target.files[0])
}


  const handleSubmit =async(e) =>{
    e.preventDefault()
    //console.log("God abeg oo")
    console.log(file)
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers:{
                'Content-type':'multipart/form-data'
            },
        };
        setIsLoading(true)
        const {data} = await axios.post(`https://api.olukowe.co/audio-transcription/
        `, formData,config)
        const arrData = [data]
        arrData.forEach((data)=>{
            setLands([data])
        })
        console.log(lands)
        setIsLoading(false)
    } catch (error) {
        setErrorMessage("")
        console.log(errorMessage)
        setIsLoading(false)

    }
  }
    
  
  useEffect(() => {
   
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


  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData,projectId,upload)
    dispatch(addAudioAction(divData,projectId,upload))
   
    if(success){
      toast.success("Audio saved successfuly");
      setTimeout(()=>{
        navigate('/all_audio')
      },5000)
    }
  }
  


  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState([])


  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
  };

  const [typingStatus, setTypingStatus] = useState([]);

  useEffect(() => {
    if (lands) {
      setTypingStatus(Array(lands.length).fill(true));
    }
  }, [lands]);

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
              <ProjectHeader image={blog2} title="Audio Generator" />
              {/* body */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                  <p className="product-p">Audio*</p>
                  <input
                    onChange={handleChange}
                    name=""
                    id=""
                    type="file"
                    required
                  />

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
                       // onClick={()=>setIsListening(prevState =>!prevState)}
                      />
                  </div>
                  {/*  number of output*/}
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Transcribe Audio
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
               
                {isLoading && <Loader />}
                {Loading && <Loader />}
                {errorMessage && <div className='bar error'>{errorMessage}</div>}
                <Toaster />
                {/* {console.log(lands.data)} */}
                {lands && lands?.map((blog,index)=>(
                  
                  <div className="sec-1" key={index} ref={myDiv} contentEditable suppressContentEditableWarning >
                  <button className="icon-contain" onClick={() => handleCopy(`${index}`)}>
                    <MdOutlineContentCopy className="icon" />
                  </button>
                  <button className="icon-contain" onClick={(e) =>handleForm(index,e)}>
                    <MdOutlineSaveAlt className="icon" />
                </button>
                  {file.name}<br/>
                  <div id={`div-${index}`}>
                   {typingStatus[index] && <Typewriter deleteSpeed={false} typeSpeed={20} words={[blog.generated_transcription]} cursor />}
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
                  <Link to='/allArticle' className="article-btn">Saved Audio</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Audio;
