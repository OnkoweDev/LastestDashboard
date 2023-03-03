import React, { useState } from "react";
import {
  BCDIcons,
  OutputNumber,
  ProjectHeader,
  SideNav,
  TopNav,
} from "../components";
import "./styles/Instagram.css";

import instagram from "../assets/instagram.png";
import { AiOutlineAudio } from "react-icons/ai";

import { CiPause1 } from "react-icons/ci";
import { FiStopCircle } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { RiVoiceprintFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { InstagramAction } from "../actions/ai/instagramAction";
import Loader from "../components/Loader";

const Instagram = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  // state to keep track of number of output
  const [product, setProduct] = useState([])
  const [tone, setTone] = useState()

  const dispatch = useDispatch()
  const instagram = useSelector((state)=>state.instagram)
  const {loading, error,success,instagrams} = instagram

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(product,tone)
    dispatch(InstagramAction(product,tone))
  }

  // handle audio option
  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
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
                image={instagram}
                title="Instagram Captions Generator"
              />
              {/* body content */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                  <p className="product-p">Product description*</p>
                  <textarea
                    onChange={(e)=>setProduct(e.target.value)}
                    value={product}
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
                  {/*  */}
                  <p className="product-p">Tone of voice*</p>

                  <select
                    onChange={(e)=>setTone(e.target.value)}
                    value={tone}
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
                      margin: "10px 0",
                      padding: "10px",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "rgba(0, 22, 51, 0.5)",
                    }}
                  >
                    <option value="Funny">Funny</option>
                    <option value="Excited">Excited</option>
                    <option value="Professional">Professional</option>
                    <option value="Dramatic">Dramatic</option>
                    <option value="Encouraging">Encouraging</option>
                    <option value="Creative">Creative</option>
                  </select>
                  {/*  number of output*/}
                  <button className="article-btn" style={{ fontSize: "12px" }}>
                    Create Instagram Caption
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right">
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                {instagrams && instagrams.map((inst)=>(
                  <div className="sec-1">
                    <BCDIcons />
                        {inst.generated_captions}
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

export default Instagram;
