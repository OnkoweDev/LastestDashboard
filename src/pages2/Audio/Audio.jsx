import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { deleteAudioAction, getAudioAction } from "../../actions/backend/audioAction";

const AllAudio = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getAudio = useSelector((state)=>state.getAudio)
  const {loading,error,audios} = getAudio

//   const saveTitle = useSelector((state)=>state.saveTitle)
//   const {error:googleError} = saveTitle

  const deleteAudio = useSelector((state)=>state.deleteAudio)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteAudio

  useEffect(() => {
    dispatch(getAudioAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteAudioAction(id))
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
        to='/audio'>Transcribe New Audio</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {error && <div className=' bar error'>{error}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {audios && audios.map((face)=>(
                <div className="card" key={face.id}>
                        <h2>{face.uploaded_url}</h2>
                        <p>{face.generated_transcription.slice(0,300)}.....</p>
                        <Link to={`/all_audio/${face.id}`}>Read more</Link><br/>
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

export default AllAudio;
