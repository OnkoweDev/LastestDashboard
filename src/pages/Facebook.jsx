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
import { facebookAction } from "../actions/ai/facebookAction";
import { getProjectAction } from "../actions/backend/projectAction";
import { addFacebookAction } from "../actions/backend/facebookAction";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";

const Facebook = () => {
  // state to keep track of number of output
  const [productName, setProductName] = useState([])
  const [productDesc, setProductDesc] = useState([])
  const [occasion, setOccasion] = useState([])
  const [promotion, setPromotion] = useState([])
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  const [projectId, setProjectId] = useState()

  const myDiv = useRef(null)
  const navegate = useNavigate()

  const dispatch = useDispatch()
  const facebook = useSelector((state) => state.facebook)
  const {loading, error, success, face} = facebook

  const saveFacebook = useSelector((state)=>state.saveFacebook)
  const {loading:faceLoading, error:faceError, success:faceSuccess, facebooks} = saveFacebook

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(productDesc)
   dispatch(facebookAction(productName,productDesc,occasion,promotion))

  }

  const handleForm = (index, subIndex,e) => {
    e.preventDefault()
    const specificDiv = document.getElementById(`div-${index}-${subIndex}`);
    const specificData = specificDiv.innerText;
    console.log(specificData)
    dispatch(addFacebookAction(specificData))
    

    if(faceSuccess){
      toast.success("Facebook ads saved successfuly");
      // setTimeout(()=>{
      //   navegate('/allfacebookads')
      // },5000)
    }
  }

  useEffect(() => {
    dispatch(getProjectAction())
}, [])

  // handle audio option
  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
    //
  };

   //Typewriter Effect
   const TypeWriterEffect = ({ text }) => {
    return <Typewriter deleteSpeed={false} words={[text]}  cursor />;
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

                  <p className="product-p">Product/Service Description*</p>
                  <input
                    onChange={(e)=>setProductName(e.target.value)}
                    value={productName}
                    type="text"
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

                    <p className="product-p">Occasion*</p>
                  <textarea
                   onChange={(e)=>setOccasion(e.target.value)}
                   value={occasion}
                    name=""
                    id=""
                    required
                    placeholder="e.g Christmas Sales, Flash Sales or N/A "
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

                    <p className="product-p">Promotion*</p>
                  <textarea
                   onChange={(e)=>setPromotion(e.target.value)}
                   value={promotion}
                    name=""
                    id=""
                    required
                    placeholder="e.g 20% Discount, 10% Discount or N/A"
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
                    Create Facebook Ads Generator
                  </button>
                  </form>

                </div>

                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                
                {loading && <Loader />}
                {error && <div className='bar error'>{error}</div>}
                {faceLoading && <Loader />}
                <Toaster />
                {face && face.map((you,index)=>(
                  <div className="sec-1" ref={myDiv} contentEditable suppressContentEditableWarning={true}>
                  
                    {you.generated_ads.map((d,idx)=>(
                      <div className="txt-sec" key={idx}>
                      <div className="right-icons-container-fa">
                      <button className="icon-contain" onClick={() => handleCopy(`${index}-${idx}`)}>
                       <MdOutlineContentCopy className="icon" />
                       </button>

                        <button className="icon-contain" onClick={(e) => handleForm(index, idx, e)}>
                        <MdOutlineSaveAlt className="icon" />
                      </button>
                    </div>
                      <div id={`div-${index}-${idx}`}>
                      <TypeWriterEffect text={d} />
                    </div>        
                      </div>

                    ))}
                  </div>
                ))}
                <br />
                <form>
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
                   Save Facebook Ads
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

export default Facebook;
