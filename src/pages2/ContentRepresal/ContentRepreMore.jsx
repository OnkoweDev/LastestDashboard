import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneContentRepreAction } from "../../actions/backend/contentRepreAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const ContentRepreMore = () => {
  // state to hold the data comimg from the database / backend
  //const [data, setData] = useState(HomepageData);
  const [article, setArticle] = useState([])

  const dispatch = useDispatch()
  const getOneContent = useSelector((state)=>state.getOneContent)
  const {loading,error,contents} = getOneContent

  const {id} = useParams();
  //const data = [wroter]
  ////console.log(data)

  useEffect(() => {
    dispatch(getOneContentRepreAction(id))
    
  }, [])

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
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                {contents && contents.map((con)=>(
                    <div key={con.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%",whiteSpace: 'pre-wrap' }}>
                        {con.content}  
                                      
                    </div>
                ))}
                <br />
                <Link   style={{width:'150px', textAlign:"center", padding:"3px,0px,0px,0px"}} to="/content">Back</Link>    
          </div>
        </div>
      </main>
    </>
  );
}; 

export default ContentRepreMore;
