import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductNameAction, getProductNameAction } from "../../actions/backend/productNameAction";


import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const AllProductName = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getProductName = useSelector((state)=>state.getProductName)
  const {loading,error,productNames} = getProductName

  const saveProductName = useSelector((state)=>state.saveProductName)
  const {error:googleError} = saveProductName

  const deleteProductName = useSelector((state)=>state.deleteProductName)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteProductName

  useEffect(() => {
    dispatch(getProductNameAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteProductNameAction(id))
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
        to='/productname'>Create Product name</Link><br/>


              <div className="cards-container">
               {loading && <Loader />}
               {googleError && <div className=' bar error'>{googleError}</div>}
               {error && <div className=' bar error'>{error}</div>}
               {message && <div className=' bar success'>{message}</div>}

               {productNames && productNames.map((face)=>(
                <div className="card" key={face.id}>
                        <p>{face.product_name.slice(0,300)}.....</p>
                        <Link to={`/all_product_name/${face.id}`}>Read more</Link><br/>
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

export default AllProductName;
