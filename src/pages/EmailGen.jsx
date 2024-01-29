import React, { useEffect, useRef, useState } from "react";
import {
  BCDIcons,
  OutputNumber,
  ProjectHeader,
  SideNav,
  TopNav,
} from "../components";
import "./styles/ProductDesc.css";

import product from "../assets/product.png";

import { CiPause1 } from "react-icons/ci";
import { FiStopCircle } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { RiVoiceprintFill } from "react-icons/ri";

import { AiOutlineAudio } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { emailGenAction } from "../actions/ai/emailGenAction";
import { getProjectAction } from "../actions/backend/projectAction";
import { addEmailGenAction } from "../actions/backend/emailGeneratorAction";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";
import EmailFormatter from "../components/EmailFormater";


const EmailGenerator = () => {
  // state to keep track of number of output
  const [reciepient, setReciepient] = useState('')
  const [reciepientPos, setReciepientPos] = useState('')
  const [description, setDescription] = useState('')
  const myDiv = useRef(null)
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  const [projectId, setProjectId] = useState()
  const [formattedContent, setFormattedContent] = useState("");


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const emailGenerator = useSelector((state) => state.emailGenerator)
  const {loading, error, success, gene} = emailGenerator

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const addEmail = useSelector((state)=>state.addEmail)
  const {loading:emailLoading,error:emailError,success:emailSuccess} = addEmail


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(emailGenAction(reciepient,reciepientPos,description))

  }

  useEffect(() => {
    dispatch(getProjectAction())
  }, [])

  const handleForm = (index) => {
    //e.preventDefault()
    const specificDiv = document.getElementById(`div-${index}`);
    const specificData = specificDiv.innerText;
    dispatch(addEmailGenAction(specificData))
    

    if(emailSuccess){
      toast.success("Email saved successfuly");
      // setTimeout(()=>{
      //   navigate('/allemail')
      // },5000)
    }
  }

  
  //Typewriter Effect
  const TypeWriterEffect = ({ text }) => {
    return <Typewriter deleteSpeed={false} words={[text]}  cursor />;
  };
//copy Effect
  const handleCopy = (id) => {
    console.log('Copied');
    const divData = document.getElementById(`div-${id}`);
    if (divData) {
      navigator.clipboard.writeText(divData.innerText);
      toast.success('copied');
    }
  };

  const [typingStatus, setTypingStatus] = useState([]);

  useEffect(() => {
    if (gene) {
      setTypingStatus(Array(gene.length).fill(true));
    }
  }, [gene]);

  const updateTypingStatus = (index, status) => {
    setTypingStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = status;
      return newStatus;
    });
  };

  useEffect(() => {
    if (gene) {
      // Assuming writers is an array of strings containing your content
      const joinedContent = gene.join('\n\n'); // Joining content with double line breaks
      setFormattedContent(joinedContent);
    }
  }, [gene]);
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="instagram-ad inner-page-container">
              {/* header */}
              <ProjectHeader
                image={product}
                title="Email Generator"
              />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>

                
                  {/* product description */}
                  <p className="product-p">Reciepient Name*</p>
                  <textarea
                   onChange={(e)=>setReciepient(e.target.value)}
                   value={reciepient}
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
                      height: "30%",
                      margin: "10px 0",
                      padding: "10px",
                      resize: "none",
                    }}
                  ></textarea>

                  <p className="product-p">Receipient Position*</p>
                  <textarea
                   onChange={(e)=>setReciepientPos(e.target.value)}
                   value={reciepientPos}
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
                      height: "30%",
                      margin: "10px 0",
                      padding: "10px",
                      resize: "none",
                    }}
                  ></textarea>   

                   <p className="product-p">Description*</p>
                  <textarea
                   onChange={(e)=>setDescription(e.target.value)}
                   value={description}
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
                      height: "30%",
                      margin: "10px 0",
                      padding: "10px",
                      resize: "none",
                    }}
                  ></textarea>          
                 
                  {/*  number of output*/}
                 
                  <button className="article-btn" style={{ fontSize: "12px" }}>
                    Create Email
                  </button>
                  </form>

                </div>

                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                {loading && <Loader />}
                {error && <div className='bar error'>{error}</div>}
                <Toaster />
              
                  {gene && gene.map((you,index)=>(
                    <div className="sec-1" key={index} ref={myDiv}>

                  <div className="right-icons-container-fa">
                  <button className="icon-contain" onClick={() => handleCopy(`${index}`)}>
                  <MdOutlineContentCopy className="icon" />
                  </button>
                    <button className="icon-contain" onClick={(e) =>handleForm(index,e)}>
                      <MdOutlineSaveAlt className="icon" />
                    </button>
                  </div>
                  
                  <div className="txt-sec" id={`div-${index}`} style={{ whiteSpace: 'pre-wrap' }}>
                    
                     {formattedContent && (
                   
                      <Typewriter typeSpeed={20} words={you.generated_emails} />
                    )}
                          
                 </div>
                      
                      
                      </div>
                      ))}
                      <br />
                         {/* <form onSubmit={handleForm}>
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
                              <option value="" selected disabled hidden>Choose here</option>

                              {
                                project && project.map((pro, i)=>(
                                <option key={i} value={pro.id}>{pro.name}</option>
                                ))
                                }
                              </select>
                            <br />
                              <button className="article-btn" style={{ fontSize: "14px" }}>
                              Save Blog Writer
                            </button>
                              </form>*/}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EmailGenerator;
