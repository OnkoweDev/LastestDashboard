import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Profile.css";
import PaymentCard from "../components/PaymentCard";


const Usage = () => {
    
  return (
    <>
      <main>
        <TopNav />
        <div className="container ">
          <SideNav />
          <div className="content">
            <div>
                <div className="flex justify-center items-center m-6">
                    <div className='w-full  py-10 px-8 bg-[#FFFFFF]'>
                       <h1 className="text-md pb-3">Usage</h1>
                       <p className="text-sm pb-3">Keep track of Usage</p>
                        <div className='max-w-[1240px] h-60 py-[3rem] mx-auto border border-gray-200'>
                            
                        </div>
                     </div>
                </div>
             
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Usage;
