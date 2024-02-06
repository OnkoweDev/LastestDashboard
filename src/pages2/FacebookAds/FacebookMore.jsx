import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneFacebookAdsAction } from "../../actions/backend/facebookAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const FacebookMore = () => {
  // state to hold the data comimg from the database / backend
  //const [data, setData] = useState(HomepageData);
  const [article, setArticle] = useState([])

  const dispatch = useDispatch()
  const getOneFacebook = useSelector((state)=>state.getOneFacebook)
  const {loading,error,facebook} = getOneFacebook

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneFacebookAdsAction(id))
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
                {facebook && facebook.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%", whiteSpace: 'pre-wrap' }}>
                        {sub.facebook_ad}                                       
                    </div>
                ))}
                <br />
                <Link to="/allfacebookads">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default FacebookMore;
