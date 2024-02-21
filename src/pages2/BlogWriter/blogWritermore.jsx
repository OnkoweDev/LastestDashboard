import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneBlogAction } from "../../actions/backend/blogWriterAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const BlogIntroMore = () => {
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
                {blog && blog.map((blo)=>(
                    <div key={blo.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%",whiteSpace: 'pre-wrap' }}>
                        {blo.article} 
                                           
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
          to='/allblogs'>Back</Link><br/>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogIntroMore;
