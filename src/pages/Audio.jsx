import React, { useEffect, useState } from "react";
import "./styles/Facebook.css";
import blog2 from "../assets/blog-section.png";
import {
  BCDIcons,
  OutputNumber,
  ProjectHeader,
  SideNav,
  TopNav,
} from "../components";
import { AiOutlineAudio } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { FiStopCircle } from "react-icons/fi";
import { CiPause1 } from "react-icons/ci";
import { RiVoiceprintFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blogSectionAction } from "../actions/ai/blogSectionAction";
import { blogTopicAction } from "../actions/ai/blogTopicAction";
import Loader from "../components/Loader";
import { landAction } from "../actions/ai/landAction";
import axios from "axios";

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const Audio = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const [file, setAudio] = useState([])
  const [lands, setLands] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

const handleChange = (event) => {
    setAudio(event.target.files[0])

}

  const handleSubmit =async(e) =>{
    e.preventDefault()
    console.log("God abeg oo")
    console.log(file)
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers:{
                'Content-type':'multipart/form-data'
            },
        };
        setIsLoading(true)
        const {data} = await axios.post(`http://44.203.107.96/audio-transcription/
        `, formData,config)
        const arrData = [data]
        arrData.forEach((data)=>{
            setLands([data])
        })
        console.log(lands)
        setIsLoading(false)
    } catch (error) {
        setErrorMessage("")
        console.log(errorMessage)
        setIsLoading(false)

    }
  }
    
  
  useEffect(() => {
   
  }, [])
  


  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState([])

//   useEffect(() => {
//     handleListening()
//   }, [isListening])
//   const handleListening = () => {
//       if(isListening){
//           mic.start()
//           mic.onend = () => {
//               console.log('continue ...')
//               mic.start()
//           }
//       }
//       else{
//           mic.stop()
//           mic.onend = () => {
//               console.log('stoped')
//           }
//       }
//       mic.onstart = () => {
//           console.log('Mics is on')
//       }

//       mic.onresult = event => {
//           const transcript = Array.from(event.results).map(result => result[0]).map(result=> result.transcript).join('')
//           console.log(transcript)
//           setNote(transcript)
//           mic.onerror = event => {
//               console.log(event.error)
//           }
//       }
//   }
  // state to keep track of number of output
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
            <div className="facebook-container inner-page-container">
              {/* header */}
              <ProjectHeader image={blog2} title="Audio Generator" />
              {/* body */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                  <p className="product-p">Image Name*</p>
                  <input
                    onChange={handleChange}
                    name=""
                    id=""
                    type="file"
                  />

                  <div
                    className="mic"
                    style={{
                      display: "block",
                      textAlign: "right",
                      margin: "10px 0",
                    }}
                  >
                    {/* {isAudio ? (
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
                    )} */}
                    {isListening ?  <RiVoiceprintFill className="icon-div mic-icon" /> :  <FiStopCircle className="icon-div mic-icon" />}
                     <AiOutlineAudio
                        className="icon-div mic-icon"
                       // onClick={()=>setIsListening(prevState =>!prevState)}
                      />
                  </div>
                  {/*  number of output*/}
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Transcribe Audio
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                {isLoading && <Loader />}
                {errorMessage && <div className='bar error'>{errorMessage}</div>}
                {/* {console.log(lands.data)} */}
                   {lands && lands?.map((blog)=>(

                        <div className="sec-1" key={blog.id}>
                        <BCDIcons />
                        {file.name}<br/>
                         {blog.generated_transcription}
                         <img src={blog.generated_image} width="100%" height="20%" />
                        </div>
                    ))}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Audio;
