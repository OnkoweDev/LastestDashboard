import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneArticleAction } from "../../actions/backend/articleWritterAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const ArticleRewriterMore = () => {
  // state to hold the data comimg from the database / backend
  //const [data, setData] = useState(HomepageData);
  const [article, setArticle] = useState([])

  const dispatch = useDispatch()
  const getOneArticleWriter = useSelector((state)=>state.getOneArticleWriter)
  const {loading,error,wroter} = getOneArticleWriter

  const {id} = useParams();
  const data = [wroter]
  console.log(data)

  useEffect(() => {
    dispatch(getOneArticleAction(id))
    const data = [wroter]
    console.log(data)
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
                {wroter && wroter.map((wrote)=>(
                    <div key={wrote.id} className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%",whiteSpace: 'pre-wrap'}}>
                        {wrote.article_rewriter} 
                        <br />
                                    
                    </div>
                ))}
                <Link to="/allArticle">Back</Link>      
            {/* <Voice /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default ArticleRewriterMore;
