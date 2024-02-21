import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import {
  deleteAudioAction,
  getAudioAction,
} from "../../actions/backend/audioAction";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const AllAudio = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");
  const navigate = useNavigate()


  const dispatch = useDispatch();
  const getAudio = useSelector((state) => state.getAudio);
  const { loading, error, audios } = getAudio;

  const saveAudio = useSelector((state) => state.saveAudio);
  const { error: googleError } = saveAudio;

  const deleteAudio = useSelector((state) => state.deleteAudio);
  const {
    loading: deleteLoading,
    error: deleteError,
    success: deleteSuccess,
  } = deleteAudio;

  useEffect(() => {
    dispatch(getAudioAction());
  }, [deleteSuccess]);

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete Item`)) {
      dispatch(deleteAudioAction(id));
      toast.success("Deleted successfuly");

    }
  };

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
              to="/audio"
            >
              Transcribe New Audio
            </Link>
            <br />

            <div className="cards-container">
              {loading && <Loader />}
              {googleError && <div className=" bar error">{googleError}</div>}
              {error && <div className=" bar error">{error}</div>}
              {message && <div className=" bar success">{message}</div>}
              <Toaster />

              {audios &&
                audios.map((face) => (
                  <div className="card relative" key={face.id}>
                    <p>{face.generated_transcription.slice(0, 300)}.....</p>
                    <Link to={`/all_audio/${face.id}`}>Read more</Link>
                    <br />
                    <MdDelete
                      onClick={() => handleDelete(face.id)}
                      className="absolute top-10 right-10 text-lg text-gray-800"
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

export default AllAudio;
