import React, { useEffect, useState } from "react";
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

const LinkedIn = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const [productName, setProductName] = useState([])
  const [productDescription, setProductDescription] = useState([])
  const [keyword, setKeyword] = useState([])

  const dispatch = useDispatch()
  const linkedin = useSelector((state)=>state.linkedin)
  const {loading, error, success, links} = linkedin

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('loading data')
    dispatch(addLinkedin(productName,productDescription,keyword))
  }
  // state to keep track of number of output
  // handle audio option
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
                  <p className="product-p">Product name*</p>
                  <input type="text" className="input" onChange={(e)=>setProductName(e.target.value)} value={productName} />
                  <p className="product-p">Product/ServiceDescription*</p>
                  <textarea
                   onChange={(e)=>setProductDescription(e.target.value)} value={productDescription}
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
                <div className="right">
                    {loading && <Loader />}
                    {error && <div className=' bar error'>{error}</div>}
                    { links && links.map((link)=>(
                        <div className="sec-1">
                            <BCDIcons />
                            {link.generated_posts}
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

export default LinkedIn;
