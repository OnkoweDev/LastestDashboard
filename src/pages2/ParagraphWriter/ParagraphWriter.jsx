import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteParagraphAction, getParagraphAction } from "../../actions/backend/paragraphAction";


import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const ALLPARAGRAPHWRITER = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getParagraph = useSelector((state)=>state.getParagraph)
  const {loading,error,paragraphs} = getParagraph

//   const saveTitle = useSelector((state)=>state.saveTitle)
//   const {error:googleError} = saveTitle

  const deleteParagraph = useSelector((state)=>state.deleteParagraph)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteParagraph

  useEffect(() => {
    dispatch(getParagraphAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteParagraphAction(id))
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
        to='/land'>Create paragraph writer</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {error && <div className=' bar error'>{error}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {paragraphs && paragraphs.map((face)=>(
                <div className="card" key={face.id}>
                        <p>{face.paragraph.slice(0,300)}.....</p>
                        <Link to={`/all_paragraph/${face.id}`}>Read more</Link><br/>
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

export default ALLPARAGRAPHWRITER;
