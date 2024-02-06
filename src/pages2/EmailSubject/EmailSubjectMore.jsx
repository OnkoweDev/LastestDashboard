import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneSubjectAction } from "../../actions/backend/emailSubjectAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const EmailSubjectMore = () => {
  // state to hold the data comimg from the database / backend
  //const [data, setData] = useState(HomepageData);
  const [article, setArticle] = useState([])

  const dispatch = useDispatch()
  const getOneSubject = useSelector((state)=>state.getOneSubject)
  const {loading,error,subject} = getOneSubject

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneSubjectAction(id))
   
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
                {subject && subject?.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%", whiteSpace: 'pre-wrap' }}>
                        {sub.email_subject}                                       
                    </div>
                ))}
                <br />
                <Link to="/allEmailSubject">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default EmailSubjectMore;
