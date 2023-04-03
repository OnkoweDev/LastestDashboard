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
import { useNavigate } from "react-router-dom";


const EmailGenerator = () => {
  // state to keep track of number of output
  const [reciepient, setReciepient] = useState([])
  const [reciepientPos, setReciepientPos] = useState([])
  const [description, setDescription] = useState([])
  const myDiv = useRef(null)
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  const [projectId, setProjectId] = useState()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const emailGenerator = useSelector((state) => state.emailGenerator)
  const {loading, error, success, gene} = emailGenerator

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const addEmail = useSelector((state)=>state.addEmail)
  const {loading:emailLoading,error:emailError} = addEmail


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(description)
    dispatch(emailGenAction(reciepient,reciepientPos,description))

  }

  useEffect(() => {
    dispatch(getProjectAction())
  }, [])

  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData,projectId)
    dispatch(addEmailGenAction(divData,projectId))
    navigate('/email')
  }

  // handle audio option
  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
    //
  };
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
                  <div
                    className="mic"
                    style={{
                      display: "block",
                      textAlign: "right",
                      margin: "10px 0",
                    }}
                  >
                    {isAudio ? (
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
                    )}
                  </div>
                  {/*  number of output*/}
                 
                  <button className="article-btn" style={{ fontSize: "12px" }}>
                    Create Email
                  </button>
                  </form>

                </div>

                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                {loading && <Loader />}
                {error && <div className='bar error'>{error}</div>}
                <form onSubmit={handleForm}>
                  {gene && gene.map((you)=>(
                    <div className="sec-1" ref={myDiv} contentEditable>
                    
                      {you.generated_emails}
                      </div>
                      ))}
                      <br />
                      
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
                      <button className="article-btn" style={{ fontSize: "12px" }}>
                      Save Email
                    </button>
                    </form>
                  {/* <div className="sec-2">
                    <BCDIcons />
                    <div className="txt-sec"></div>
                  </div> */}
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
