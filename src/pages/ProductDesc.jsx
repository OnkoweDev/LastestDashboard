import React, { useRef, useState } from "react";
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
import { addProductAction } from "../actions/ai/productAction";
import Loader from "../components/Loader";
import { getProjectAction } from "../actions/backend/projectAction";
import { useEffect } from "react";
import { addProductDescAction } from "../actions/backend/productDescAction";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineContentCopy, MdOutlineSaveAlt } from "react-icons/md";

const ProductDesc = () => {
  // state to keep track of number of output
  const [name, setName] = useState([])
  const [feature, setFeature] = useState([])
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  const [projectId, setProjectId] = useState()
  const myDiv = useRef(null)
  

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const product = useSelector((state) => state.product)
  const {loading, error, success, products} = product
  
  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const saveProductDesc = useSelector((state)=>state.saveProductDesc)
  const {loading:productLoading,error:productError,success:productSuccess} = saveProductDesc

  useEffect(() => {
    dispatch(getProjectAction())
}, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
    dispatch(addProductAction(name,feature))

  }

  const handleForm = (index, subIndex,e) => {
    e.preventDefault()
    const specificDiv = document.getElementById(`div-${index}-${subIndex}`);
    const specificData = specificDiv.innerText;
    dispatch(addProductDescAction(specificData))
    
    if(productSuccess){
      toast.success("Product Desc saved successfuly");
      // setTimeout(()=>{
      //   navigate('/all_productDesc')
      // },5000)
    }
  }

  // handle audio option
  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
    //
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

  const [typingStatus, setTypingStatus] = useState([]);

  useEffect(() => {
    if (products) {
      setTypingStatus(Array(products.length).fill(true));
    }
  }, [products]);

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
            <div className="instagram-ad inner-page-container">
              {/* header */}
              <ProjectHeader
                image={product}
                title="Product description  Generator"
              />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                    <form onSubmit={handleSubmit}>

                  <p className="product-p">Product name*</p>
                  <input
                  onChange={(e)=>setName(e.target.value)}
                  value={name}
                    type="text"
                    placeholder="Title"
                    required
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
                  <p className="product-p">Product description*</p>
                  <textarea
                   onChange={(e)=>setFeature(e.target.value)}
                   value={feature}
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
                    Create Product Description
                  </button>
                  </form>

                </div>
                <div className="right" style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
               
                    {loading && <Loader />}
                    {productLoading && <Loader />}
                    {error && <div className=' bar error'>{error}</div>}
                    {productError && <div className=' bar error'>{productError}</div>}
                    <Toaster />
                    {products && products.map((item,index)=>(
                      <div className="sec-1" key={index} contentEditable suppressContentEditableWarning={true} ref={myDiv}>
                        {item.generated_descriptions.map((d,idx)=>(
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
                          {typingStatus[index] && <Typewriter deleteSpeed={false} typeSpeed={20} words={[d]} cursor />}
                           </div>
                           </div>
                         
                          ))}
                        </div>
                        ))}
                        <br />
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
                              <Link to='/all_productDesc' className="article-btn">Saved Work</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDesc;
