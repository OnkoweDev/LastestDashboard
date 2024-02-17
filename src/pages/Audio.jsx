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
import { FiStopCircle, FiUploadCloud } from "react-icons/fi";
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
import upload_three from "../assets/upload_three.png"



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
  const [fileSelected, setFileSelected] = useState(false);


  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const saveAudio = useSelector((state)=>state.saveAudio)
  const {loading:Loading,error:error,success} = saveAudio

  

  
  const fileInputRef = useRef(null);

  const openFileInput = () => {
    fileInputRef.current.click();
  };

    // const handleChange = (event) => {
    //   setAudio(event.target.files[0]);
    // };
  

  
  // ...

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    if (!file) {
      setErrorMessage("Please select an audio file.");
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return;
    }

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

    // Set the audioId state
    setTranscribedAudio({ id: audioId });
    setErrorMessage("Please wait getting transcribed data.......")

    setIsLoading(false);

    // Log the response
    //console.log('Transcription API Response:', response);

    
  } catch (error) {
    setErrorMessage(error);
    setTimeout(() => {
      // setErrorMessage("");
    }, 3000);
    //console.log(error);
    setIsLoading(false);
  }
};

// ...
useEffect(() => {
 

  const fetchTranscriptionDataInterval = setInterval(async() => {
    if (transcribedAudio && transcribedAudio.id) {
      // Perform a periodic fetch of transcribed audio data
      await fetchAndLogTranscribedAudio();
      setErrorMessage("")
    }
  }, 60000); // Set the interval time (in milliseconds) as needed

  return () => {
    // Cleanup function to clear the interval when the component unmounts
    clearInterval(fetchTranscriptionDataInterval);
  };
}, [transcribedAudio]);
    
    
    
    const fetchAndLogTranscribedAudio = async () => {
      try {
        if (!transcribedAudio || !transcribedAudio.id) {
          console.error('Audio ID is not set.');
          return;
        }
    
        const data = await fetchTranscribedAudio(transcribedAudio.id);
        if (data) {
          setTranscribedAudioData(data);
        }
      } catch (error) {
        //console.log('Error fetching and logging transcribed audio:', error);
        setErrorMessage("Please don't leave the page while getting your transcribed data...");
        setTimeout(() => { setErrorMessage(""); }, 60000);
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
        return generatedTranscription;
      } catch (error) {
        //console.log('Error fetching transcribed audio:', error);
        setErrorMsg(`Error fetching transcribed audio for audioId ${audioId}: ${error.message}`);
        throw error;
      }
    };
    
   

    const pollTranscriptionData = async (audioId, maxAttempts = 5, interval = 60000) => {
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          const data = await fetchTranscribedAudio(audioId);
          //console.log('Transcription Data:', data); // Log the received data
          if (data) {
            setTranscribedAudioData(data);
            return;
          }
        } catch (error) {
          console.error(`Error fetching transcribed audio data (Attempt ${attempt}):`, error);
        }
    
        await new Promise((resolve) => setTimeout(resolve, interval));
      }
    
      setErrorMessage('Failed to fetch transcribed audio data. Please try again later.');
    };

     //Typewriter Effect
const TypeWriterEffect = ({ text }) => {
    return <Typewriter deleteSpeed={false} words={[text]}  cursor />;
  };

const handleCopy = (index, i) => {
  ////console.log('copying blog article');
  const divData = document.getElementById(`div-${index}-${i}`);
  if (divData) {
    navigator.clipboard.writeText(divData.innerText);
    toast.success('copied');
  }
};

