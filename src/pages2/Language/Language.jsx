import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { deleteLanguageAction, getLanguageAction } from "../../actions/backend/languageAction";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const Language  = () => {
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
                padding: "10px",
                margin:"10px"
              }}
              to="/language-translation"
            >
              Translate
        </Link>
            <div className="cards-container">
              {loading && <Loader />}
              {error && <div className=" bar error">{error}</div>}
              {googleError && <div className=" bar error">{googleError}</div>}
              {message && <div className=" bar success">{message}</div>}
              <Toaster />

              {languages &&
                languages.map((face) => (
                  <div className="card relative" key={face.id}>
                    <p>{face.generated_translation.slice(0, 300)}.....</p>
                    <Link to={`/language/${face.id}`}>Read more</Link>
                    <br />

                    <MdDelete
                      onClick={() => handleDelete(face.id)}
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

export default Language;
