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
import { Link, useNavigate } from "react-router-dom";
import { blogSectionAction } from "../actions/ai/blogSectionAction";
import { blogTopicAction } from "../actions/ai/blogTopicAction";
import Loader from "../components/Loader";
import { landAction } from "../actions/ai/landAction";
import axios from "axios";
import { useRef } from "react";
import { getProjectAction } from "../actions/backend/projectAction";
import { addAudioAction } from "../actions/backend/audioAction";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";


const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'



const Audio = () => {
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);

  const [lands, setLands] = useState([])
  const [projectId, setProjectId] = useState()
  const [upload, setUpload] = useState('')
  const myDiv = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [file, setAudio] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [transcribedAudio, setTranscribedAudio] = useState('');
  const [transcribedAudioData, setTranscribedAudioData] = useState([]);

  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const saveAudio = useSelector((state)=>state.saveAudio)
  const {loading:Loading,error:error,success} = saveAudio

   

    const handleChange = (event) => {
      setAudio(event.target.files[0]);
    };
  

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
    
        const config = {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        };
        setIsLoading(true);
        const response = await axios.post(
          'https://api.olukowe.co/audio-transcription/',
          formData,
          config
        );
    
        const audioId = response.data.id;
        //console.log('Audio ID:', audioId);
    
        // Make sure to set transcribedAudio.id consistently
        setTranscribedAudio({ id: audioId });
    
        setIsLoading(false);
        setErrorMsg("please wait getting transcribed data in 30 seconds");
    
        // Delay fetching transcribed audio by 30 seconds
        setTimeout(async () => {
          try {
            await fetchAndLogTranscribedAudio();
            setErrorMsg("");

          } catch (error) {
            console.error('Error fetching transcribed audio in setTimeout:', error);
            setErrorMsg("")
          }
        }, 30000);
      } catch (error) {
        setErrorMessage('Error processing audio. Please try again.');
        //console.log(error);
        setIsLoading(false);
      }
    };
    
  
    

    const fetchAndLogTranscribedAudio = async () => {
      try {
        const data = await fetchTranscribedAudio(transcribedAudio.id);
        ////console.log('Fetched Transcribed Audio:', data);
        setTranscribedAudioData(data.data); // Set the fetched data to the state variable
        //console.log(transcribedAudioData)
      } catch (error) {
        console.error('Error fetching transcribed audio:', error);
        throw error; // Propagate the error to handle it in the setTimeout block
      }
    };
  
    const fetchTranscribedAudio = async (audioId) => {
      try {
        const response = await axios.get(`https://api.olukowe.co/audio-transcription/${audioId}`);
        if (response.status !== 200) {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
        const generatedTranscription = response.data;
        //console.log('Transcription Data:', generatedTranscription);
       // setTranscribedAudioData(generatedTranscription)
        return generatedTranscription;
      } catch (error) {
        //console.log('Error fetching transcribed audio:', error);
        throw error; // Propagate the error to handle it in the calling code
      }
    };
    
   
  








  
  useEffect(() => {
   
  }, [])

  //Typewriter Effect
  const TypeWriterEffect = ({ text }) => {
    return <Typewriter deleteSpeed={false} words={[text]}  cursor />;
  };
//copy Effect
  const handleCopy = (id) => {
    //console.log('copying blog article');
    const divData = document.getElementById(`div-${id}`);
    if (divData) {
      navigator.clipboard.writeText(divData.innerText);
      toast.success('copied');
    }
  };


  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    //console.log(divData,projectId,upload)
    dispatch(addAudioAction(divData,projectId,upload))
   
    if(success){
      toast.success("Audio saved successfuly");
      setTimeout(()=>{
        navigate('/all_audio')
      },5000)
    }
  }
  


  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState([])


  const handleAudio = () => {
    //console.log("Mic is clicked");
    setIsAudio(true);
  };

  const [typingStatus, setTypingStatus] = useState([]);

  useEffect(() => {
    if (lands) {
      setTypingStatus(Array(lands.length).fill(true));
    }
  }, [lands]);

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
            <div className="facebook-container inner-page-container">
              {/* header */}
              <ProjectHeader image={blog2} title="Audio Generator" />
              {/* body */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                  <p className="product-p">Audio*</p>
                  <input
                    onChange={handleChange}
                    name="file"
                    id=""
                    type="file"
                    required
                  />

                  {/*  number of output*/}
                  <button className="article-btn" style={{ fontSize: "14px" }}>
                    Transcribe Audio
                  </button>
                  </form>
                </div>
                {/*  */}
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
               
                {isLoading && <Loader />}
                {Loading && <Loader />}
                {errorMessage && <div className='bar error'>{errorMessage}</div>}
                {errorMsg && <div className='bar success'>{errorMsg}</div>}
                <Toaster />
                {/* {//console.log(lands.data)} */}
                {Array.isArray(transcribedAudioData) ? transcribedAudioData.map((blog, index) => (
                  <div className="sec-1" key={index} ref={myDiv} contentEditable suppressContentEditableWarning>
                    <button className="icon-contain" onClick={() => handleCopy(`${index}`)}>
                      <MdOutlineContentCopy className="icon" />
                    </button>
                    <button className="icon-contain" onClick={(e) => handleForm(index, e)}>
                      <MdOutlineSaveAlt className="icon" />
                    </button>
                    {file.name}<br />
                    <div id={`div-${index}`}>
                      {typingStatus[index] && <Typewriter deleteSpeed={false} typeSpeed={20} words={blog.generated_transcription} cursor />}
                    </div>
                  </div>
                )):null}
                  <br />
                 {/* <form>
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
                    Save Article Rewriter
                    </button>
                    </form>
                  */}
                  <Link to='/allArticle' className="article-btn">Saved Audio</Link>
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
