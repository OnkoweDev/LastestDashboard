import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Upload.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduploadAction } from "../actions/backend/uploadAction";
import Loader from "../components/Loader";

const Upload = () => {

  const [upload, setUpload] = useState()
  const dispatch = useDispatch()
  
  const handleChange = (event) => {
    setUpload(event.target.files[0])
}
const saveUpload = useSelector((state)=>state.saveUpload)
const {error,success,loading} = saveUpload

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(upload)

    const formData = new FormData();
    formData.append('file', upload);
    formData.append('fileName', upload.name);
    dispatch(adduploadAction(formData))
  }

  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
          {loading && <Loader />}
          {error && <div className='bar error'>{error}</div>}
            <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleChange} />
            <br />  
            <br />
              <button className="article-btn" style={{ fontSize: "14px",width:"100px" }}>
                upload
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Upload;
