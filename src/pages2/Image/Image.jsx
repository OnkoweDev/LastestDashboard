import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home2.css";
import { deleteImageAction, getImageAction } from "../../actions/backend/imageAction";

const AllImage = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getImage = useSelector((state)=>state.getImage)
  const {loading,error,images} = getImage

  const saveImage = useSelector((state)=>state.saveImage)
  const {error:googleError} = saveImage

  const deleteImage = useSelector((state)=>state.deleteImage)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteImage

  useEffect(() => {
    dispatch(getImageAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteImageAction(id))
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
        to='/image'>Create new Image</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {googleError && <div className=' bar error'>{googleError}</div>}
               {error && <div className=' bar error'>{error}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {images && images.map((face)=>(
                <div className="card" key={face.id}>
                        <h3>{face.prompt}</h3>
                        <img src={face.generated_url} />
                        <Link to={`/all_image/${face.id}`}>Enlarge</Link><br/>
                        <a  onClick={()=>handleDelete(face.id)}>delete</a>

                     
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

export default AllImage;
