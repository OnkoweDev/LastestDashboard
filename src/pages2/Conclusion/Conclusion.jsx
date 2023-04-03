import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { deleteConclusionAction, getConclusionAction } from "../../actions/backend/conclusionAction";

const Conclusion = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getConclusion = useSelector((state)=>state.getConclusion)
  const {loading,error,conclusions} = getConclusion

//   const saveTitle = useSelector((state)=>state.saveTitle)
//   const {error:googleError} = saveTitle

  const deleteConclusion = useSelector((state)=>state.deleteConclusion)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteConclusion

  useEffect(() => {
    dispatch(getConclusionAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteConclusionAction(id))
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
        to='/article-blog-conclusion'>Create Article Conclusion</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {error && <div className=' bar error'>{error}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {conclusions && conclusions.map((face)=>(
                <div className="card" key={face.id}>
                        <p>{face.conclusion.slice(0,300)}.....</p>
                        <Link to={`/conclusion/${face.id}`}>Read more</Link><br/>
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

export default Conclusion;
