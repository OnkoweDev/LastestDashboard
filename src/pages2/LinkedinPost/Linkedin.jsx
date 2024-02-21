import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { deleteLinkAction, getLinkAction } from "../../actions/backend/linkPostAction";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const AllLinkPost = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getLinkPost = useSelector((state)=>state.getLinkPost)
  const {loading,error,links} = getLinkPost

  const saveLinkPost = useSelector((state)=>state.saveLinkPost)
  const {error:googleError} = saveLinkPost

  const deleteLinkPost = useSelector((state)=>state.deleteLinkPost)
  const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteLinkPost

  useEffect(() => {
    dispatch(getLinkAction())
  }, [deleteSuccess])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteLinkAction(id))
    toast.success("Deleted successfuly");

    }
}

const userInfo = useSelector((state) => state.userLogin.userInfo);
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
              to="/short-LinkedIn-posts"
            >
              Create Linkedin Post
            </Link>
            <br />

            <div className="cards-container">
              {loading && <Loader />}
              {googleError && <div className=" bar error">{googleError}</div>}
              {error && <div className=" bar error">{error}</div>}
              {message && <div className=" bar success">{message}</div>}
              <Toaster />

              {links &&
                links.map((face) => (
                  <div className="card relative" key={face.id}>
                    <p>{face.post.slice(0, 300)}.....</p>
                    <Link to={`/all_link_post/${face.id}`}>Read more</Link>
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

export default AllLinkPost;
