import React, { useEffect } from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Profile.css";
import PaymentCard from "../components/PaymentCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Payment = () => {

  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const navigate = useNavigate()

  useEffect(()=>{
    if (!userInfo) {
      navigate('/')
    }
  },[])
    
  return (
    <>
      <main>
        <TopNav />
        <div className="container ">
          <SideNav />
          <div className="content">
            <div>
                <div className="flex justify-center items-center m-6">
                  <PaymentCard />
                </div>
             
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Payment;
