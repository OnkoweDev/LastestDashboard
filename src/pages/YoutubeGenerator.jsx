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
import { addProductAction } from "../actions/ai/productAction";
import Loader from "../components/Loader";
import { youtubeDescAction } from "../actions/ai/youtubeDescriptionAction";

const YoutubeGenerator = () => {
  // state to keep track of number of output
  const [title, setTitle] = useState([])
  const [keywords, setKeywords] = useState([])
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const dispatch = useDispatch()
  const youtubeDesc = useSelector((state) => state.youtubeDesc)
  const {loading, error, success, yous} = youtubeDesc

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(keywords)
    dispatch(youtubeDescAction(title,keywords))

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
                title="Youtube Description Generator"
              />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>

                  <p className="product-p">Title*</p>
                  <input
                  onChange={(e)=>setTitle(e.target.value)}
                  value={title}
                    type="text"
                    placeholder="Title"
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
                  <p className="product-p">Keywords*</p>
                  <textarea
                   onChange={(e)=>setKeywords(e.target.value)}
                   value={keywords}
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
                    Create Youtube Description
                  </button>
                  </form>

                </div>

                <div className="right">
                {loading && <Loader />}
                {error && <div className='bar error'>{error}</div>}
                {yous && yous.map((you)=>(
                  <div className="sec-1">
                    <BCDIcons />
                    {you.generated_descriptions}
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

export default YoutubeGenerator;
