import React, { useState } from "react";

import { BCDIcons, OutputNumber, ProjectHeader, SideNav, TopNav } from "../components";

import paragraph from "../assets/paragraph.png";

import { AiOutlineAudio } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { FiStopCircle } from "react-icons/fi";
import { CiPause1 } from "react-icons/ci";
import { RiVoiceprintFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addParagraphWriter } from "../actions/ai/paragraphAction";
import Loader from "../components/Loader";

const ParagraphWriter = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  // state to keep track of number of output
  const [title,setTitle] = useState([])
  const [keyword,setKeyword] = useState([])
  const [outputNumber, setOutputNumber] = useState(1);
  const [tone,setTone] = useState()

  const dispatch = useDispatch()
  const paragraphWriter = useSelector((state)=>state.paragraphWriter)
  const {loading, error, paragraphs,success} = paragraphWriter

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(tone,outputNumber,keyword,title)
    dispatch(addParagraphWriter(title,keyword,outputNumber,tone))
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
            <div className="inner-page-container">
              {/* header */}
              <ProjectHeader image={paragraph} title="Paragraph Writer" />
              {/* body content */}
              <div className="body-content">
                <div className="left">
                <form onSubmit={handleSubmit}>
                  <p className="product-p">Topic*</p>
                  <input type="text" className="input" onChange={(e)=>setTitle(e.target.value)} value={title}  />
                  <p className="product-p">Keyword*</p>
                  <textarea
                    onChange={(e)=>setKeyword(e.target.value)} 
                    value={keyword}
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
                 
                  {/*  number of output*/}
                  <OutputNumber
                    outputNumber={outputNumber}
                    setOutputNumber={setOutputNumber}
                    onChange={(e)=>setOutputNumber(e.target.value)} 
                    value={outputNumber}
                    
                  />
                   {/* tone of voice */}
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
                        margin: "10px 0 15px",
                        padding: "5px",
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
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Create Paragraph
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right">
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                {paragraphs && paragraphs.map((para)=>(
                  <div className="sec-1">
                    <BCDIcons />
                    {para.generated_paragraphs}
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

export default ParagraphWriter;
