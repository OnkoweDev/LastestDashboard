import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteArticleAction, getArticleAction } from "../../actions/backend/articleWritterAction";
import { deleteContentRepreAction, getContentRepreAction } from "../../actions/backend/contentRepreAction";
import { deleteEmailGenAction, getEmailGenAction } from "../../actions/backend/emailGeneratorAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const EmailGen = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getEmail = useSelector((state)=>state.getEmail)
  const {loading,error,emails} = getEmail

  const deleteEmail = useSelector((state)=>state.deleteEmail)
  const {loading:deleteLoading,error:deleteError,success} = deleteEmail

  const addEmail = useSelector((state)=>state.addEmail)
  const  {loading:articleLoading,error:articleError} = addEmail

  useEffect(() => {
    dispatch(getEmailGenAction())
  }, [success])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteEmailGenAction(id))
    toast.success("Deleted successfuly");

    }
   
}

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
            <Link
              className="article-btn"
              style={{
                fontSize: "14px",
                width: "20%",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px",
              }}
              to="/emailgenerator"
            >
              Add Email Generator
            </Link>
            <br />

            <div className="cards-container">
              {loading && <Loader />}
              {error && <div className=" bar error">{error}</div>}
              {articleError && <div className=" bar error">{articleError}</div>}
              {message && <div className=" bar error">{message}</div>}
              <Toaster />

              {emails &&
                emails.map((email) => (
                  <div className="card relative" key={email.id}>
                    <p>{email.email_generator.slice(0, 300)}.....</p>
                    <Link to={`/email/${email.id}`}>Read more</Link>
                    <br />

                    <MdDelete
                      onClick={() => handleDelete(email.id)}
                      className="absolute top-5 right-5 text-lg text-gray-800"
                    />
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
