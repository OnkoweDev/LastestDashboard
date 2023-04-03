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

const ProductDesc = () => {
  // state to keep track of number of output
  const [name, setName] = useState([])
  const [feature, setFeature] = useState([])
  // state for audio option
  const [isAudio, setIsAudio] = useState(false);
  const [projectId, setProjectId] = useState()
  const myDiv = useRef(null)
  

  const dispatch = useDispatch()
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

  const handleForm = (e) => {
    e.preventDefault()
    const divData = myDiv.current.innerText
    console.log(divData)
    dispatch(addProductDescAction(divData,projectId))
  }

  // handle audio option
  const handleAudio = () => {
    console.log("Mic is clicked");
    setIsAudio(true);
    //
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
                <div className="right">
                <form onSubmit={handleForm}>
                    {loading && <Loader />}
                    {error && <div className=' bar error'>{error}</div>}
                    {products && products.map((item)=>(
                      <div className="sec-1" contentEditable suppressContentEditableWarning={true} ref={myDiv}>
                        {item.generated_descriptions.map((d)=>(
                          
                          <p>
                          
                          {d}
                          </p>
                          ))}
                        </div>
                        ))}
                        <br />
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
                      <button className="article-btn" style={{ fontSize: "12px" }}>
                        Save Product Description
                      </button>
                    </form>
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
