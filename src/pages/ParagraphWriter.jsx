import React, { useRef, useState } from "react";

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
import { useEffect } from "react";
import { getProjectAction } from "../actions/backend/projectAction";
import { addParagraphAction } from "../actions/backend/paragraphAction";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";

const ParagraphWriter = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  // state to keep track of number of output
  const [title,setTitle] = useState([])
  const [keyword,setKeyword] = useState([])
  const [outputNumber, setOutputNumber] = useState(1);
  const [tone,setTone] = useState()
  const [projectId, setProjectId] = useState()

  const myDiv = useRef(null)
  const navegate = useNavigate()

  const dispatch = useDispatch()
  const paragraphWriter = useSelector((state)=>state.paragraphWriter)
  const {loading, error, paragraphs,success} = paragraphWriter

  const saveParagraph = useSelector((state)=>state.saveParagraph)
  const {loading:paragraphLoading, error:paragraphError,success:paraSuccess} = saveParagraph

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  useEffect(() => {
      dispatch(getProjectAction())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(tone,outputNumber,keyword,title)
    dispatch(addParagraphWriter(title,keyword,outputNumber,tone))
  }

   const handleForm = (index, subIndex,e) => {
    e.preventDefault()
    const specificDiv = document.getElementById(`div-${index}-${subIndex}`);
    const specificData = specificDiv.innerText;
    dispatch(addParagraphAction(specificData))
   

    if(paraSuccess){
      toast.success("Paragraph writer saved successfuly");
      setTimeout(()=>{
        navegate('/all_paragraph')
      },5000)
    }
  }

  // handle audio option
  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
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
            <div className="inner-page-container">
              {/* header */}
              <ProjectHeader image={paragraph} title="Paragraph Writer" />
              {/* body content */}
              <div className="body-content">
                <div className="left">
                <form onSubmit={handleSubmit}>
                  <p className="product-p">Topic*</p>
                  <input type="text" required className="input" onChange={(e)=>setTitle(e.target.value)} value={title}  />
                  <p className="product-p">Keyword*</p>
                  <textarea
                    onChange={(e)=>setKeyword(e.target.value)} 
                    value={keyword}
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
                    required
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
                    <option value="" selected disabled hidden>Select Tone</option>
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
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                {paragraphError && <div className=' bar error'>{paragraphError}</div>}
                <Toaster />
                {paragraphs && paragraphs.map((para,index)=>(
                  <div className="sec-1" key={index} ref={myDiv} contentEditable suppressContentEditableWarning={true}>
                  
                  {para.generated_paragraphs?.map((d,idx)=>(
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
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                  Save Paragraph
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

export default ParagraphWriter;
