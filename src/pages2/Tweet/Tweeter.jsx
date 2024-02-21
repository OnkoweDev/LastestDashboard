import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteTweetAction, getTweetAction } from "../../actions/backend/tweetAction";


import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const AllTweet = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getTweet = useSelector((state)=>state.getTweet)
  const {loading,error,tweeters} = getTweet

  const saveTweet = useSelector((state)=>state.saveTweet)
  const {error:googleError} = saveTweet

  const deleteTweet = useSelector((state)=>state.deleteTweet)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteTweet

  useEffect(() => {
    dispatch(getTweetAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteTweetAction(id))
    toast.success("Deleted successfuly");

    }
}

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
              to="/tweets-generation"
            >
              Create Tweet
            </Link>
            <br />

            <div className="cards-container">
              {loading && <Loader />}
              {googleError && <div className=" bar error">{googleError}</div>}
              {error && <div className=" bar error">{error}</div>}
              {message && <div className=" bar success">{message}</div>}
              <Toaster />

              {tweeters &&
                tweeters.map((face) => (
                  <div className="card relative" key={face.id}>
                    <p>{face.tweet.slice(0, 300)}.....</p>
                    <Link to={`/all_tweet/${face.id}`}>Read more</Link>
                    <br />
                    <MdDelete
                      onClick={() => handleDelete(face.id)}
                      className="absolute top-5 right-5 text-lg text-gray-800"
                    />
                  </div>
                ))}
            </div>
            {/* <Voice /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default AllTweet;
