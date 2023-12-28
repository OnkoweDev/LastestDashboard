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
import { addLanguageAction } from "../actions/backend/languageAction";
import { useRef } from "react";

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const Portugish = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const [text, setText] = useState([])
  const [lands, setLands] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const [projectId, setProjectId] = useState()
  const [saveText, setSaveText] = useState('')
  const [language,setLanguage] = useState('')
  const myDiv = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const saveLanguage = useSelector((state)=>state.saveLanguage)
  const {loading, error, success} = saveLanguage


  useEffect(() => {
      dispatch(getProjectAction())
  }, [])


  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData,projectId)
    dispatch(addLanguageAction(divData,projectId,language,saveText))
    navigate('/language')
  }




  const handleSubmit =async(e) =>{
    e.preventDefault()
    console.log(text)
    try {
        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        setIsLoading(true)
        const {data} = await axios.post(`https://api.olukowe.co/translation/portuguese`, {text},config)
        const arrData = [data]
        arrData.forEach((data)=>{
            setLands([data])
        })
        console.log(lands)
        setIsLoading(false)
    } catch (error) {
        setErrorMessage("data not found")
        console.log(errorMessage)
        setIsLoading(false)

    }
  }
    
  
  useEffect(() => {
   
  }, [])
  


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
              <ProjectHeader image={blog2} title="Portugish Language Translator" />
              {/* body */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                  <p className="product-p">Enter Text*</p>
                  <textarea
                    onChange={(e)=>setText(e.target.value)}
                    value={text}
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
                  
                  {/*  number of output*/}
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Translate to Portugish Language
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right">
                <form onSubmit={handleForm}>
                {isLoading && <Loader />}
                {errorMessage && <div className='bar error'>{errorMessage}</div>}
                {/* {console.log(lands.data)} */}
                {lands && lands?.map((blog)=>(
                  
                  <div className="sec-1" ref={myDiv} contentEditable suppressContentEditableWarning>
                  <BCDIcons />
                  {blog.generated_translation}
                  </div>
                  ))}

                  <br />
                  {/* <select
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
                  </select>*/}
                    <br />
                    <input
                        onChange={(e)=>setLanguage(e.target.value)}
                    value = {language}
                    type="text"
                    id="book-title"
                    placeholder="Language"

                    style={{
                        resize: "none", 
                        height: "30px",
                        borderRadius:"15px", 
                        border:"none",
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
                    <textarea
                      onChange={(e)=>setSaveText(e.target.value)}
                      value = {saveText}
                        name=""
                        id="book-content-field"
                        className="textarea"
                        placeholder="Text"
                    //value={note}
                    //onChange={insertBookContent}
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
                  ></textarea>
                  <br />
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    save Language
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

export default Portugish;
