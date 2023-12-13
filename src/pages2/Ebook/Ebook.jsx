import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { deleteEbookAction, getEbookAction } from "../../actions/backend/ebookAction";

const AllEbook = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getEbook = useSelector((state)=>state.getEbook)
  const {loading,error,Ebooks} = getEbook

  const deleteEbook = useSelector((state)=>state.deleteEbook)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteEbook

  const saveEbook = useSelector((state)=>state.saveEbook)
  const  {loading:articleLoading,error:articleError} = saveEbook

  useEffect(() => {
    dispatch(getEbookAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteEbookAction(id))
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
        to='/ebook'>Create Ebook</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {error && <div className=' bar error'>{error}</div>}
               {articleError && <div className=' bar error'>{articleError}</div>}
               {message && <div className=' bar success'>{message}</div>}

               { Ebooks && Ebooks.map((face)=>(
                <div className="card" key={face.id}>
                        <h1>{face.title}</h1>
                        <p>{face.generated_ebook.slice(0,300)}.....</p>
                        <Link to={`/all_ebook/${face.id}`}>Read more</Link><br/>
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

export default AllEbook;
