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
import { useNavigate } from "react-router-dom";
import { blogSectionAction } from "../actions/ai/blogSectionAction";
import { blogTopicAction } from "../actions/ai/blogTopicAction";
import Loader from "../components/Loader";
import { landAction } from "../actions/ai/landAction";
import axios from "axios";
import { getProjectAction } from "../actions/backend/projectAction";
import { addLandingPageAction } from "../actions/backend/landingPageAction";
import toast, { Toaster } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineContentCopy } from "react-icons/md";

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const Land = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const [product_name, setProductName] = useState([])
  const [product_description, setProductDesc] = useState([])
  const [feature_benefit_1, setFeature1] = useState([])
  const [feature_benefit_2, setFeature2] = useState([])
  const [feature_benefit_3, setFeature3] = useState([])
  const [lands, setLands] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [projectId, setProjectId] = useState()

  const myDiv = useRef(null)
  const dispatch = useDispatch()
  const navegate = useNavigate()
  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const saveLandingPage = useSelector((state)=>state.saveLandingPage)
  const {loading,error,LandingPages,success} = saveLandingPage



  useEffect(() => {
    dispatch(getProjectAction())
}, [])
  

  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData,projectId)
    dispatch(addLandingPageAction(divData,projectId))

    if(success){
      toast.success("Landing page saved successfuly");
      setTimeout(()=>{
        navegate('/all_landing')
      },5000)
    }
  }



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
        const {data} = await axios.post(`https://api.olukowe.co/landing-page/`, {product_name,product_description,feature_benefit_1,feature_benefit_2,feature_benefit_3},config)
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



  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
  };

  //Typewriter Effect
  const TypeWriterEffect = ({ text }) => {
    return <Typewriter deleteSpeed={false} words={text}  cursor />;
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
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="facebook-container inner-page-container">
              {/* header */}
              <ProjectHeader image={blog2} title="Landing Page Copy Generator" />
              {/* body */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                  <p className="product-p">Product/Service Name*</p>
                  <textarea
                    onChange={(e)=>setProductName(e.target.value)}
                    value={product_name}
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

                  <p className="product-p">Product Description*</p>
                  <textarea
                    onChange={(e)=>setProductDesc(e.target.value)}
                    value={product_description}
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

                    <p className="product-p">Feature Benefit one*</p>
                    <textarea
                    onChange={(e)=>setFeature1(e.target.value)}
                    value={feature_benefit_1}
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

                    <p className="product-p">Feature Benefit two*</p>
                    <textarea
                    onChange={(e)=>setFeature2(e.target.value)}
                    value={feature_benefit_2}
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


                    <p className="product-p">Feature Benefit three*</p>
                    <textarea
                    onChange={(e)=>setFeature3(e.target.value)}
                    value={feature_benefit_3}
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
                  
                    {isListening ?  <RiVoiceprintFill className="icon-div mic-icon" /> :  <FiStopCircle className="icon-div mic-icon" />}
                     <AiOutlineAudio
                        className="icon-div mic-icon"
                       // onClick={()=>setIsListening(prevState =>!prevState)}
                      />
                  </div>
                  {/*  number of output*/}
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Create Landing Page
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
              
                
                {isLoading && <Loader />}
                {errorMessage && <div className='bar error'>{errorMessage}</div>}
                <Toaster />
                {/* {console.log(lands.data)} */}
                   {lands && lands?.map((blog,index)=>(

                        <div className="sec-1" key={index} ref={myDiv} contentEditable suppressContentEditableWarning={true}>
                        <button className="icon-contain" onClick={() => handleCopy(`${index}`)}>
                        <MdOutlineContentCopy className="icon" />
                       </button>
                        <div id={`div-${index}`}>
                        <TypeWriterEffect text={blog.generated_pages} />
                        </div>
                        </div>
                    ))}
                    <br />
                    <form onSubmit={handleForm}>
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
                    Save Landing Page
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

export default Land;
