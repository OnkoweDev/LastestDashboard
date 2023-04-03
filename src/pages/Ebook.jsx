import React, { useState,useEffect, useRef } from "react";
import { ProjectHeader, SideNav, TopNav } from "../components";
import "./styles/Ebook.css";

import ebook from "../assets/ebookIcon.png";
import { BsThreeDots } from "react-icons/bs";

//
import { AiOutlineAudio } from "react-icons/ai";

//
import { CiPause1 } from "react-icons/ci";
import { FiStopCircle } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { RiVoiceprintFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { ebookAction } from "../actions/ai/ebookAction";
import Loader from "../components/Loader";
import axios from "axios";
import { getProjectAction } from "../actions/backend/projectAction";
import { addEbookAction } from "../actions/backend/ebookAction";
import { useNavigate } from "react-router-dom";

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'


const Ebook = () => {
    const [title, setTitle] = useState([])
    const [description, setDescription] = useState([])
    const [generated, setGenerated] = useState([])
    const [loading, setIsLoading] = useState(false)
    const [error,setError] = useState()
    const myDiv = useRef(null)
    const [projectId, setProjectId] = useState()
    const [saveTitle, setSaveTitle] = useState("")
    const [saveDescription, setSaveDescription] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const  ebook = useSelector((state)=>state.ebook)
    // const {loading, error, ebooks } = ebook

    // const handleSubmit = async(e) => {
    //     e.preventDefault()
    //     dispatch(ebookAction(title,description))
    // }
    const getProject = useSelector((state)=>state.getProject)
    const {loading:projectLoading,error:projectError, project} = getProject
    const saveEbook = useSelector((state)=>state.saveEbook)
    const {loading:ebookLoading, error:ebookError} = saveEbook
  
   useEffect(() => {
      dispatch(getProjectAction())
    }, [])

    const handleSubmit =async(e) =>{
      e.preventDefault()
      try {
          const config = {
              headers:{
                  'Content-type':'application/x-www-form-urlencoded'
              },
          };
          setIsLoading(true)
          const {data} = await axios.post(`http://44.203.107.96/ebook/`, {title,description},config)
          const arrData = [data]
          arrData.forEach((data)=>{
            setGenerated([data])
          })
          console.log(generated)
          setIsLoading(false)
      } catch (error) {
         //setError("data not found")
          console.log(error)
          setIsLoading(false)
      }
    }

    const handleForm = (e) => {
      e.preventDefault()
      const divData = myDiv.current.innerText
      console.log(divData,projectId,saveTitle,saveDescription)
      dispatch(addEbookAction(divData,projectId,saveTitle,saveDescription))
      navigate('/all_ebook')

    }
    
    


    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)

    
   
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
  

  // choice of writind style i.e audio / writing
  const [isVoice, setIsVoice] = useState(false);

  // insert book title
  const insertBookTitle = () => {
    const bookTitle = document.getElementById("book-title").value;
    document.getElementById("book-title-heading").textContent = bookTitle;
  };

  // insert book content
  const insertBookContent = () => {
    const bookContent = document.getElementById("book-content-field").value;
    document.getElementById("book-content").textContent = bookContent;
  };
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="ebook-container inner-page-container">
              {/* header */}
              <ProjectHeader image={ebook} title="Ebook Writing" />
              {/* ebook body content */}
              <div className="body-content">
                <form onSubmit={handleSubmit}>
                <div className="left">
                  <input
                    onChange={(e)=>setTitle(e.target.value)}
                    value = {title}
                    type="text"
                    id="book-title"
                    placeholder="Book Title"
                  />
                  <textarea
                  onChange={(e)=>setDescription(e.target.value)}
                  value = {description}
                    name=""
                    id="book-content-field"
                    className="textarea"
                    placeholder="Content"
                    //value={note}
                    //onChange={insertBookContent}
                    style={{ resize: "none" }}
                  ></textarea>
                  </div>
                  <br/>
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Create Ebook
                  </button>
                  </form>
               
                
               
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                {ebookLoading && <Loader />}
                {ebookError && <div>{ebookError}</div>}
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>} 
                <form onSubmit={handleForm}>
                
                <h2
                id="book-title-heading"
                style={{
                  margin: "20px 0",
                }}
                ></h2>
                { Array.isArray(generated) ? generated && generated.map((boo)=>(
                  <p ref={myDiv} contentEditable suppressContentEditableWarning>
                  <h2>{boo.title}</h2>
                  {boo.generated_ebook}
                  </p>
                  )):null}
                  <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                    outline: "none",
                    position: "absolute",
                    top: "4%",
                    right: "5%",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                  id="dot-btn"
                  >
                  <ul className="drop-btn">
                  <BsThreeDots
                  className="dot-icon"
                  style={{ fontSize: "16px", fontWeight: "900" }}
                  />
                  <div className="drop-content">
                  <button className="drop_down">Download</button>
                  <button className="drop_down">Share</button>
                  </div>
                  </ul>
                  </button>
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
                    onChange={(e)=>setSaveTitle(e.target.value)}
                    value = {saveTitle}
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
                    <textarea
                      onChange={(e)=>setSaveDescription(e.target.value)}
                      value = {saveDescription}
                        name=""
                        id="book-content-field"
                        className="textarea"
                        placeholder="Description"
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
                    save Ebook
                  </button>
                  </form>
                  
                  
                  </div>
               
              </div>
          
            </div>
            
            
             { isListening ?  <RiVoiceprintFill /> : <FiStopCircle />}
                    <AiOutlineAudio
                        className="icon-div mic-icon"
                        onClick={() => setIsListening(prevState => !prevState)}
                      />
          </div>
          
        </div>
      </main>
    </>
  );
};

export default Ebook;
