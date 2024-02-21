import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { getOneLinkAction } from "../../actions/backend/linkPostAction";

const LinkMore = () => {

  const dispatch = useDispatch()
  const getOneLinkPost = useSelector((state)=>state.getOneLinkPost)
  const {loading,error,link} = getOneLinkPost

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneLinkAction(id))
  }, [])
  
 
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const navigate = useNavigate()

  useEffect(()=>{
    if (!userInfo) {
      navigate('/')
    }
  },[])
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                {link && link.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%",whiteSpace: 'pre-wrap' }}>
                        {sub.post}                                       
                    </div>
                ))}
                <br />
                <Link to="/all_link_post">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default LinkMore;
