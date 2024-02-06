import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { getOneSectionAction } from "../../actions/backend/blogSectionAction";

const BlogSectionMore = () => {
  // state to hold the data comimg from the database / backend
  //const [data, setData] = useState(HomepageData);
  const [article, setArticle] = useState([])

  const dispatch = useDispatch()
  const getOneBlogSection = useSelector((state)=>state.getOneBlogSection)
  const {loading,error,blog} = getOneBlogSection

  const {id} = useParams();
  

  useEffect(() => {
    dispatch(getOneSectionAction(id))
   
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
                    <div key={blo.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%", whiteSpace: 'pre-wrap' }}>
                        {blo.section} 
                                           
                    </div>
                    
                ))}
            <br/>
            <Link className="article-btn"  
            style={{ 
              fontSize: "14px",
              width:"20%",
              textAlign:"center",
              justifyContent:"center",
              alignItems:"center",
              padding:"5px",
              
          }} 
          to='/blogsection'>Back</Link><br/>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogSectionMore;
