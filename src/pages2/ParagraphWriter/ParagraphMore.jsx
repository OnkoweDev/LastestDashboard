import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneParagraphAction } from "../../actions/backend/paragraphAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const ParagraphMore = () => {

  const dispatch = useDispatch()
  const getOneParagraph = useSelector((state)=>state.getOneParagraph)
  const {loading,error,paragraph} = getOneParagraph

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneParagraphAction(id))
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
                {paragraph && paragraph.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                        {sub.paragraph}                                       
                    </div>
                ))}
                <br />
                <Link to="/all_paragraph">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default ParagraphMore;
