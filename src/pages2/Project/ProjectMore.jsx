import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { getOneProjectAction } from "../../actions/backend/projectAction";

const ProjectMore = () => {

  const dispatch = useDispatch()
  const getOneProject = useSelector((state)=>state.getOneProject)
  const {loading,error,proj} = getOneProject

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneProjectAction(id))
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
                
                {proj && proj?.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                        {sub.name}                                       
                    </div>
                ))}
                <br />
                <Link to="/all_project">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectMore;
