import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Profile.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAction } from "../actions/backend/profileAction";
import { userProfileAction } from "../actions/userAction";

const Profile = () => {
  const [fullname,setFullname] = useState('')
  const [phone,setPhone] = useState('')
  const [upload, setUpload] = useState([])
  const [message,setMessage] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userProfile = useSelector((state)=>state.userProfile)
  const {loading,success, error,userInfo:profileInfo} = userProfile

  const userLogin = useSelector((state) => state.userLogin);
  const { loading:loginLoading, userInfo, error:loginError } = userLogin;

  useEffect(()=>{
    if(!userInfo){
      navigate('/')
    }
    else {
      setFullname(profileInfo?.full_name)
      setPhone(profileInfo?.phone_number)
      setMessage(profileInfo?.about)
    }
  },[navigate,userInfo])

  const handleChange = (event) => {
    setUpload(event.target.files[0])
}

  const handleProfile = async(e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', upload);
    formData.append('fileName', upload.name);
    console.log(message,phone,upload,message)
    dispatch(userProfileAction(fullname,message,phone,formData))
  }



  
  return (
    <>
      <main>
        <TopNav />
        <div className="container profile__container">
          <SideNav />
          <div className="content">
            <div className="inner-page-container">
              <section className="heading__container">
                <p>Personal Information</p>
              </section>
              <hr />
              <section className="form__container">
                <form onSubmit={handleProfile}>
                {success ? <p style={{color:"green"}}>Profile updated successfully</p>:'failed'}
                {error && <div className='bar error'>{error}</div>}
                  <article>
                    <aside>
                      <label htmlFor="FirstName">Full Name</label>
                      <input onChange={(e)=>setFullname(e.target.value)}  value={fullname} type="text" className="input" name="FirstName" />
                    </aside>
                    <aside>
                      <label htmlFor="LastName">Phone Number</label>
                      <input onChange={(e)=>setPhone(e.target.value)}  value={phone} type="text" className="input" name="LastName" />
                    </aside>
                  </article>
                  <article>
                    <aside>
                      <label htmlFor="file">Picture</label>
                      <input onChange={handleChange}  type="file" className="input" name="upload" />
                    </aside>
                  </article>
                  <div className="textarea__div">
                    <aside>
                      <label htmlFor="about">About</label>
                      <textarea onChange={(e)=>setMessage(e.target.value)}  value={message} name="about" id=""></textarea>
                      <small>Brief description for your profile</small>
                    </aside>
                  </div>
                  <button
                    className="btn article-btn"
                    style={{ fontSize: "16px" }}
                  >
                    {loading ? "Updating..." : "update"}
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

export default Profile;
