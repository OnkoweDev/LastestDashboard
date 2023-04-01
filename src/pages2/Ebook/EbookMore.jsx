import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SideNav, TopNav, Voice, HomepageData } from "../../components";
import Loader from "../../components/Loader";
import "../styles/Home.css";
import { getOneEbookAction } from "../../actions/backend/ebookAction";

const EbookMore = () => {
  // state to hold the data comimg from the database / backend
  //const [data, setData] = useState(HomepageData);
  const [article, setArticle] = useState([])

  const dispatch = useDispatch()
  const getOneEbook = useSelector((state)=>state.getOneEbook)
  const {loading,error,Ebook} = getOneEbook

  const {id} = useParams();
  //const data = [wroter]
  //console.log(data)

  useEffect(() => {
    dispatch(getOneEbookAction(id))
    
  }, [])
  
 

  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
                {loading && <Loader />}
                {error && <div className=' bar error'>{error}</div>}
                {Ebook && Ebook.map((con)=>(
                    <div key={con.id}className="cards-container"  style={{ position: "relative", lineHeight:"2em",fontSize:"1.2em",height:"100%" }}>
                        
                        {con.generated_ebook}  
                                      
                    </div>
                ))}
                <br />
                <Link   style={{width:'150px', textAlign:"center", padding:"3px,0px,0px,0px"}} to="/all_ebook">Back</Link>    
          </div>
        </div>
      </main>
    </>
  );
}; 

export default EbookMore;
