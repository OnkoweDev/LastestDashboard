import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { deleteLanguageAction, getLanguageAction } from "../../actions/backend/languageAction";

const Language = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getLanguage = useSelector((state)=>state.getLanguage)
  const {loading,error,languages} = getLanguage

  const saveLanguage = useSelector((state)=>state.saveLanguage)
  const {error:googleError} = saveLanguage

  const deleteLanguage = useSelector((state)=>state.deleteLanguage)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteLanguage

  useEffect(() => {
    dispatch(getLanguageAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteLanguageAction(id))
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
         


              <div className="cards-container">
               {loading && <Loader />}
               {error && <div className=' bar error'>{error}</div>}
               {googleError && <div className=' bar error'>{googleError}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {languages && languages.map((face)=>(
                <div className="card" key={face.id}>
                        <h1>{face.language}</h1>
                        <h2>{face.text.slice(0,100)}....</h2>
                        <p>{face.generated_translation.slice(0,300)}.....</p>
                        <Link to={`/language/${face.id}`}>Read more</Link><br/>
                        <a  onClick={()=>handleDelete(face.id)} className="btn btn-danger">delete</a>

                     
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

export default Language;
