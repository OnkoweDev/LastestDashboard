import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteParagraphAction, getParagraphAction } from "../../actions/backend/paragraphAction";


import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const ALLPARAGRAPHWRITER = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getParagraph = useSelector((state)=>state.getParagraph)
  const {loading,error,paragraphs} = getParagraph

  const saveParagraph = useSelector((state)=>state.saveParagraph)
  const {error:googleError} = saveParagraph

  const deleteParagraph = useSelector((state)=>state.deleteParagraph)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteParagraph

  useEffect(() => {
    dispatch(getParagraphAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteParagraphAction(id))
    toast.success("Deleted successfuly");

    }
}



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
              to="/paragraph-writer"
            >
              Create paragraph writer
            </Link>
            <br />

            <div className="cards-container">
              {loading && <Loader />}
              {googleError && <div className=" bar error">{googleError}</div>}
              {error && <div className=" bar error">{error}</div>}
              {message && <div className=" bar success">{message}</div>}
              <Toaster />

              {paragraphs &&
                paragraphs.map((face) => (
                  <div className="card relative" key={face.id}>
                    <p>{face.paragraph.slice(0, 300)}.....</p>
                    <Link to={`/all_paragraph/${face.id}`}>Read more</Link>
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

export default ALLPARAGRAPHWRITER;
