import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneEmailGenAction } from "../../actions/backend/emailGeneratorAction";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";

const EmailMore = () => {
  // state to hold the data comimg from the database / backend
  //const [data, setData] = useState(HomepageData);
  const [article, setArticle] = useState([])

  const dispatch = useDispatch()
  const getOneEmail = useSelector((state)=>state.getOneEmail)
  const {loading,error,email} = getOneEmail

  const {id} = useParams();
  //const data = [wroter]
  ////console.log(data)

  useEffect(() => {
    dispatch(getOneEmailGenAction(id))
    
  }, [])
  
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
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                {email && email.map((con)=>(
                    <div key={con.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%", whiteSpace: 'pre-wrap'  }}>
                        {con.email_generator}  
                                      
                    </div>
                ))}
                <br />
                <Link   style={{width:'150px', textAlign:"center", padding:"3px,0px,0px,0px"}} to="/email">Back</Link>    
          </div>
        </div>
      </main>
    </>
  );
}; 

export default EmailMore;
