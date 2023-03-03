import React, { useState } from "react";
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
import { emailSubjectAction } from "../actions/ai/emailSubjectAction";


const EmailSubject = () => {
  // state to keep track of number of output
  const [productName, setProductName] = useState([])
  const [emailDesc, setEmailDesc] = useState([])
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const dispatch = useDispatch()
  const emailSubject = useSelector((state) => state.emailSubject)
  const {loading, error, success, email} = emailSubject

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(emailDesc)
   dispatch(emailSubjectAction(productName,emailDesc))

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
                title="Facebook Ad Generator"
              />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>

                
                  {/* product description */}
                  <p className="product-p">Product Name*</p>
                  <textarea
                   onChange={(e)=>setProductName(e.target.value)}
                   value={productName}
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

                    <p className="product-p">Email Description*</p>
                  <textarea
                   onChange={(e)=>setEmailDesc(e.target.value)}
                   value={emailDesc}
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
                    Create Email Subject Line
                  </button>
                  </form>

                </div>

                <div className="right">
                {loading && <Loader />}
                {error && <div className='bar error'>{error}</div>}
                {email && email.map((you)=>(
                  <div className="sec-1">
                    
                    {you.generated_lines.map((d)=>(
                        
                         <div className="txt-sec">
                            <BCDIcons />
                            {d}
                            </div>
                    ))}
                  </div>
                ))}
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

export default EmailSubject;
