import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { deleteProductDescAction, getProductDescAction } from "../../actions/backend/productDescAction";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const AllProductDesc = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getProductDesc = useSelector((state)=>state.getProductDesc)
  const {loading,error,productDescs} = getProductDesc

  const saveProductDesc = useSelector((state)=>state.saveProductDesc)
  const {error:googleError} = saveProductDesc

  const deleteProductDesc = useSelector((state)=>state.deleteProductDesc)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteProductDesc

  useEffect(() => {
    dispatch(getProductDescAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteProductDescAction(id))
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
              to="/product"
            >
              Create Product Description
            </Link>
            <br />

            <div className="cards-container">
              {loading && <Loader />}
              {googleError && <div className=" bar error">{googleError}</div>}
              {error && <div className=" bar error">{error}</div>}
              {message && <div className=" bar success">{message}</div>}
              <Toaster />

              {Array.isArray(productDescs)
                ? productDescs &&
                  productDescs.map((face) => (
                    <div className="card relative" key={face.id}>
                      <p>{face.product_description.slice(0, 300)}.....</p>
                      <Link to={`/all_productDesc/${face.id}`}>Read more</Link>
                      <br />
                      <MdDelete
                        onClick={() => handleDelete(face.id)}
                        className="absolute top-5 right-5 text-lg text-gray-800"
                      />
                    </div>
                  ))
                : null}
            </div>
            {/* <Voice /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default AllProductDesc;
