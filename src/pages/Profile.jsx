import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Profile.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAction } from "../actions/backend/profileAction";
import { getProfileAction, userProfileAction } from "../actions/userAction";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../components/Loader";

const Profile = () => {
  

  const [first_name, setFull_name] = useState()
  const [about,setAbout] = useState('')
  const [phone,setPhone] = useState('')
  const [last_name,setLast_name] = useState('')
  const [username,setUsername] = useState('')
  const [country,setCountry] = useState('')
  const [url,seturl] = useState('')


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userProfile = useSelector((state)=>state.userProfile)
  const {loading,success, error,profileInfo} = userProfile

  const userLogin = useSelector((state) => state.userLogin);
  const { loading:loginLoading, userInfo, error:loginError } = userLogin;

  // useEffect(()=>{
  //   if(!userInfo){
  //     navigate('/')
  //   }
  //   else {
  //     // setFullname(profileInfo?.full_name)
  //     // setPhone(profileInfo?.phone_number)
  //     // setMessage(profileInfo?.about)
  //     setFull_name(profileInfo?.first_name)
  //     setAbout(profileInfo?.about)
  //     setPhone(profileInfo?.phone_number)
  //     setLast_name(profileInfo?.last_name)
  //     setUsername(profileInfo?.username)
  //     setCountry(profileInfo?.country)
  //     seturl(profileInfo?.url)
  //     // setMessage(profileInfo?.about)
  //   }
  // },[navigate,userInfo])

  const handleChange = (event) => {
    setUpload(event.target.files[0]);
}

 

  const handleProfile = async(e) => {
    e.preventDefault();

   // //console.log(first_name,about,phone,last_name,username,country,url)
    dispatch(
      userProfileAction
      (first_name,
      about,
      phone,
      last_name,
      username,
      country,
      url));
    if(success) {
      dispatch(getProfileAction())
      toast.success('profile updated successfully')
     
    }

  const getProfile = useSelector((state) => state.getProfile);
  const { profiles, loading:getProfileLoading,error:getProfileError } = getProfile;

   useEffect(()=>{
      if(success){

        dispatch(getProfileAction())
        //console.log(profiles)
      }

  },[dispatch,success])


    useEffect(()=>{
      if(success){
        
        setFull_name(profiles.data.profiles.first_name)
        setAbout(profiles.data.profiles.about)
        setPhone(profiles.data.profiles.phone_number)
        setLast_name(profiles.data.profiles.last_name)
        setUsername(profiles.data.profiles.username)
        setCountry(profiles.data.profiles.country)
        seturl(profiles.data.profiles.url)
        // setMessage(profileInfo?.about)
      }
    },[navigate,success])

   
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
                {loading && <Loader />}
                <Toaster />
                  <article>
                    <aside>
                      <label htmlFor="FirstName">First Name</label>
                      <input onChange={(e)=>setFull_name(e.target.value)}  value={first_name} type="text" className="input" name="first_Name" />
                    </aside>

                    <aside>
                      <label htmlFor="About">About</label>
                      <input onChange={(e)=>setAbout(e.target.value)}  value={about} type="text" className="input" name="about" />
                    </aside>

                    <aside>
                      <label htmlFor="Phone">Phone</label>
                      <input onChange={(e)=>setPhone(e.target.value)}  value={phone} type="text" className="input" name="phone_number" />
                    </aside>
                    
                  </article>
                <article>
                    

                    <aside>
                      <label htmlFor="LastName">Last Name</label>
                      <input onChange={(e)=>setLast_name(e.target.value)}  value={last_name} type="text" className="input" name="last_name" />
                    </aside>

                  <aside>
                    <label htmlFor="username">username</label>
                    <input onChange={(e)=>setUsername(e.target.value)}  value={username} type="text" className="input" name="username" />
                  </aside>
                
                </article>
                <article>
                  <aside>
                    <label htmlFor="Country">Country</label>
                    <input onChange={(e)=>setCountry(e.target.value)}  value={country} type="text" className="input" name="country" />
                  </aside>

                  <aside>
                    <label htmlFor="url">Url</label>
                    <input onChange={(e)=>seturl(e.target.value)}  value={url} type="text" className="input" name="url" />
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
