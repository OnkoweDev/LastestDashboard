import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { deleteProjectAction, getProjectAction } from "../../actions/backend/projectAction";

const AllProject= () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()

  const getProject = useSelector((state)=>state.getProject)
  const {loading,error,project} = getProject

  const saveProductName = useSelector((state)=>state.saveProductName)
  const {error:googleError} = saveProductName

  const deleteProject = useSelector((state)=>state.deleteProject)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteProject

  useEffect(() => {
    dispatch(getProjectAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteProjectAction(id))
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
            width:"100%",
            textAlign:"center",
            justifyContent:"center",
            alignItems:"center",
            padding:"5px",
            
        }} 
        to='/project'>Create New Project</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {googleError && <div className=' bar error'>{googleError}</div>}
               {error && <div className=' bar error'>{error}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {Array.isArray(project) ? project && project.map((face)=>(
                <div className="card" key={face.id}>
                        <h1>{face.name}</h1> 
                        <b style={{color:"red"}}>status : {face.status}</b>
                        <br/>
                        {/*<Link to={`/all_project/${face.id}`}>Read more</Link><br/>*/}
                        <a  onClick={()=>handleDelete(face.id)}>delete</a>

                     
                </div>
                )):null}
              </div>
            {/* <Voice /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default AllProject;
