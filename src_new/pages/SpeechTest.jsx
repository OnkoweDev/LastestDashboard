import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { viewMyEbook } from '../actions/ebookaction'

const SpeechTest = () => {
   
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const AddEbook = useSelector((state)=>state.AddEbook)
  const viewEbook = useSelector((state)=>state.viewEbook)
  const userLogin = useSelector((state)=>state.userLogin)

  const {loading,error,success} = AddEbook
  const {loading:ebookloading,error:ebookError,ebooks,success:viewSuccess} = viewEbook
  const {userInfo} = userLogin

    const data = []
    ebooks && ebooks.forEach(function(ebook){
        if(Array.isArray(ebook)){
            ebook.forEach(function(book){
                console.log(book)
                data.push(book)
               // console.log(data)
            })
        }
     }) 
 

    
  useEffect(() => {
    dispatch(viewMyEbook())
    if(!userInfo){
        navigate('/')
    }
  }, [success])
  
    
  return (
    <>
        <div>
            <table style={{border:"1px solid gray"}}>
                
                <th>Blog Title</th>
                <th>Generated blog</th>
                <tbody>
                {   data && data.slice(0,1).map((dat)=>(

                    <tr>
                       
                       <td>{dat.blog_topic}</td>
                       <td>{dat.generated_topics}</td>
                        
                    </tr>
                        ))
                      }
                </tbody>
                
            </table>
        </div>
    </>
  )
}

export default SpeechTest