import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteArticleAction, getArticleAction } from "../../actions/backend/articleWritterAction";
import { deleteContentRepreAction, getContentRepreAction } from "../../actions/backend/contentRepreAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { MdDelete } from "react-icons/md";

const AllContentRepre = () => {
  // state to hold the data comimg from the database / backend
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()
  const getContent = useSelector((state)=>state.getContent)
  const {loading,error,content} = getContent

  const deleteRepresal = useSelector((state)=>state.deleteRepresal)
  const {loading:deleteLoading,error:deleteError,success} = deleteRepresal

  const saveContent = useSelector((state)=>state.saveContent)
  const  {loading:articleLoading,error:articleError} = saveContent

  useEffect(() => {
    dispatch(getContentRepreAction())
  }, [success])
  
  const handleDelete = (id) =>{
    if(window.confirm(`Are you sure you want to delete Item`)){
    dispatch(deleteContentRepreAction(id))
    setMessage("Item deleted Successful")
    setTimeout(()=>{
        setMessage("")
    },4000)
    }
   
}

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
              to="/content-rephraser"
            >
              Add Content Represal
            </Link>
            <br />

            <div className="cards-container">
              {loading && <Loader />}
              {articleError && <div className=" bar error">{articleError}</div>}
              {error && <div className=" bar error">{error}</div>}

              {content &&
                content.map((con) => (
                  <div className="card relative" key={con.id}>
                    <p>{con.content.slice(0, 300)}.....</p>
                    <Link to={`/content/${con.id}`}>Read more</Link>
                    <br />
                    <MdDelete
                      onClick={() => handleDelete(con.id)}
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

export default AllContentRepre;
