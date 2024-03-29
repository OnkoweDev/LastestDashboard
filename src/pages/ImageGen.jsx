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
  const [quality, setQuality] = useState([])
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

const userInfo = useSelector((state) => state.userLogin.userInfo);
  useEffect(()=>{
    if (!userInfo) {
      navigate('/')
    }
  },[])

  const handleSubmit =async(e) =>{
    e.preventDefault()
    //console.log("God abeg oo")
    try {
        const config = {
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
        };
        setIsLoading(true)
        const {data} = await axios.post(`https://api.olukowe.co/image-generator/
        `, {prompt,quality},config)
        const arrData = [data]
        arrData.forEach((data)=>{
            setLands([data])
        })
        //console.log(lands)
        setIsLoading(false)
    } catch (error) {
        setErrorMessage("image not found")
        setTimeout(()=>{
          setErrorMessage("")
        },500)
        //console.log(errorMessage)
        setIsLoading(false)

    }
  }
    
  
const handleForm = (e) => {
  e.preventDefault()
  const divData = myDiv.current.innerText
  //console.log(divData,projectId)
  dispatch(addImageAction(divData,projectId,imgPrompt))
  navigate('/all_image')
}
  


  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState([])
  const [imageLink, showImageLink] = useState(true)

  const handleDownload = () => {
   
    if (lands && lands.length > 0) {
      const generatedImageUrl = lands[0]?.generated_image;

      // Create an invisible anchor element
      const downloadLink = document.createElement("a");
      downloadLink.href = generatedImageUrl;
      downloadLink.download = "generated_image.jpg"; // Set the desired file name

      // Append the anchor element to the body and trigger the click event
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Remove the anchor element from the body
      document.body.removeChild(downloadLink);
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
                  >{note}</textarea>

                 
                  <p className="product-p">Quality*</p>

                  <select
                    onChange={(e)=>setQuality(e.target.value)}
                    value={quality}
                    name=""
                    id=""
                    required
                    className="select"
                    style={{
                      display: "block",
                      width: "100%",
                      background: "var(--primary-blue)",
                      borderRadius: "var(--border-radius-xs)",
                      border: "none",
                      outline: "none",
                      height: "10%",
                      margin: "10px 0",
                      padding: "10px",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "rgba(0, 22, 51, 0.5)",
                    }}
                  > 
                    <option value="" selected disabled hidden>Select Quality</option>
                    <option value="hd">HD</option>
                    <option value="standard">Standard</option>
                  </select>
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Generate Image
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right">
              
                {isLoading && <Loader />}
                {loading && <Loader />}
                {errorMessage && <div className='bar error'>{errorMessage}</div>}
                
               
                {lands && lands?.map((blog)=>(
                  
                  <div className="sec-1" ref={myDiv}>
                  <p>
                    {/*blog.generated_image*/}
                  </p>
                  <img src={blog.generated_image} width="100%" height="20%" />
                  </div>
                  ))}
                
                  <br />
                  <button
                  className="article-btn"
                  style={{ fontSize: "12px" }}
                  onClick={handleDownload}
                >
                  Download Image
                </button>
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

export default ImageGen;
