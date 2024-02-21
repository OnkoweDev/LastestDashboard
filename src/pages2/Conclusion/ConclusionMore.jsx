import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { getOneConclusionAction } from "../../actions/backend/conclusionAction";

const ConclusionMore = () => {

  const dispatch = useDispatch()
  const getOneConclusion = useSelector((state)=>state.getOneConclusion)
  const {loading,error,conclusion} = getOneConclusion

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneConclusionAction(id))
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
                {Array.isArray(conclusion) ?conclusion && conclusion?.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%",whiteSpace: 'pre-wrap' }}>
                        {sub.conclusion}                                       
                    </div>
                )):null}
                <br />
                <Link to="/conclusion">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default ConclusionMore;
