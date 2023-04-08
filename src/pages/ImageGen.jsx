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
import { getProjectAction } from "../actions/backend/projectAction";
import { useRef } from "react";
import { addImageAction } from "../actions/backend/imageAction";

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const ImageGen = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const [prompt, setPrompt] = useState([])
  const [lands, setLands] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [projectId, setProjectId] = useState()
  const dispatch = useDispatch()
  const [imgPrompt, setImgPrompt] = useState([])

  const myDiv = useRef(null)
  const navigate = useNavigate()

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const saveImage = useSelector((state)=>state.saveImage)
  const {loading:loading,error:error} = saveImage

  useEffect(() => {
    dispatch(getProjectAction())
}, [])

  const handleSubmit =async(e) =>{
    e.preventDefault()
    console.log("God abeg oo")
    try {
        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        setIsLoading(true)
        const {data} = await axios.post(`http://44.203.107.96/image-generator/
        `, {prompt},config)
        const arrData = [data]
        arrData.forEach((data)=>{
            setLands([data])
        })
        console.log(lands)
        setIsLoading(false)
    } catch (error) {
        setErrorMessage("image not found")
        console.log(errorMessage)
        setIsLoading(false)

    }
  }
    
  
const handleForm = (e) => {
  e.preventDefault()
  const divData = myDiv.current.innerText
  console.log(divData,projectId)
  dispatch(addImageAction(divData,projectId,imgPrompt))
  navigate('/all_image')
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
              <ProjectHeader image={blog2} title="Image Generator" />
              {/* body */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                  <p className="product-p">Image Name*</p>
                  <textarea
                    onChange={(e)=>setPrompt(e.target.value)}
                    value={prompt}
                    name=""
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
                    {isListening ?  <RiVoiceprintFill className="icon-div mic-icon" /> :  <FiStopCircle className="icon-div mic-icon" />}
                     <AiOutlineAudio
                        className="icon-div mic-icon"
                       // onClick={()=>setIsListening(prevState =>!prevState)}
                      />
                  </div>
                  {/*  number of output*/}
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Generate Image
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right">
                <form onSubmit={handleForm}>
                {isLoading && <Loader />}
                {loading && <Loader />}
                {errorMessage && <div className='bar error'>{errorMessage}</div>}
                {error && <div className='bar error'>{error}</div>}
                {/* {console.log(lands.data)} */}
                {lands && lands?.map((blog)=>(
                  
                  <div className="sec-1" ref={myDiv}>
                  {blog.generated_image}
                  <img src={blog.generated_image} width="100%" height="20%" />
                  </div>
                  ))}
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
                  <input
                  onChange={(e)=>setImgPrompt(e.target.value)}
                  value = {imgPrompt}
                  type="text"
                  id="book-title"
                  placeholder="Title"
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
                <button className="article-btn" style={{ fontSize: "12px" }}>
                Save Image
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

export default ImageGen;
