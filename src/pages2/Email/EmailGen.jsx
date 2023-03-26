import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteArticleAction, getArticleAction } from "../../actions/backend/articleWritterAction";
import { deleteContentRepreAction, getContentRepreAction } from "../../actions/backend/contentRepreAction";
import { deleteEmailGenAction, getEmailGenAction } from "../../actions/backend/emailGeneratorAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const EmailGen = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getEmail = useSelector((state)=>state.getEmail)
  const {loading,error,emails} = getEmail

  const deleteEmail = useSelector((state)=>state.deleteEmail)
  const {loading:deleteLoading,error:deleteError,success} = deleteEmail

  useEffect(() => {
    dispatch(getEmailGenAction())
  }, [success])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteEmailGenAction(id))
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
        to='/emailgenerator'>Add Email Generator</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {error && <div className=' bar error'>{error}</div>}
               {message && <div className=' bar error'>{message}</div>}

               {emails && emails.map((email)=>(
                <div className="card" key={email.id}>
                        <p>{email.email_generator.slice(0,300)}.....</p>
                        <Link to={`/email/${email.id}`}>Read more</Link><br/>
                        <a  onClick={()=>handleDelete(email.id)} className="btn btn-danger">delete</a>

                     
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

export default EmailGen;
