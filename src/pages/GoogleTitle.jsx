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
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";

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

  const handleForm = (index, subIndex,e) => {
    e.preventDefault()
    const specificDiv = document.getElementById(`div-${index}-${subIndex}`);
    const specificData = specificDiv.innerText;
    console.log(specificData)
    dispatch(addGoogleTitleAction(specificData))

    if(titleSuccess){
      toast.success("google ads title saved successfuly");
      // setTimeout(()=>{
      //   navegate('/alltitle')
      // },5000)
    }

  }

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

  const [typingStatus, setTypingStatus] = useState([]);

  useEffect(() => {
    if (title) {
      setTypingStatus(Array(title.length).fill(true));
    }
  }, [title]);

  const updateTypingStatus = (index, status) => {
    setTypingStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = status;
      return newStatus;
    });
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
                    //placeholder="Product/Service"
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
             
                  
                  {/*  number of output*/}
                 
                  <button className="article-btn" style={{ fontSize: "12px" }}>
                    Create Google Ads Description
                  </button>
                  </form>

                </div>

                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
               
                {loading && <Loader />}
                {titleLoading && <Loader />}
                {error && <div className='bar error'>{error}</div>}
                <Toaster />
                {title && title.map((you,index)=>(
                  <div className="sec-1" ref={myDiv}>
                  
                  
                  {you.generated_titles.map((d,idx)=>(

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
                    {typingStatus[index] && <Typewriter deleteSpeed={false} typeSpeed={20} words={[d.replace(/"/g, '')]} cursor />}
                     </div>
                     </div>
                  
                    ))}
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
