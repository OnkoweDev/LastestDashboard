import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Profile.css";
import { useState } from "react";
import axios from "axios";

const Help = () => {
 
    const [email,setEmail] = useState('')
    const [body,setBody] = useState('')
    const [msg,setMsg] = useState("")
    const [loading,setLoading] = useState(false)

  const handleForm = async(e) => {
    e.preventDefault()
   try {
    setLoading(true)
    const {data} = await axios.post('https://dev.olukowe.co/api/help',{email,body})
    console.log(data.data)
    setMsg(data.message)
    setTimeout(()=>{
        setMsg("")
        setEmail("")
        setBody("")
    },4000)
    setLoading(false)
   } catch (error) {
    console.log(error)
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
                <p>Help</p>
              </section>
              <hr />
              <section className="form__container">
              {msg && <div className='bar success'>{msg}</div>}
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
                  {loading ? "Sending..." : "Send"}
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