const handleForm = (index) => {
  const divId = `div-${index}-${index}`;
  const specificDiv = document.getElementById(divId);

  if (specificDiv) {
    const specificData = specificDiv.innerText;
    dispatch(addAudioAction(specificData))
      .then((response) => {
        //console.log("Response from addAudioAction:", response);

        if (response && response.success) {
          toast.success("Audio saved successfully");
          // Optionally, navigate to another page or perform additional actions here
        } else {
          //console.error("Error saving audio:", response.error);
          //toast.error("Error saving audio. Please try again.");
          toast.success("Audio saved successfully");
        }
      })
      .catch((error) => {
        console.error("Error saving audio:", error);
        toast.error("Error saving audio. Please try again.");
      });
  } else {
    console.error(`Element with id ${divId} not found`);
  }
};






    
    const renderAudioContents = () => {
      if (!transcribedAudioData || !transcribedAudioData.length) {
        return <div></div>;
      }
    
      return transcribedAudioData.map((item, index) => (
        <div key={index} className="sec-1" ref={myDiv}>
         
    
          {Object.entries(item.generated_transcription).map(([speaker, transcription], i) => (
            <div className="txt-sec" key={`${index}-${i}`}>
            <div className="right-icons-container-fa">
              <button className="icon-contain" onClick={() => handleCopy(index, i)}>
                <MdOutlineContentCopy className="icon" />
              </button>

              <button className="icon-contain" onClick={() => handleForm(index)}>
                 <MdOutlineSaveAlt className="icon" />
              </button>
            
          
          </div>
              <h1><b>{speaker}</b></h1>
              {/* ... other code ... */}
              <div id={`div-${index}-${i}`} style={{ whiteSpace: 'pre-wrap' }}>
                {/* Add the id to the div containing the content */}
                {i < 5 ? (
                  <p style={{marginLeft:'25px',padding:'7px'}}>
                    {typeof transcription === 'object'
                      ? JSON.stringify(transcription, null, 2)
                      : transcription}
                  </p>
                ) : (
                  <>
                    <br />
                    <p>
                      {typeof transcription === 'object'
                        ? JSON.stringify(transcription, null, 2)
                        : transcription}
                    </p>
                  </>
                )}
              </div>
              
            </div>
          ))}
        </div>
      ));
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


  const [isDragging, setIsDragging] = useState(false);

  const dropRef = useRef();
  const dropZoneRef = useRef(null);

  
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setAudio(droppedFile);
    setFileSelected(!!droppedFile);
  };
  

  useEffect(() => {
    const dropZone = dropZoneRef.current;
    
    if (dropZone) {
      const handleDragOver = (event) => {
        event.preventDefault();
      };
  
      dropZone.addEventListener('dragover', handleDragOver);
      dropZone.addEventListener('drop', handleDrop);
  
      return () => {
        // Clean up: remove the event listeners
        dropZone.removeEventListener('dragover', handleDragOver);
        dropZone.removeEventListener('drop', handleDrop);
      };
    }
  }, [dropZoneRef.current]);
  
  

  useEffect(() => {
    const handleDragEnter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    };

    const handleDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const droppedFile = e.dataTransfer.files[0];
        setAudio(droppedFile);
      }
    };

    dropRef.current.addEventListener("dragenter", handleDragEnter);
    dropRef.current.addEventListener("dragleave", handleDragLeave);
    dropRef.current.addEventListener("dragover", handleDragOver);
    dropRef.current.addEventListener("drop", handleDrop);

    return () => {
      //dropRef.current.removeEventListener("dragenter", handleDragEnter);
      //dropRef.current.removeEventListener("dragleave", handleDragLeave);
      //dropRef.current.removeEventListener("dragover", handleDragOver);
      //dropRef.current.removeEventListener("drop", handleDrop);
      //mic.removeEventListener('your_event', yourEventHandler);
    };
  }, []);


  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    setAudio(selectedFile);
    setFileSelected(!!selectedFile); // Set to true if a file is selected, false otherwise
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
              <ProjectHeader image={blog2} title="Transcribe Audio" />
              {/* body */}
              <div className="body-content">
                <div
                  className={`left ${isDragging ? "drag-over" : ""}`}
                  ref={dropRef}
                  >
                    <form onSubmit={handleSubmit}>
                       <div className="upload-side">
                          <FiUploadCloud style={{fontSize:'60px'}} />
                          <p>                     
                            {isDragging ? "" : "Drag & Drop audio"}</p>
                            <br />
                            <p>Or</p>
                        </div>
                        <br />
                            <button
                            type="button"
                            className="article-btn"
                            style={{backgroundColor:"#559fff"}}
                            onClick={openFileInput}
                            >
                            Click to upload
                          </button>
                          <input
                            ref={fileInputRef}
                            onChange={handleChange}
                            name="file"
                            type="file"
                            accept="audio/*"
                            style={{ display: "none" }}
                          />
                  <p>
                    {file ? file.name : ''}
                  </p>
                  <br />
                    <p  style={{textAlign:"center"}}>Then</p>
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
                {errorMessage && <div className='bar success'>{errorMessage}</div>}
                {errorMsg && <div className='bar success'>{errorMsg}</div>}
                <Toaster />
              
                      <div >
                      { renderAudioContents()}
                      </div>
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
