import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { getOneLanguageAction } from "../../actions/backend/languageAction";

const LanguageMore = () => {

  const dispatch = useDispatch()
  const getOneLanguage = useSelector((state)=>state.getOneLanguage)
  const {loading,error,language} = getOneLanguage

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneLanguageAction(id))
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
                {language && language.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%",whiteSpace: 'pre-wrap'}}>
                        {sub.generated_translation}                                       
                    </div>
                ))}
                <br />
                <Link to="/language">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default LanguageMore;
