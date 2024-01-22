import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Profile.css";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../components/Loader";

const Help = () => {
 
    const [email,setEmail] = useState('')
    const [body,setBody] = useState('')
    const [msg,setMsg] = useState("")
    const [loading,setLoading] = useState(false)

  const handleForm = async(e) => {
    e.preventDefault()
   try {
    setLoading(true)
    const {data} = await axios.post('https://dev.olukowe.co/api/help/',{email,body})
    console.log(data)
    
    setLoading(false)
    toast.success(data.message);
   
   } catch (error) {
    console.log(error.message)
    setMsg(error.message)
   }
  }
  return (
    <>
      <main>
        <TopNav />
        <div className="container ">
          <SideNav />
          <div className="content">
            <div className="inner-page-container">
              <section className="heading__container">
                <p><b>Please provide a brief description of the issue you are facing. Be specific and include any relevant details and well get back to you as soon as possible <br /> <br /> Thank you</b></p>
              </section>
              <hr />
              <section className="form__container">
              {msg && <div className='bar success'>{msg}</div>}
              {loading && <Loader />}
              <Toaster />
                <form onSubmit={handleForm}>
                  <article>
                    <aside>
                      <label htmlFor="FirstName">Email</label>
                      <input  onChange={(e)=>setEmail(e.target.value)}  value={email}  type="text" className="input" name="FirstName" />
                    </aside>
                  </article>
                  <div className="textarea__div">
                    <aside>
                      <label htmlFor="about">Message</label>
                      <textarea onChange={(e)=>setBody(e.target.value)}  value={body} name="about" id=""></textarea>
                      <small>How can we help you</small>
                    </aside>
                  </div>
                  <button
                    className="btn article-btn"
                    style={{ fontSize: "16px" }}
                  >
                    Send
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Help;
