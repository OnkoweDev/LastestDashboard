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
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";

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
  const handleForm = (index, subIndex,e) => {
    e.preventDefault()
    const specificDiv = document.getElementById(`div-${index}-${subIndex}`);
    const specificData = specificDiv.innerText;
    dispatch(addLinkAction(specificData))
   
    if(linkSuccess){
      toast.success("Shot Linkdin post saved successfuly");
      // setTimeout(()=>{
      //   navigate('/all_link_post')
      // },5000)
    }
  }

  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
  };

  useEffect(() => {
    
  
    
  }, [success])
  
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
    if (links) {
      setTypingStatus(Array(links.length).fill(true));
    }
  }, [links]);

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
                
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                {linkError && <div className=' bar error'>{linkError}</div>}
                <Toaster />
                { links && links.map((link,index)=>(
                  <div className="sec-1" key={index} ref={myDiv} contentEditable suppressContentEditableWarning>
                 
                  {link.generated_posts.map((d,idx)=>(
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
                    {typingStatus[index] && <Typewriter deleteSpeed={false} typeSpeed={20} words={[d]} cursor />}
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
                              <Link to='/all_link_post' className="article-btn">Saved Work</Link>
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
