import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneProductNameAction } from "../../actions/backend/productNameAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const ProductMore = () => {

  const dispatch = useDispatch()
  const getOneProductName = useSelector((state)=>state.getOneProductName)
  const {loading,error,productName} = getOneProductName

  const {id} = useParams();
 

  useEffect(() => {
    dispatch(getOneProductNameAction(id))
  }, [])
  
 

  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                {productName && productName.map((sub)=>(
                    <div key={sub.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%",whiteSpace: 'pre-wrap' }}>
                        {sub.product_name}                                       
                    </div>
                ))}
                <br />
                <Link to="/all_product_name">Back</Link>     
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductMore;
