import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteArticleAction, getArticleAction } from "../../actions/backend/articleWritterAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import toast, { Toaster } from "react-hot-toast";

const ALLArticleRewritter = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");
  const navigate = useNavigate()


  const dispatch = useDispatch()
  const getArticleWriter = useSelector((state)=>state.getArticleWriter)
  const {loading,error,writer} = getArticleWriter

  const deleteArticleWriter = useSelector((state)=>state.deleteArticleWriter)
  const {loading:deleteLoading,error:deleteError,success} = deleteArticleWriter

  const articleWritter = useSelector((state)=>state.articleWritter)
  const  {loading:articleLoading,error:articleError} = articleWritter

  useEffect(() => {
    dispatch(getArticleAction())
  }, [success])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteArticleAction(id))
    toast.success("Deleted successfuly");

    }
   
}
const userInfo = useSelector((state) => state.userLogin.userInfo);
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
          <Link className="article-btn"  
          style={{ 
            fontSize: "14px",
            width:"20%",
            textAlign:"center",
            justifyContent:"center",
            alignItems:"center",
            padding:"5px",
            
        }} 
        to='/articleRewriter'>ADD ARTICLE REWRITER</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {error && <div className=' bar error'>{error}</div>}
               {articleError && <div className=' bar error'>{articleError}</div>}
               <Toaster />

               {writer && writer.map((write)=>(
                <div className="card" key={write.id}>
                        <p>{write.article_rewriter.slice(0,300)}.....</p>
                        <Link to={`/allArticle/${write.id}`}>Read more</Link><br/>
                        <a  onClick={()=>handleDelete(write.id)} >delete</a>
                </div>
                ))}
              </div>
            {/* <Voice /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default ALLArticleRewritter;
