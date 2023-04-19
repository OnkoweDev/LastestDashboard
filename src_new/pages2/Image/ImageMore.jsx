import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { getOneImageAction } from "../../actions/backend/imageAction";

const ImageMore = () => {

  const dispatch = useDispatch()
  const getOneImage = useSelector((state)=>state.getOneImage)
  const {loading,error,image} = getOneImage

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneImageAction(id))
  }, [])
  
 

  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                {image && image.map((sub)=>(
                    <div key={sub.id} className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                        <img src={sub.generated_url} />                                      
                    </div>
                ))}
                <br />
                <Link to="/all_image">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default ImageMore;
