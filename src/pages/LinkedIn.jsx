import React, { useEffect, useRef, useState } from "react";
import { SideNav, TopNav } from "../components";
import "./styles/LinkedIn.css";

import { BCDIcons, OutputNumber, ProjectHeader } from "../components";

import linkedin from "../assets/linkedin.png";

import { AiOutlineAudio } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { FiStopCircle } from "react-icons/fi";
import { CiPause1 } from "react-icons/ci";
import { RiVoiceprintFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addLinkedin } from "../actions/ai/SocialMediaAction";
import Loader from "../components/Loader";
import { getProjectAction } from "../actions/backend/projectAction";
import { addLinkAction } from "../actions/backend/linkPostAction";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const LinkedIn = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const [productName, setProductName] = useState([])
  const [productDescription, setProductDescription] = useState([])
  const [keyword, setKeyword] = useState([])
  const [projectId, setProjectId] = useState()
  const myDiv = useRef(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const linkedin = useSelector((state)=>state.linkedin)
  const {loading, error, success, links} = linkedin

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject
  
  const saveLinkPost = useSelector((state)=>state.saveLinkPost)
  const {loading:linkLoading, error:linkError,success:linkSuccess} = saveLinkPost

  useEffect(() => {
      dispatch(getProjectAction())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('loading data')
    dispatch(addLinkedin(productName,productDescription,keyword))
  }
 
  const handleFrom = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData)
    dispatch(addLinkAction(divData,projectId))
   
    if(linkSuccess){
      toast.success("Shot Linkdin post saved successfuly");
      setTimeout(()=>{
        navigate('/all_link_post')
      },5000)
    }
  }

  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
  };

  useEffect(() => {
    
  
    
  }, [success])
  
  
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
        <SideNav />
          <div className="content">
            <div className="inner-page-container">
              {/* header */}
              <ProjectHeader image={linkedin} title="Short LinkedIn Post" />
              {/* body content */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                  <p className="product-p">Post Title*</p>
                  <input type="text" required className="input" onChange={(e)=>setProductName(e.target.value)} value={productName} />
                  <p className="product-p">Post Description*</p>
                  <textarea
                   onChange={(e)=>setProductDescription(e.target.value)} value={productDescription}
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
                  {/* tone of voice */}
                  <p className="product-p">Keyword*</p>

                  <input type="text" className="input"  onChange={(e)=>setKeyword(e.target.value)} value={keyword} />

                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Create Short Post
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                <form onSubmit={handleFrom}>
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                {linkError && <div className=' bar error'>{linkError}</div>}
                <Toaster />
                { links && links.map((link)=>(
                  <div className="sec-1" ref={myDiv} contentEditable suppressContentEditableWarning>
                  <BCDIcons />
                  {link.generated_posts.map((d)=>(
                    <p>{d}</p>
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
                   
                    <br/>
                    <button className="article-btn" style={{ fontSize: "12px" }}>
                    Save Linkdeln Post
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

export default LinkedIn;
