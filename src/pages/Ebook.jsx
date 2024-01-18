import React, { useState, useEffect, useRef } from "react";
import { ProjectHeader, SideNav, TopNav } from "../components";
import "./styles/Ebook.css";

import ebook from "../assets/ebookIcon.png";
import { BsThreeDots } from "react-icons/bs";

//
import { AiOutlineAudio } from "react-icons/ai";

//
import { CiPause1 } from "react-icons/ci";
import { FiStopCircle } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { RiVoiceprintFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { ebookAction } from "../actions/ai/ebookAction";
import Loader from "../components/Loader";
import axios from "axios";
import { getProjectAction } from "../actions/backend/projectAction";
import { addEbookAction } from "../actions/backend/ebookAction";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { addEbook } from "../actions/ebookaction";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import {  Document, Packer, Paragraph, TextRun} from "docx";



const SpeechRecognision =
  window.speechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognision();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const Ebook = () => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [no_of_chapters, setChapters] = useState([]);
  const [generated, setGenerated] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const myDiv = useRef(null);
  const [projectId, setProjectId] = useState();
  const [saveTitle, setSaveTitle] = useState("");
  const [saveDescription, setSaveDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const  userEbook = useSelector((state)=>state.userEbook)
  //const {loading, error, ebook } = userEbook

  // const handleSubmit = async(e) => {
  //     e.preventDefault()
  //     dispatch(ebookAction(title,description))
  // }
  const getProject = useSelector((state) => state.getProject);
  const { loading: projectLoading, error: projectError, project } = getProject;
  const saveEbook = useSelector((state) => state.saveEbook);
  const { loading: ebookLoading, error: ebookError,success } = saveEbook;

  // useEffect(() => {
  //   dispatch(getProjectAction());
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
   // dispatch(addEbook(title,description,chapters))
    //console.log(ebook)

    const config = {
      headers:{
          "Content-Type": "application/x-www-form-urlencoded",  
      }
  }
  setIsLoading(true)
  const {data} = await axios.post(`https://api.olukowe.co/ebook/`,{title, description,no_of_chapters},config)

  const arrData = [data]
        arrData.forEach((data)=>{
          setGenerated(data)
        })
  setIsLoading(false)
  console.log(generated)
    }
  

  const handleForm = (e) => {
    e.preventDefault();
    const divData = myDiv.current.innerText;
    console.log(divData, projectId, saveTitle, saveDescription);
    dispatch(addEbookAction(divData, projectId, saveTitle, saveDescription));
    
    if(success){
      toast.success("Ebook saved successfuly");
      setTimeout(()=>{
        navigate("/all_ebook");
      },5000)
    }
  };

  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);

  useEffect(() => {
    handleListening();
  }, [isListening]);

  const handleListening = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue ...");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("stoped");
      };
    }
    mic.onstart = () => {
      console.log("Mics is on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  // choice of writind style i.e audio / writing
  const [isVoice, setIsVoice] = useState(false);

  

  const renderEbookContents = () => {
    if (!generated || !generated.generated_ebook) {
      return <div>No ebook content available</div>;
    }
  
    const { generated_ebook } = generated;
    const introContent = generated_ebook['Introduction'];
    let updatedContents = [];
  
    // Move the Introduction content to the beginning
    if (introContent) {
      updatedContents.push(
        <div key="Introduction" style={{ marginBottom: '20px' }}>
         <b> <h2>Introduction</h2></b>
          <p>{introContent}</p>
          
        </div>
      );
    }
  
    // Render other chapters and content
    Object.entries(generated_ebook)
      .filter(([key]) => key !== 'Introduction')
      .forEach(([key, value]) => {
        if (Array.isArray(value)) {
          updatedContents.push(
            <div key={key} style={{ marginTop: '20px' }}>
              <h2 style={{ fontWeight: 'bold' }}>{key}</h2>
              {value.map((content, idx) => (
                <p key={`${key}-${idx}`} style={{ marginBottom: '10px' }}>
                  <Typewriter deleteSpeed={false} typeSpeed={20} words={[content]} />
                </p>
              ))}
            </div>
          );
        }
      });
  
    return updatedContents;
  };

  

  const copyToClipboard = () => {
    const contentElement = document.getElementById('ebook-content');
    if (!contentElement) return;
  
    const content = contentElement.innerText;
  
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = content;
    tempTextArea.setAttribute('readonly', '');
    tempTextArea.style.position = 'absolute';
    tempTextArea.style.left = '-9999px';
  
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
  
    //console.log('Text copied to clipboard');
    // You can add a success message or perform other actions here
    toast.success('copied');
  };

  const downloadPdf = async () => {
    const content = document.getElementById('ebook-content'); // Replace 'ebook-content' with your content div ID
    if (!content) return;

    try {
      const canvas = await html2canvas(content);
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF();
      const imgWidth = 210; // PDF width in mm (A4 size)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('generated_ebook.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

 
  const downloadAsWord = async () => {
    const content = document.getElementById("ebook-content");
    if (!content) return;
  
    try {
      const paragraphs = [];
      const processedNodes = new Set();
  
      const processNode = (node) => {
        if (!processedNodes.has(node)) {
          processedNodes.add(node);
          if (node.nodeName === 'H2' || node.nodeName === 'P') {
            return {
              type: node.nodeName,
              text: node.innerText,
            };
          }
        }
        return null;
      };
  
      const traverse = (node) => {
        const processedNode = processNode(node);
        if (processedNode) {
          paragraphs.push(processedNode);
        }
        if (node.children.length > 0) {
          Array.from(node.children).forEach((childNode) => {
            traverse(childNode);
          });
        }
      };
  
      traverse(content);
  
      const structuredParagraphs = [];
      let tempStructured = null;
  
      paragraphs.forEach((para, index) => {
        if (para.type === 'H2') {
          if (tempStructured) {
            structuredParagraphs.push(tempStructured);
            tempStructured = null;
          }
          tempStructured = { title: para.text, content: [] };
        } else if (para.type === 'P' && tempStructured) {
          tempStructured.content.push(para.text);
        }
  
        if (index === paragraphs.length - 1 && tempStructured) {
          structuredParagraphs.push(tempStructured);
        }
      });
  
      const doc = new Document({
        sections: structuredParagraphs.map((section) => {
          const children = [
            new Paragraph({
              children: [new TextRun({ text: section.title, bold: true })],
            }),
          ];
  
          section.content.forEach((text) => {
            children.push(new Paragraph({ children: [new TextRun({ text })] }));
          });
  
          return {
            children,
          };
        }),
        creator: 'Olukowe', 
        title: 'Ebook document',
      });
  
      
      const buffer = await Packer.toBlob(doc);
      saveAs(buffer, "olukowe.docx");
    } catch (error) {
      console.error("Error generating Word document:", error);
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
              <ProjectHeader image={ebook} title="Ebook Writing" />
              {/* ebook body content */}
              <div className="body-content">
                <form onSubmit={handleSubmit}>
                  <div className="left">
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                      type="text"
                      id="book-title"
                      placeholder="Book Title"
                      className="textarea"
                      required
                      style={{ padding: "20px", borderRadius: "5px" }}
                    />
                    <textarea
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      name=""
                      id="book-content-field"
                      className="textarea"
                      placeholder="Content"
                      required
                      //value={note}
                      //onChange={insertBookContent}
                      style={{ resize: "none" }}
                    ></textarea>

                    <input
                        onChange={(e) => setChapters(e.target.value)}
                        value={no_of_chapters}
                        type="text"
                        id="How many Chapters"
                        placeholder="How many chapters"
                        required
                        style={{ padding: "20px", borderRadius: "5px" }}
                  />
                    <br />
                    <button
                      className="article-btn"
                      style={{ fontSize: "14px" }}
                    >
                      Create Ebook
                    </button>
                  </div>
                </form>

                <div
                  
                  className="right"
                  id="ebook-content"
                  style={{
                    position: "relative",
                    lineHeight: "2em",
                    fontSize: "1.2em",
                    height: "100%",
                  }}
                >
                
                  {ebookError && <div>{ebookError}</div>}
                  {loading && <Loader />}
                  <Toaster />
                  {error && <div className=" bar error">{error}</div>}
                  
                      <div className="right-icons-container-fa">
                        <button className="icon-contain" onClick={copyToClipboard}>
                          <MdOutlineContentCopy className="icon" />
                        </button>
                      </div>
                        <h1><b>Title : {generated.title}</b></h1>
                        <p>{renderEbookContents()}</p>
                       
                    <br />
                    <div>
                      <button className="article-btn"
                      style={{ fontSize: "14px" }} onClick={downloadAsWord}>Download as word document</button>
                    </div>
                    {/* <form onSubmit={handleForm}>
                    <br />
                    <input
                      onChange={(e) => setSaveTitle(e.target.value)}
                      value={saveTitle}
                      type="text"
                      id="book-title"
                      placeholder="Title"
                      style={{
                        resize: "none",
                        textAlign: "center",
                        borderColor: "rgba(255,255,255)",
                        display: "block",
                        width: "100%",
                        background: "var(--primary-blue)",
                        borderRadius: "var(--border-radius-xs)",
                        border: "none",
                        outline: "none",
                        height: "15%",
                        margin: "10px 0",
                        padding: "10px",
                        resize: "none",
                      }}
                    />
                    <br />
                    <textarea
                      onChange={(e) => setSaveDescription(e.target.value)}
                      value={saveDescription}
                      name=""
                      id="book-content-field"
                      className="textarea"
                      placeholder="Description"
                      //value={note}
                      //onChange={insertBookContent}
                      style={{
                        resize: "none",
                        textAlign: "center",
                        borderColor: "rgba(255,255,255)",
                        display: "block",
                        width: "100%",
                        background: "var(--primary-blue)",
                        borderRadius: "var(--border-radius-xs)",
                        border: "none",
                        outline: "none",
                        height: "15%",
                        margin: "10px 0",
                        padding: "10px",
                        resize: "none",
                      }}
                    ></textarea>
                    <br />
                    <button
                      className="article-btn"
                      style={{ fontSize: "14px" }}
                    >
                      save Ebook
                    </button>
                    </form>*/}
                </div>
              </div>
            </div>

           
          </div>
          
        </div>
      </main>
    </>
  );
};

export default Ebook;
