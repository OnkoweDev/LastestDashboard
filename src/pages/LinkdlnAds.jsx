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
import { linkdlnAdsAction } from "../actions/ai/linkdlnAdsAction";

const LindlnAds = () => {
  // state to keep track of number of output
  const [productName, setProductName] = useState([])
  const [productDesc, setProductDesc] = useState([])
  const [keywords, setKeywords] = useState([])
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const dispatch = useDispatch()
  const linkedinAds = useSelector((state) => state.linkedinAds)
  const {loading, error, success, ads} = linkedinAds

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(productName)
    dispatch(linkdlnAdsAction(productName,productDesc,keywords))

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
                title="LinkedIn Ad Description Generator"
              />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>

                  <p className="product-p">Product Name*</p>
                  <input
                    onChange={(e)=>setProductName(e.target.value)}
                    value={productName}
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
                  <p className="product-p">Description*</p>
                  <textarea
                   onChange={(e)=>setProductDesc(e.target.value)}
                   value={productDesc}
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
                    Create Linkdln Ads Description
                  </button>
                  </form>

                </div>

                <div className="right">
                {loading && <Loader />}
                {error && <div className='bar error'>{error}</div>}
                {ads && ads.map((you)=>(
                  <div className="sec-1">
                    <BCDIcons />
                    {you.generated_descriptions.map((d)=>(
                         <div className="txt-sec">{d}</div>
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

export default LindlnAds;
