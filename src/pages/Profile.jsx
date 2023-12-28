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
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  

  const [about,setAbout] = useState('')
  const [country,setCountry] = useState('')
  const [first_name, setFull_name] = useState()
  const [last_name,setLast_name] = useState('')
  const [phone,setPhone] = useState('')
  const [upload, setUpload] = useState([])
  const [username,setUsername] = useState('')


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userProfile = useSelector((state)=>state.userProfile)
  const {loading,success, error,profileInfo} = userProfile

  const userLogin = useSelector((state) => state.userLogin);
  const { loading:loginLoading, userInfo, error:loginError } = userLogin;

  useEffect(()=>{
    if(!userInfo){
      navigate('/')
    }
    else {
      // setFullname(profileInfo?.full_name)
      // setPhone(profileInfo?.phone_number)
      // setMessage(profileInfo?.about)
    }
  },[navigate,userInfo])

  const handleChange = (event) => {
    setUpload(event.target.files[0]);
}

 

  const handleProfile = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("about", about);
    formData.append("country", country);
    formData.append("phone_number", phone);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("avatar", upload); // Assuming this is the field for the profile picture
    formData.append("username", username);
    dispatch(userProfileAction(formData));
    if(success) {
      toast.success('profile updated successfully')
    }

    // const formData = new FormData();
    // formData.append("file", upload); // Append the file correctly
    // formData.append("fileName", upload.name);
    //console.log(about,country,first_name,last_name,phone,formData,username)
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
                <form onSubmit={handleProfile} encType="multipart/form-data">
                
                {error && <div className='bar error'>{error}</div>}
                <Toaster />
                  <article>
                    <aside>
                      <label htmlFor="FirstName">About</label>
                      <input onChange={(e)=>setAbout(e.target.value)}  value={about} type="text" className="input" name="about" />
                    </aside>
                    
                    <aside>
                      <label htmlFor="FirstName">Country</label>
                      <input onChange={(e)=>setCountry(e.target.value)}  value={country} type="text" className="input" name="country" />
                    </aside>

                  </article>
                <article>
                    <aside>
                    <label htmlFor="FirstName">First Name</label>
                    <input onChange={(e)=>setFull_name(e.target.value)}  value={first_name} type="text" className="input" name="firstName" />
                  </aside>

                  <aside>
                    <label htmlFor="LastName">Last Name</label>
                    <input onChange={(e)=>setLast_name(e.target.value)}  value={last_name} type="text" className="input" name="lastName" />
                  </aside>
                </article>
                <article>
                      <aside>
                      <label htmlFor="LastName">Phone</label>
                      <input onChange={(e)=>setPhone(e.target.value)}  value={phone} type="text" className="input" name="phone" />
                    </aside>
                    <aside>
                      <label htmlFor="file">Picture</label>
                      <input
                          onChange={handleChange}
                          type="file"
                          accept="image/*" 
                          className="input"
                          name="upload"
                        />
                    </aside>

                    <aside>
                      <label htmlFor="LastName">username</label>
                      <input onChange={(e)=>setUsername(e.target.value)}  value={username} type="text" className="input" name="username" />
                    </aside>
                  </article>
                  {/*<div className="textarea__div">
                    <aside>
                      <label htmlFor="about">About</label>
                      <textarea onChange={(e)=>setMessage(e.target.value)}  value={message} name="about" id=""></textarea>
                      <small>Brief description for your profile</small>
                    </aside>
                  </div>*/}
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
