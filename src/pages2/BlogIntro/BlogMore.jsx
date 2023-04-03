import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneIntroAction } from "../../actions/backend/blogIntroAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const BlogIntroMore = () => {
  // state to hold the data comimg from the database / backend
  //const [data, setData] = useState(HomepageData);
  const [article, setArticle] = useState([])

  const dispatch = useDispatch()
  const getOneBlogIntro = useSelector((state)=>state.getOneBlogIntro)
  const {loading,error,blog} = getOneBlogIntro

  const {id} = useParams();
  
  useEffect(() => {
    dispatch(getOneIntroAction(id))
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
                {Array.isArray(blog) ? blog && blog?.map((d)=>(
                    <div key={d.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                        {d.intro} 
                        <br />
                                         
                    </div>
                )):null}
                <br />
                <Link to="/all_intro">Back</Link> 
            {/* <Voice /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogIntroMore;
