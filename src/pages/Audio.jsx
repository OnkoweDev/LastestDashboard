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
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
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
        console.log('Audio ID:', audioId);
    
        // Make sure to set transcribedAudio.id consistently
        setTranscribedAudio({ id: audioId });
    
        setIsLoading(false);
        
    
        for (let i = 0; i < 3; i++) {
          setErrorMsg("please wait getting transcribed data............");
          setTimeout(async () => {
            try {
              await fetchAndLogTranscribedAudio();
              setErrorMsg("");
    
            } catch (error) {
              console.error('Error fetching transcribed audio in setTimeout:', error);
              setErrorMsg(error);
            }
          }, (i + 1) * 30000); // 30 seconds interval
        }

      } catch (error) {
        setErrorMessage(error);
        setTimeout(()=>{
          setErrorMessage("")
        },3000)
        console.log(error);
        setIsLoading(false);
      }
    };
    
    const fetchAndLogTranscribedAudio = async () => {
      try {
        const data = await fetchTranscribedAudio(transcribedAudio.id);
        if (data) {
          setTranscribedAudioData(data);
        }
      } catch (error) {
        console.log('Error fetching transcribed audio:', error);
        setErrorMessage('Error fetching transcribed audio please try again')
        setTimeout(()=>{setErrorMessage("")},4000)
        
        // Handle the error
      }
    };

    const fetchTranscribedAudio = async (audioId) => {
      try {
        const response = await axios.get(`https://api.olukowe.co/audio-transcription/${audioId}`);
        if (response.status !== 200) {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
        const generatedTranscription = response.data;
        console.log('Transcription Data:', generatedTranscription);
       // setTranscribedAudioData(generatedTranscription)
        return generatedTranscription;
      } catch (error) {
        console.log('Error fetching transcribed audio:', error);
        if(error){
          setErrorMsg("Error fetching transcribed audio please try again")
        }
        throw error; // Propagate the error to handle it in the calling code
      }
    };



    const renderAudioContents = () => {
      if (!transcribedAudioData || !transcribedAudioData.length) {
        return <div>No Audio content available</div>;
      }
    
      
      return transcribedAudioData.map((item, index) => (
        <div key={index} className="sec-1" ref={myDiv} contentEditable suppressContentEditableWarning>
        <div className="right-icons-container-fa">
          <button className="icon-contain" onClick={() => handleCopy(`${index}`)}>
            <MdOutlineContentCopy className="icon" />
          </button>
          <button className="icon-contain" onClick={(e) => handleForm(index, e)}>
            <MdOutlineSaveAlt className="icon" />
          </button>
          </div>
          {file.name}<br />
          {Object.entries(item.generated_transcription).map(([speaker, transcription], i) => (
            <div key={`${index}-${i}`}>
              <h1><b>{speaker}</b></h1>
              <p>
                {transcription}
              </p>
            </div>
          ))}
        </div>
      ));
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


  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData,projectId,upload)
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
    console.log("Mic is clicked");
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

                  <p>
                    {file ? file.name : ''}
                  </p>
                  <br />
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
              
                 
                     { renderAudioContents()}
                     <br />

                  {/*<Link to='/allArticle' className="article-btn">Saved Audio</Link>*/}
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
