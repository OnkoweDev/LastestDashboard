import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteArticleAction, getArticleAction } from "../../actions/backend/articleWritterAction";
import { deleteContentRepreAction, getContentRepreAction } from "../../actions/backend/contentRepreAction";
import { deleteEmailGenAction, getEmailGenAction } from "../../actions/backend/emailGeneratorAction";
import { deleteSubjectAction, getSubjectAction } from "../../actions/backend/emailSubjectAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const AllEmailSubject = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getSubject = useSelector((state)=>state.getSubject)
  const {loading,error,subjects,success} = getSubject

  const deleteSubject = useSelector((state)=>state.deleteSubject)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteSubject

  const saveSubject = useSelector((state)=>state.saveSubject)
  const  {loading:articleLoading,error:articleError} = saveSubject

  useEffect(() => {
    dispatch(getSubjectAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteSubjectAction(id))
    setMessage("Item deleted Successful")
    setTimeout(()=>{
        setMessage("")
    },4000)
    }
   
}



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
        to='/emailSubject'>Add Email Generator</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {error && <div className=' bar error'>{error}</div>}
               {articleError && <div className=' bar error'>{articleError}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {subjects && subjects.map((subject)=>(
                <div className="card" key={subject.id}>
                        <p>{subject.email_subject.slice(0,300)}.....</p>
                        <Link to={`/allEmailSubject/${subject.id}`}>Read more</Link><br/>
                        <a  onClick={()=>handleDelete(subject.id)} className="btn btn-danger">delete</a>

                     
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

export default AllEmailSubject;
