import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import {
  deleteSectionAction,
  getSectionAction,
} from "../../actions/backend/blogSectionAction";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const AllBlogSection = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const getBlogSection = useSelector((state) => state.getBlogSection);
  const { loading, error, blogs } = getBlogSection;
  const navigate = useNavigate()


  const deleteBlogSection = useSelector((state) => state.deleteBlogSection);
  const {
    loading: deleteLoading,
    error: deleteError,
    success,
  } = deleteBlogSection;

  const saveBlogSection = useSelector((state) => state.saveBlogSection);
  const { loading: articleLoading, error: articleError } = saveBlogSection;

  useEffect(() => {
    dispatch(getSectionAction());
  }, [success]);

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete Item`)) {
      dispatch(deleteSectionAction(id));
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
              to="/blog-section-generator"
            >
              Create Blog Section
            </Link>
            <br />

            <div className="cards-container">
              {loading && <Loader />}
              {error && <div className=" bar error">{error}</div>}
              {articleError && <div className=" bar error">{articleError}</div>}
              {message && <div className=" bar success">{message}</div>}
              <Toaster />

              {blogs &&
                blogs.slice(0, 10).map((blog) => (
                  <div className="card relative" key={blog.id}>
                    <p>{blog.section.slice(0, 300)}....</p>
                    <Link to={`/blogsection/${blog.id}`}>Read more</Link>
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

export default AllBlogSection;
