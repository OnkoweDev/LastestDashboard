import React, { useState } from 'react'

const PaymentCard = () => {

    const [isAnnualSubscription, setAnnualSubscription] = useState(false);

    const handleSubscriptionToggle = () => {
        setAnnualSubscription(!isAnnualSubscription);
    };

    const starterPlanPrice = isAnnualSubscription ? 10 * 9.6 : 10;
    const elitePlanPrice = isAnnualSubscription ? 15 * 9.6 : 15;
    const professionalPlanPrice = isAnnualSubscription ? 25 * 9.6 : 25;


  return (
        <div className='w-full py-10 px-8 bg-[#FFFFFF]'>
        <div className='w-full mb-10 border-b p-10'>
          <h1>Plan and Billing</h1>
          <h1 className='text-sm'>Choose your preferred plan and begin creating magic.</h1>
        </div>

            <div className='w-full flex flex-col text-center justify-center items-center'>
                <h1 className='font-bold text-4xl'>Pricing</h1>               
                        <div className='flex justify-end mt-4'>
                                <label className='switch'>
                                <input type='checkbox' onChange={handleSubscriptionToggle} />
                                <span className='slider'></span>
                                </label>
                                <p className='ml-2'>{isAnnualSubscription ? 'Annual' : 'Monthly'}</p>
                                <br />
                        </div>
                        <p className='p-3'>Save 20% with annual plan</p>
            </div>
        <div className='max-w-[1240px] py-[3rem] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full border border-gray-200 shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300'>              
                <h2 className='text-1xl font-bold text-center py-8 border-b'>STARTER PLAN (${starterPlanPrice})</h2>
                <div className='text-center text-1xl font-bold pt-3 border-b p-2'>
                    <p>100k Words</p> 
                    <p>20 Image Generation</p>
                    <p>3hrs Audio Transcription</p>
                </div>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-3 font-bold'>Social Media</p>
                    
                        <p className='py-2 border-b mx-8'> Short LinkedIn Posts</p>
                        <p className='py-2 border-b mx-8'>Tweets Creator</p>
                        <p className='py-2 border-b mx-8'>Youtube Intro Creator</p>
                        <p className='py-2 border-b mx-8'>Youtube Description Creator</p>
                        <p className='py-2 border-b mx-8'>Google Ad Description Creator</p>
                        <p className='py-2 border-b mx-8'>LinkedIn Ad Description Creator</p>
                        <p className='py-2 border-b mx-8'>Short Linkedin Posts</p>
                        <p className='py-2 border-b mx-8'>Google Ad Title Creator</p>
                        <p className='py-2 border-b mx-8'>Instagram Captions Creator</p>
                        <p className='py-2 border-b mx-8'>Facebook Ad Creator</p>

                    <p className='py-2 border-b mx-8 mt-3  font-bold'>Blog and Articles</p>
                        
                            <p className='py-2 border-b mx-8'>Blog Topic Creator</p>
                            <p className='py-2 border-b mx-8'>Blog Intro Creator</p>
                            <p className='py-2 border-b mx-8'>Blog Section Creator</p>
                            <p className='py-2 border-b mx-8'>Blog Article Writer</p>
                            <p className='py-2 border-b mx-8'>Content Rephraser</p>
                            <p className='py-2 border-b mx-8'>Article/Blog Conclusion Creator</p>
                            <p className='py-2 border-b mx-8'>Article Rewriter</p>
                            <p className='py-2 border-b mx-8'>Article/Blog Summary Creator</p>
                            <p className='py-2 border-b mx-8'>Paragraph Writer</p>

                    <p className='py-2 border-b mx-8 mt-3  font-bold'>E-commerce</p>
                        
                            <p className='py-2 border-b mx-8'>Product Description Creator</p>
                            <p className='py-2 border-b mx-8'>Product Name Creator</p>

                    <p className='py-2 border-b mx-8 mt-3  font-bold'>E-mail</p>
                        
                            <p className='py-2 border-b mx-8'> Email Generator</p>
                            <p className='py-2 border-b mx-8'>Email Subject Lines Generator</p>

                    <p className='py-2 border-b mx-8 mt-3  font-bold'>E-book</p>
                            <p className='py-2 border-b mx-8'>E-book Creator</p>

                    <p className='py-2 border-b mx-8 mt-3  font-bold'>Landing Page</p>
                        
                            <p className='py-2 border-b mx-8'>Landing Page Headline Generator</p>
                            <p className='py-2 border-b mx-8'>Landing Page Generator</p>

                            <p className='py-2 border-b mx-8 mt-3  font-bold'>Image Creator (Standard)</p>
                            <p className='py-2 border-b mx-8 mt-3  font-bold'>Translation (12 Languages)</p>
                            <p className='py-2 border-b mx-8 mt-3  font-bold'>Audio Transcription( 15+ Languages)</p>
                </div>
                <button className='bg-[#559FFF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Upgrade</button>
               

            </div>

            <div className='w-full border border-gray-200 shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300'>
            <h2 className='text-1xl font-bold text-center py-8 border-b'>ELITE PLAN (${elitePlanPrice})</h2>
            <div className='text-center text-1xl font-bold pt-3 border-b p-2'>
           
                <p>150k Words</p> 
                <p>27 Image Generation</p>
                <p>5hrs Audio Transcription</p>
            </div>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-3 font-bold'>Social Media</p>
                
                    <p className='py-2 border-b mx-8'>Short LinkedIn Posts</p>
                    <p className='py-2 border-b mx-8'>Tweets Creator</p>
                    <p className='py-2 border-b mx-8'>Youtube Intro Creator</p>
                    <p className='py-2 border-b mx-8'>Youtube Description Creator</p>
                    <p className='py-2 border-b mx-8'>Google Ad Description Creator</p>
                    <p className='py-2 border-b mx-8'>LinkedIn Ad Description Creator</p>
                    <p className='py-2 border-b mx-8'>Short Linkedin Posts</p>
                    <p className='py-2 border-b mx-8'>Google Ad Title Creator</p>
                    <p className='py-2 border-b mx-8'>Instagram Captions Creator</p>
                    <p className='py-2 border-b mx-8'>Facebook Ad Creator</p>

                <p className='py-2 border-b mx-8 mt-3  font-bold'>Blog and Articles</p>
                    
                        <p className='py-2 border-b mx-8'>Blog Topic Creator</p>
                        <p className='py-2 border-b mx-8'>Blog Intro Creator</p>
                        <p className='py-2 border-b mx-8'>Blog Section Creator</p>
                        <p className='py-2 border-b mx-8'>Blog Article Writer</p>
                        <p className='py-2 border-b mx-8'>Content Rephraser</p>
                        <p className='py-2 border-b mx-8'>Article/Blog Conclusion Creator</p>
                        <p className='py-2 border-b mx-8'>Article Rewriter</p>
                        <p className='py-2 border-b mx-8'>Article/Blog Summary Creator</p>
                        <p className='py-2 border-b mx-8'>Paragraph Writer</p>

                <p className='py-2 border-b mx-8 mt-3  font-bold'>E-commerce</p>
                    
                        <p className='py-2 border-b mx-8'>Product Description Creator</p>
                        <p className='py-2 border-b mx-8'>Product Name Creator</p>

                <p className='py-2 border-b mx-8 mt-3  font-bold'>E-mail</p>
                    
                        <p className='py-2 border-b mx-8'> Email Generator</p>
                        <p className='py-2 border-b mx-8'>Email Subject Lines Generator</p>

                <p className='py-2 border-b mx-8 mt-3  font-bold'>E-book</p>
                        <p className='py-2 border-b mx-8'>E-book Creator</p>

                <p className='py-2 border-b mx-8 mt-3  font-bold'>Landing Page</p>
                    
                        <p className='py-2 border-b mx-8'>Landing Page Headline Generator</p>
                        <p className='py-2 border-b mx-8'>Landing Page Generator</p>

                        <p className='py-2 border-b mx-8 mt-3  font-bold'>Image Creator (Standard)</p>
                        <p className='py-2 border-b mx-8 mt-3  font-bold'>Translation (12 Languages)</p>
                        <p className='py-2 border-b mx-8 mt-3  font-bold'>Audio Transcription( 15+ Languages)</p>
            </div>
            <button className='bg-[#559FFF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Upgrade</button>
           

             </div>


        <div className='w-full border border-gray-200 shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300'>
                <h2 className='text-1xl font-bold text-center py-8 border-b'>PROFESSIONAL PLAN (${professionalPlanPrice})</h2>
                <div className='text-center text-1xl font-bold pt-3 border-b p-2'>
                    <p>250k Words</p> 
                    <p>40 Image Generation</p>
                    <p>10hrs Audio Transcription</p>
                </div>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-3 font-bold'>Social Media</p>
                    
                        <p className='py-2 border-b mx-8'>Short LinkedIn Posts</p>
                        <p className='py-2 border-b mx-8'>Tweets Creator</p>
                        <p className='py-2 border-b mx-8'>Youtube Intro Creator</p>
                        <p className='py-2 border-b mx-8'>Youtube Description Creator</p>
                        <p className='py-2 border-b mx-8'>Google Ad Description Creator</p>
                        <p className='py-2 border-b mx-8'>LinkedIn Ad Description Creator</p>
                        <p className='py-2 border-b mx-8'>Short Linkedin Posts</p>
                        <p className='py-2 border-b mx-8'>Google Ad Title Creator</p>
                        <p className='py-2 border-b mx-8'>Instagram Captions Creator</p>
                        <p className='py-2 border-b mx-8'>Facebook Ad Creator</p>

                    <p className='py-2 border-b mx-8 mt-3  font-bold'>Blog and Articles</p>
                        
                            <p className='py-2 border-b mx-8'>Blog Topic Creator</p>
                            <p className='py-2 border-b mx-8'>Blog Intro Creator</p>
                            <p className='py-2 border-b mx-8'>Blog Section Creator</p>
                            <p className='py-2 border-b mx-8'>Blog Article Writer</p>
                            <p className='py-2 border-b mx-8'>Content Rephraser</p>
                            <p className='py-2 border-b mx-8'>Article/Blog Conclusion Creator</p>
                            <p className='py-2 border-b mx-8'>Article Rewriter</p>
                            <p className='py-2 border-b mx-8'>Article/Blog Summary Creator</p>
                            <p className='py-2 border-b mx-8'>Paragraph Writer</p>

                    <p className='py-2 border-b mx-8 mt-3  font-bold'>E-commerce</p>
                        
                            <p className='py-2 border-b mx-8'>Product Description Creator</p>
                            <p className='py-2 border-b mx-8'>Product Name Creator</p>

                    <p className='py-2 border-b mx-8 mt-3  font-bold'>E-mail</p>
                        
                            <p className='py-2 border-b mx-8'> Email Generator</p>
                            <p className='py-2 border-b mx-8'>Email Subject Lines Generator</p>

                    <p className='py-2 border-b mx-8 mt-3  font-bold'>E-book</p>
                            <p className='py-2 border-b mx-8'>E-book Creator</p>

                    <p className='py-2 border-b mx-8 mt-3  font-bold'>Landing Page</p>
                        
                            <p className='py-2 border-b mx-8'>Landing Page Headline Generator</p>
                            <p className='py-2 border-b mx-8'>Landing Page Generator</p>

                            <p className='py-2 border-b mx-8 mt-3  font-bold'>Image Creator (Standard)</p>
                            <p className='py-2 border-b mx-8 mt-3  font-bold'>Translation (12 Languages)</p>
                            <p className='py-2 border-b mx-8 mt-3  font-bold'>Audio Transcription( 15+ Languages)</p>
                </div>
                <button className='bg-[#559FFF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Upgrade</button>
               

            </div>

           

           
        </div>
    </div>
  ) 
}

export default PaymentCard