import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteIntroAction,
  getBlogintroAction,
} from "../../actions/backend/blogIntroAction";

import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const ALLBlogIntro = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const getBlogIntro = useSelector((state) => state.getBlogIntro);
  const { loading, error, blogs } = getBlogIntro;

  //   const saveTitle = useSelector((state)=>state.saveTitle)
  //   const {error:googleError} = saveTitle

  const deleteBlogIntro = useSelector((state) => state.deleteBlogIntro);
  const {
    loading: deleteLoading,
    error: deleteError,
    success: deleteSuccess,
  } = deleteBlogIntro;

  const saveBlogIntro = useSelector((state) => state.saveBlogIntro);
  const { loading: articleLoading, error: articleError } = saveBlogIntro;

  useEffect(() => {
    dispatch(getBlogintroAction());
  }, [deleteSuccess]);

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete Item`)) {
      dispatch(deleteIntroAction(id));
      toast.success("Deleted successfuly");

    }
  };

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
              to="/blog-intro-generator"
            >
              Create Blog Intro
            </Link>
            <br />

            <div className="cards-container">
              {loading && <Loader />}
              {error && <div className=" bar error">{error}</div>}
              {articleError && <div className=" bar error">{articleError}</div>}
              {message && <div className=" bar success">{message}</div>}
              <Toaster />

              {blogs &&
                blogs.map((blog) => (
                  <div className="card relative" key={blog.id}>
                    <p>{blog.intro}.....</p>
                    <Link to={`/all_intro/${blog.id}`}>Read more</Link>
                    <br />
                    <MdDelete
                      onClick={() => handleDelete(blog.id)}
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

export default ALLBlogIntro;
