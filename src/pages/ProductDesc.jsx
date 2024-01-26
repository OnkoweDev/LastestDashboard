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
  const myDivRefs = useRef([]);

  

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const product = useSelector((state) => state.product)
  const {loading, error, success, products} = product
  
  const getProject = useSelector((state)=>state.getProject)
  const {loading:projectLoading,error:projectError, project} = getProject

  const saveProductDesc = useSelector((state)=>state.saveProductDesc)
  const {loading:productLoading,error:productError,success:productSuccess} = saveProductDesc

 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
    dispatch(addProductAction(name,feature))

  }

  const handleForm = (index) => {
    //e.preventDefault()
    const divData = myDivRefs.current[index];
    const specificData = divData.innerText;
    console.log(specificData)
    dispatch(addProductDescAction(specificData))
    
    toast.success("Product Desc saved successfuly");
    
  }

 

   //Typewriter Effect
   const TypeWriterEffect = ({ text }) => {
    return <Typewriter deleteSpeed={false} words={[text]}  cursor />;
  };
//copy Effect
const handleCopy = (index) => {
  console.log('Copying product description');
  const divData = myDivRefs.current[index];
  if (divData) {
    navigator.clipboard.writeText(divData.innerText);
    toast.success('Copied product description!');
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
  
  const renderProductContents = () => {
    if (!products || !products.length) {
      return <div>No product descriptions available</div>;
    }
  
    return products.map((product, index) => (
      <div className="sec-1" ref={myDiv} key={index}>
        <div className="right-icons-container-fa">
          <button className="icon-contain" onClick={() => handleCopy(index)}>
            <MdOutlineContentCopy className="icon" />
          </button>
          <button className="icon-contain" onClick={() => handleForm(index)}>
            <MdOutlineSaveAlt className="icon" />
          </button>
        </div>
        <div className="txt-sec" ref={(el) => myDivRefs.current[index] = el}>
          {product.generated_descriptions.map((description, idx) => (
            <div key={`${index}-${idx}`} style={{ marginBottom: '20px', margin:'15px', }}>
              <p style={{  textAlign: 'justify', margin:'10px', }} dangerouslySetInnerHTML={{ __html: description.replace(/Product Description/g, '<span style="font-weight: bold;">Product Description</span>') }} />
              
            </div>

            
          ))}
        </div>
      </div>
    ));
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
              <ProjectHeader image={product} title="Product description Generator" />
              {/* body container */}
              <div className="body-content">
                <div className="left">
                  <form onSubmit={handleSubmit}>
                    <p className="product-p">Product name*</p>
                    <input
                      onChange={(e) => setName(e.target.value)}
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
                      onChange={(e) => setFeature(e.target.value)}
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
                    {/*  number of output*/}
                    <button className="article-btn" style={{ fontSize: "12px" }}>
                      Create Product Description
                    </button>
                  </form>
                </div>
                <div className="right" style={{ position: "relative", lineHeight: "2em", fontSize: "1.2em", height: "100%" }}>
                  {loading && <Loader />}
                  {productLoading && <Loader />}
                  {error && <div className=' bar error'>{error}</div>}
                  {productError && <div className=' bar error'>{productError}</div>}
                  <Toaster />
                  {renderProductContents()}
                  <br />
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
