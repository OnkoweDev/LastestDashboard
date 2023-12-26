import React, { useEffect, useRef, useState } from "react";
import "./styles/LinkedInShort.css";
import blog3 from "../assets/blog-writer.png";
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
import { addArticleWriter } from "../actions/ai/blogArticleAction";
import Loader from "../components/Loader";
import { getProjectAction } from "../actions/backend/projectAction";
import { blogWriterAddAction } from "../actions/backend/blogWriterAction";
import toast, { Toaster } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";
import axios from "axios";


const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const LinkedInShort = () => {
  // state for audio option
  const [title,setTitle] = useState([])
  const [intro,setIntro] = useState([])
  const [sections,setSections] = useState([])
  const [projectId,setProjectId] = useState()

  const myDiv = useRef(null);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const blogArticle = useSelector((state)=>state.blogArticle)
  const {loading, error, success, writers} = blogArticle
  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const addBlogWriter = useSelector((state)=>state.addBlogWriter)
  const {loading:blogLoading, error:blogError, success:blogSuccess} = addBlogWriter


  // const formatContentWithGPT3 = async () => {
  //   try {
  //     const apiKey = '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';
  //     const gpt3Endpoint = 'https://api.openai.com/v1/engines/davinci/completions';

  //     // Prepare your data for GPT-3 formatting (title, keyword, etc.)
  //     const data = {
  //       prompt: `Your prompt here. ${title} ${intro} ${sections} ...`, // Include relevant data here
  //       max_tokens: 100, // Adjust token limit as needed
  //       temperature: 0.7 // Adjust temperature for diversity in generated responses
  //       // Add other parameters as needed
  //     };

  //     const headers = {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${apiKey}`
  //     };

  //     const response = await axios.post(gpt3Endpoint, data, { headers });

  //     if (response.status === 200) {
  //       const formattedText = response.data.choices[0].text.trim();
  //       // Use the formatted text in your UI or processing
  //       console.log('Formatted Text:', formattedText);
  //       // Apply the formatted text to your UI, update state, etc.
  //       // Example: setFormattedText(formattedText);
  //     } else {
  //       console.error('Error:', response.status, response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error.data.error);
  //   }
  // };

  const handleArticle = async(e) => {
    e.preventDefault()
    console.log("loading data")
    //await formatContentWithGPT3();
    dispatch(addArticleWriter(title,intro,sections))
  }

  useEffect(() => {
    dispatch(getProjectAction())
  }, [])

useEffect(() => {
}, [success])

  const [isAudio, setIsAudio] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null)

  //STORE DATA
  const [article, setArticle] = useState("")

  useEffect(() => {
    handleListening()
  }, [isListening])
  const handleListening = () => {
      if(isListening){
          mic.start()
          mic.onend = () => {
              console.log('continue ...')
              mic.start()
          }
      }
      else{
          mic.stop()
          mic.onend = () => {
              console.log('stoped')
          }
      }
      mic.onstart = () => {
          console.log('Mics is on')
      }

      mic.onresult = event => {
          const transcript = Array.from(event.results).map(result => result[0]).map(result=> result.transcript).join('')
          console.log(transcript)
          setNote(transcript)
          mic.onerror = event => {
              console.log(event.error)
          }
      }
  }

  const handleForm = (index) => {
    //e.preventDefault()
    const specificDiv = document.getElementById(`div-${index}`);
    const specificData = specificDiv.innerText;
    console.log(specificData)
    dispatch(blogWriterAddAction(specificData))

    if(blogSuccess){
      toast.success("Blog Writer saved successfuly");
      //navigate('/allBlogs')
      // setTimeout(()=>{
      // },5000)
    }
  }

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
 





  // state to keep track of number of output
  const [outputNumber, setOutputNumber] = useState(1);
  // handle audio option
  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
  };

  const [typingStatus, setTypingStatus] = useState([]);

  useEffect(() => {
    if (writers) {
      setTypingStatus(Array(writers.length).fill(true));
    }
  }, [writers]);

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
            <div className="google-ad inner-page-container">
              {/* header */}
              <ProjectHeader image={blog3} title="Blog Article writer" />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleArticle}>
                       
                        <p className="product-p">Title*</p>
                        <input required type="text" className="input"  onChange={(e)=>setTitle(e.target.value)} value={title}/>
                        <p className="product-p">Intro*</p>
                        <textarea
                            onChange={(e)=>setIntro(e.target.value)}
                            value={intro}
                            name=""
                            id=""
                            style={{
                            display: "block",
                            width: "100%",
                            background: "var(--primary-blue)",
                            borderRadius: "var(--border-radius-xs)",
                            border: "none",
                            outline: "none",
                            height: "20%",
                            margin: "10px 0",
                            padding: "10px",
                            resize: "none",
                            }}
                        >{note}</textarea>

                            <p className="product-p">Sections</p>
                            <textarea
                            onChange={(e)=>setSections(e.target.value)} 
                            value={sections}
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
                            height: "20%",
                            margin: "10px 0",
                            padding: "10px",
                            resize: "none",
                            }}
                        >{note}</textarea>

                      
                        <button className="article-btn" style={{ fontSize: "14px" }}>
                            Create Blog Article writer
                        </button>
                  </form>
                </div>
                {/*  */}
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                {loading && <Loader />}
                {error && <div className='bar error'>{error}</div>}
                <Toaster />
                
                  {writers && writers.map((writer,index)=>(
                    <div className="sec-1" key={index} ref={myDiv} suppressContentEditableWarning={true} contentEditable>

                    <div className="right-icons-container-fa">
                    <button className="icon-contain" onClick={() => handleCopy(`${index}`)}>
                    <MdOutlineContentCopy className="icon" />
                    </button>
                      <button className="icon-contain" onClick={(e) =>handleForm(index,e)}>
                        <MdOutlineSaveAlt className="icon" />
                      </button>
                    </div>
                  <div id={`div-${index}`}>
                  
                   {typingStatus[index] && <Typewriter deleteSpeed={false} typeSpeed={20} words={[writer.generated_contents]} cursor />}

                  </div>
                    
                    </div>
                    ))}
                    <br/>
                   {/* <form onSubmit={handleForm}>
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
                     <option value="" selected disabled hidden>Choose here</option>

                     {
                      project && project.map((pro, i)=>(
                       <option key={i} value={pro.id}>{pro.name}</option>
                       ))
                      }
                     </select>
                  <br />
                    <button className="article-btn" style={{ fontSize: "14px" }}>
                    Save Blog Writer
                  </button>
                    </form>*/}
                    <Link to='/allBlogs' className="article-btn">Saved Work</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LinkedInShort;
