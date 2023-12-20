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
import { googleadsAction } from "../actions/ai/googleAdsAction";
import { getProjectAction } from "../actions/backend/projectAction";
import { addGoogleAdsAction } from "../actions/backend/googleAdsAction";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const GoogleAds = () => {
  // state to keep track of number of output
  const [companyName, setCompanyName] = useState([])
  const [productDesc, setProductDesc] = useState([])
  const myDiv = useRef(null)
  const navegate = useNavigate()
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  const [projectId, setProjectId] = useState()


  const dispatch = useDispatch()
  const googleAds = useSelector((state) => state.googleAds)
  const {loading, error, success, google} = googleAds

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const saveGoogleAds = useSelector((state)=>state.saveGoogleAds)
  const {loading:googleLoading,error:googleError,success:adsSuccess} = saveGoogleAds;

  useEffect(() => {
    dispatch(getProjectAction())
}, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(productDesc)
   dispatch(googleadsAction(companyName,productDesc))

  }

  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData)
    dispatch(addGoogleAdsAction(divData,projectId))
    
    if(adsSuccess){
      toast.success("google ads saved successfuly");
      setTimeout(()=>{
        navegate('/allgoogleads')
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
                title="Google Ad Description Generator"
              />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>

                  <p className="product-p">Product/Service Name*</p>
                  <input
                    onChange={(e)=>setCompanyName(e.target.value)}
                    value={companyName}
                    type="text"
                    placeholder="Product/Service Name"
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
                  {error && <div className='bar error'>{error}</div>}
                  <Toaster />
                  {google && google.map((you)=>(
                    <div className="sec-1" ref={myDiv} contentEditable suppressContentEditableWarning={true}> 
                    <BCDIcons />
                    {you.generated_descriptions?.map((d)=>(
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
                      Save Google Ads Description
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

export default GoogleAds;
