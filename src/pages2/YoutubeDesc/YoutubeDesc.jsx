import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { deleteYoutubeDescAction, getYoutubeDescAction } from "../../actions/backend/youtubeDescAction";

const AllYoutubeDesc = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()

  const getYoutubeDesc = useSelector((state)=>state.getYoutubeDesc)
  const {loading,error,youtubesDescs} = getYoutubeDesc

  const saveYoutube = useSelector((state)=>state.saveYoutube)
  const {error:googleError, success:successYoutube} = saveYoutube

  const deleteYoutubeDesc = useSelector((state)=>state.deleteYoutubeDesc)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteYoutubeDesc

  useEffect(() => {
    dispatch(getYoutubeDescAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteYoutubeDescAction(id))
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
              to="/youtube-generator"
            >
              add Youtube Description
            </Link>
            <br />

            <div className="cards-container">
              {loading && <Loader />}
              {deleteLoading && <Loader />}
              {error && <div className=" bar error">{error}</div>}
              {googleError && <div className=" bar error">{googleError}</div>}
              {message && <div className=" bar success">{message}</div>}
              <Toaster />

              {youtubesDescs
                ? youtubesDescs &&
                youtubesDescs.map((face) => (
                    <div className="card relative" key={face.id}>
                      <p>{face.description.slice(0, 300)}.....</p>
                      <Link to={`/all_youtubeDesc/${face.id}`}>Read more</Link>
                      <br />
                      <MdDelete
                        onClick={() => handleDelete(face.id)}
                        className="absolute top-5 right-5 text-lg text-gray-800"
                      />
                    </div>
                  ))
                : "Please add new youtube intro"}
            </div>
            {/* <Voice /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default AllYoutubeDesc;