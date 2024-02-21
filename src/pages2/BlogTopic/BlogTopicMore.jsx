import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneBlogTopicAction } from "../../actions/backend/blogTopicAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
//ddd

const BlogTopicMore = () => {
  // state to hold the data comimg from the database / backend
  //const [data, setData] = useState(HomepageData);
  const [article, setArticle] = useState([])

  const dispatch = useDispatch()
  const getOneBlogTopic = useSelector((state)=>state.getOneBlogTopic)
  const {loading,error,topic} = getOneBlogTopic

  const {id} = useParams();
  

  useEffect(() => {
    dispatch(getOneBlogTopicAction(id))
   
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
                {topic && topic.map((blo)=>(
                    <div key={blo.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%",whiteSpace: 'pre-wrap' }}>
                        {blo.topic} 
                                           
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
          to='/all_blog_topic'>Back</Link><br/>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogTopicMore;
