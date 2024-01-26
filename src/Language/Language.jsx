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
import { addLanguageAction } from "../actions/backend/languageAction";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const LanguageTrans = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const [text, setText] = useState([])
  const [from_language, setFromLanguage] = useState([])
  const [to_language, setTolanguage] = useState([])

  

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
        const {data} = await axios.post(`https://api.olukowe.co/translation/translation`, {text,from_language,to_language },config)
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
        setTimeout(()=>{
            setErrorMessage("")
        },4000)

    }
  }

  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData,projectId)
    dispatch(addLanguageAction(divData,projectId,language,saveText))
    navigate('/language')
  }
    

  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState([])

 


  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
  };

  const handleCopy = (id) => {
    console.log('copying blog article');
    const divData = document.getElementById(`div-${id}`);
    if (divData) {
      navigator.clipboard.writeText(divData.innerText);
      toast.success('copied');
    }
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
              <ProjectHeader image={blog2} title="Language Translator" />
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

                   

                    <select
                    onChange={(e)=>setFromLanguage(e.target.value)} 
                    value={from_language}
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
                        margin: "15px 0",
                        padding: "5px",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "21px",
                        color: "rgba(0, 22, 51, 0.5)",
                      }}
                  >
                      <option  value="" selected disabled hidden>From</option>
                      <option value="english">English</option>
                      <option value="french">French</option>
                      <option value="spanish">Spanish</option>
                      <option value="german">German</option>
                      <option value="turkish">Turkish</option>
                      <option value="hindi">Hindi</option>
                      <option value="arabic">Arabic</option>
                      <option value="russian">Russian</option>
                      <option value="portuguese">Portuguese</option>
                      <option value="italian">Italian</option>
                      <option value="japanese">Japanese</option>
                      <option value="chinese">Chinese</option>
                  </select>

                  <select
                    onChange={(e)=>setTolanguage(e.target.value)} 
                    value={to_language}
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
                        margin: "15px 0",
                        padding: "15px",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "21px",
                        color: "rgba(0, 22, 51, 0.5)",
                      }}
                  >
                      <option  value="" selected disabled hidden>To</option>
                      <option value="english">English</option>
                      <option value="french">French</option>
                      <option value="spanish">Spanish</option>
                      <option value="german">German</option>
                      <option value="turkish">Turkish</option>
                      <option value="hindi">Hindi</option>
                      <option value="arabic">Arabic</option>
                      <option value="russian">Russian</option>
                      <option value="portuguese">Portuguese</option>
                      <option value="italian">Italian</option>
                      <option value="japanese">Japanese</option>
                      <option value="chinese">Chinese</option>
                  </select>
 
                  
                  {/*  number of output*/}
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Translate
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right">
               
                {isLoading && <Loader />}
                {errorMessage && <div className='bar error'>{errorMessage}</div>}
                {loading && <Loader />}
                {error && <div className='bar error'>{error}</div>}
                <Toaster />
                {/* {console.log(lands.data)} */}
                {lands && lands?.map((blog,index)=>(
                  
                  <div className="sec-1" key={index} ref={myDiv}>
                  <div className="right-icons-container-fa">
                    <button className="icon-contain" onClick={() => handleCopy(`${index}`)}>
                      <MdOutlineContentCopy className="icon" />
                    </button>
                    <button className="icon-contain" onClick={(e) =>handleForm(index,e)}>
                        <MdOutlineSaveAlt className="icon" />
                    </button>
                  </div>
                  <div className="txt-sec" id={`div-${index}`}>
                     {blog.generated_translation}
                  </div>
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
                   
                  <form onSubmit={handleForm}>
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

export default LanguageTrans;
