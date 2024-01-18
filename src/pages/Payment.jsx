import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Profile.css";
import PaymentCard from "../components/PaymentCard";


const Payment = () => {
    
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
