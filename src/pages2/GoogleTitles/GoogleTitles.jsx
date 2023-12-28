import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { deleteGoogleTitleAction, getGoogleTitleAction } from "../../actions/backend/googleTitleAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const AllTitles = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getTitle = useSelector((state)=>state.getTitle)
  const {loading,error,titles} = getTitle

  const saveTitle = useSelector((state)=>state.saveTitle)
  const {error:googleError} = saveTitle

  const deleteTitle = useSelector((state)=>state.deleteTitle)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteTitle

  useEffect(() => {
    dispatch(getGoogleTitleAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteGoogleTitleAction(id))
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
              to="/googletitle"
            >
              Add Google Title
            </Link>
            <br />

            <div className="cards-container">
              {loading && <Loader />}
              {googleError && <div className=" bar error">{googleError}</div>}
              {error && <div className=" bar error">{error}</div>}
              {message && <div className=" bar success">{message}</div>}
              <Toaster />

              {titles &&
                titles.map((face) => (
                  <div className="card relative" key={face.id}>
                    <p>{face.title.slice(0, 300)}.....</p>
                    <Link to={`/alltitle/${face.id}`}>Read more</Link>
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

export default AllTitles;
