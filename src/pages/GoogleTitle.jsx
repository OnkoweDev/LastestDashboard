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
import { googleTitleAction } from "../actions/ai/googleTitleAction";
import { getProjectAction } from "../actions/backend/projectAction";
import { addGoogleTitleAction } from "../actions/backend/googleTitleAction";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const GoogleTitle = () => {
  // state to keep track of number of output
  const [companyName, setCompanyName] = useState([])
  const [productDesc, setProductDesc] = useState([])
  const [keywords, setKeywords] = useState([])
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  const myDiv = useRef(null)
  const [projectId, setProjectId] = useState()

  const navegate = useNavigate()


  const dispatch = useDispatch()
  const googleTitle = useSelector((state) => state.googleTitle)
  const {loading, error, success, title} = googleTitle

  const saveTitle = useSelector((state) => state.saveTitle)
  const {loading:titleLoading, error:titleError, success:titleSuccess} = saveTitle

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  useEffect(() => {
    dispatch(getProjectAction())
}, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(productDesc)
   dispatch(googleTitleAction(companyName,productDesc,keywords))

  }

  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData)
    dispatch(addGoogleTitleAction(divData,projectId))
    if(titleSuccess){
      toast.success("google ads title saved successfuly");
      setTimeout(()=>{
        navegate('/alltitle')
      },5000)
    }

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
                title="Google Ads Title Generator"
              />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>

                  <p className="product-p">Product/Service*</p>
                  <input
                    onChange={(e)=>setCompanyName(e.target.value)}
                    value={companyName}
                    type="text"
                    placeholder="Product/Service"
                    required
                    style={{
                      display: "block",
                      background: "var(--primary-blue)",
                      borderRadius: "var(--border-radius-xs)",
                      border: "none",
                      outline: "none",
                      height: "10%",
                      margin: "10px 0",
                      padding: "10px",
                    }}
                  />
                  {/* product description */}
                  <p className="product-p">Product Description*</p>
                  <textarea
                   onChange={(e)=>setProductDesc(e.target.value)}
                   value={productDesc}
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

                    <p className="product-p">Keywords*</p>
                  <textarea
                   onChange={(e)=>setKeywords(e.target.value)}
                   value={keywords}
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
                    Create Google Ads Description
                  </button>
                  </form>

                </div>

                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                <form onSubmit={handleForm}>
                {loading && <Loader />}
                {titleLoading && <Loader />}
                {error && <div className='bar error'>{error}</div>}
                <Toaster />
                {title && title.map((you)=>(
                  <div className="sec-1" contentEditable suppressContentEditableWarning={true} ref={myDiv}>
                  
                  <BCDIcons />
                  {you.generated_titles.map((d)=>(
                    <p>
                      {d}
                    </p>
                  
                    ))}
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
                    Save Google Title
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

export default GoogleTitle;
