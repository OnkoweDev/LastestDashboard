import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneGoogleTilteAction } from "../../actions/backend/googleTitleAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const GoogleTitleMore = () => {

  const dispatch = useDispatch()
  const getOneTitle = useSelector((state)=>state.getOneTitle)
  const {loading,error,title} = getOneTitle

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneGoogleTilteAction(id))
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
                {title && title.map((sub)=>(
                    <div key={sub.id}className="cards-container">
                        {sub.title}                                       
                    </div>
                ))}
                <br />
                <Link to="/alltitle">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default GoogleTitleMore;
