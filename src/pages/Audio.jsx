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
import { useNavigate } from "react-router-dom";
import { blogSectionAction } from "../actions/ai/blogSectionAction";
import { blogTopicAction } from "../actions/ai/blogTopicAction";
import Loader from "../components/Loader";
import { landAction } from "../actions/ai/landAction";
import axios from "axios";
import { useRef } from "react";
import { getProjectAction } from "../actions/backend/projectAction";
import { addAudioAction } from "../actions/backend/audioAction";
import toast, { Toaster } from "react-hot-toast";


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
        const {data} = await axios.post(`https://api.olukowe.co/api/audio-transcription/
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

//   useEffect(() => {
//     handleListening()
//   }, [isListening])
//   const handleListening = () => {
//       if(isListening){
//           mic.start()
//           mic.onend = () => {
//               console.log('continue ...')
//               mic.start()
//           }
//       }
//       else{
//           mic.stop()
//           mic.onend = () => {
//               console.log('stoped')
//           }
//       }
//       mic.onstart = () => {
//           console.log('Mics is on')
//       }

//       mic.onresult = event => {
//           const transcript = Array.from(event.results).map(result => result[0]).map(result=> result.transcript).join('')
//           console.log(transcript)
//           setNote(transcript)
//           mic.onerror = event => {
//               console.log(event.error)
//           }
//       }
//   }
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
              <ProjectHeader image={blog2} title="Audio Generator" />
              {/* body */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                  <p className="product-p">Image Name*</p>
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
                <form onSubmit={handleForm}>
                {isLoading && <Loader />}
                {Loading && <Loader />}
                {errorMessage && <div className='bar error'>{errorMessage}</div>}
                <Toaster />
                {/* {console.log(lands.data)} */}
                {lands && lands?.map((blog)=>(
                  
                  <div className="sec-1" ref={myDiv} contentEditable suppressContentEditableWarning key={blog.id}>
                  <BCDIcons />
                  {file.name}<br/>
                  {blog.generated_transcription}
                  
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
                 <option value="" selected disabled hidden>Select project</option>
                 {
                  project && project.map((pro, i)=>(
                   <option key={i} value={pro.id}>{pro.name}</option>
                   ))
                  }
                 </select>
                   <br />
                   <input
                   onChange={(e)=>setUpload(e.target.value)}
                   value = {upload}
                   type="text"
                   id="book-title"
                   placeholder="Audio name"
                   style={{ 
                     resize: "none",
                     textAlign:"center",
                     borderColor: "rgba(255,255,255)", 
                     display: "block",
                     width: "100%",
                     background: "var(--primary-blue)",
                     borderRadius: "var(--border-radius-xs)",
                     border: "none",
                     outline: "none",
                     height: "15%",
                     margin: "10px 0",
                     padding: "10px",
                     resize: "none",}}
                 />
                   <br />
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                  Save Transcribe Audio
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

export default Audio;
