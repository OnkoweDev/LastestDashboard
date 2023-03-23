import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneBlogAction } from "../../actions/backend/blogWriterAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const BlogMore = () => {
  // state to hold the data comimg from the database / backend
  //const [data, setData] = useState(HomepageData);
  const [article, setArticle] = useState([])

  const dispatch = useDispatch()
  const getOneBlogWriter = useSelector((state)=>state.getOneBlogWriter)
  const {loading,error,blog} = getOneBlogWriter

  const {id} = useParams();
  

  useEffect(() => {
    dispatch(getOneBlogAction(id))
   
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
                {blog && blog.map((blo)=>(
                    <div key={blo.id}className="cards-container">
                        {blo.article}                    
                    </div>
                ))}
            {/* <Voice /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogMore;
