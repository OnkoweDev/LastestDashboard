import React, { useEffect, useState } from "react";
import { SideNav, TopNav, Voice, HomepageData, Modal } from "../components";
import "./styles/Home.css";

import youtube from "../assets/icon/9.png";
import facebook from "../assets/icon/facebook.png";
import gmail from "../assets/icon/19.png";
import blog from "../assets/icon/35.png";
import linkedIn from "../assets/icon/7.png";
import instagram from "../assets/icon/4.png";
import twitter from "../assets/icon/2.png";
import google from "../assets/icon/3.png";
import feed from "../assets/icon/15.png";
import audio from "../assets/icon/31.png";
import image from "../assets/icon/36.png";
import paragraph from "../assets/icon/29.png";
import ebook from "../assets/icon/23.png";
import landing from "../assets/icon/26.png";
import language from "../assets/icon/12.png";
import proname from "../assets/icon/13.png";
import content2 from "../assets/icon/27.png";
import con from "../assets/icon/14.png";
import writerkk from "../assets/icon/5.png";
import conclu from "../assets/icon/27.png";



import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { Loader2 } from "lucide-react";
import { getYoutubeAction } from "../actions/backend/youtubeAction";
import { getTweetAction } from "../actions/backend/tweetAction";
import { getFacebookAdsAction } from "../actions/backend/facebookAction";
import { getEmailGenAction } from "../actions/backend/emailGeneratorAction";
import { getSubjectAction } from "../actions/backend/emailSubjectAction";
import { getBlogintroAction } from "../actions/backend/blogIntroAction";
import { getBlogWriterAction } from "../actions/backend/blogWriterAction";
import { getLinkAction } from "../actions/backend/linkPostAction";
import { getParagraphAction } from "../actions/backend/paragraphAction";
import { getEbookAction } from "../actions/backend/ebookAction";
import { getLinkAdsAction } from "../actions/backend/linkdinAdsAction";
import { getInstagramAction } from "../actions/backend/instagramCapAction";
import { getGoogleAdsAction } from "../actions/backend/googleAdsAction";
import { getGoogleTitleAction } from "../actions/backend/googleTitleAction";
import { getSectionAction } from "../actions/backend/blogSectionAction";
import { getAudioAction } from "../actions/backend/audioAction";
import { getLandingHeadlineAction } from "../actions/backend/landingHeadlineAction";
import { BsFillTabletLandscapeFill } from "react-icons/bs";
import { getLandingPageAction } from "../actions/backend/landingPageAction";
import { getLanguageAction } from "../actions/backend/languageAction";
import { getProductNameAction } from "../actions/backend/productNameAction";
import { getContentRepreAction } from "../actions/backend/contentRepreAction";
import { getArticleAction } from "../actions/backend/articleWritterAction";
import { getConclusionAction } from "../actions/backend/conclusionAction";
import { getYoutubeDescAction } from "../actions/backend/youtubeDescAction";
import { getProductDescAction } from "../actions/backend/productDescAction";


const Home = () => {
  
  //youtube 
  const getYoutube = useSelector((state)=>state.getYoutube)
  const {loading:youtubeLoading,error,youtubes,success:successYoutube} = getYoutube

  //tweeter
  const getTweet = useSelector((state)=>state.getTweet)
  const {loading:TweetLoading,tweeters} = getTweet

  //facebook
  const getFacebook = useSelector((state)=>state.getFacebook)
  const {loading:faceLoading,facebooks} = getFacebook

  //gmail
  const getEmail = useSelector((state)=>state.getEmail)
  const {loading:emailLoading,emails} = getEmail

  //gmailSubject
  const getSubject = useSelector((state)=>state.getSubject)
  const {loading:SubjectLoading,subjects} = getSubject

  const getBlogIntro = useSelector((state) => state.getBlogIntro);
  const { loading:blogIntroLoading, blogs } = getBlogIntro;

  const getBlogWriter = useSelector((state)=>state.getBlogWriter)
  const {loading:rewriterLoading,blogs:blogRewritter} = getBlogWriter

  const getLinkPost = useSelector((state)=>state.getLinkPost)
  const {loading:linkLoading,links} = getLinkPost

  const getParagraph = useSelector((state)=>state.getParagraph)
  const {loading:paragraphLoading,paragraphs} = getParagraph

  const getEbook = useSelector((state)=>state.getEbook)
  const {loading:ELoading,Ebooks} = getEbook

  const getLinkedinAds = useSelector((state)=>state.getLinkedinAds)
  const {loading,links:Linkdlin} = getLinkedinAds

  const getInstagram = useSelector((state)=>state.getInstagram)
  const {loading:insLoading,instagrams} = getInstagram

  const getGoogleAds = useSelector((state)=>state.getGoogleAds)
  const {loading:googleLoading,GoogleAds} = getGoogleAds

  const getTitle = useSelector((state)=>state.getTitle)
  const {loading:titleLoading,titles} = getTitle

  const getBlogSection = useSelector((state) => state.getBlogSection);
  const { loading:sectionLoading, blogs:Section } = getBlogSection;

  const getAudio = useSelector((state) => state.getAudio);
  const { loading:AudioLoading, audios } = getAudio;

  const getHeadline = useSelector((state)=>state.getHeadline)
  const {loading:landingLoading,Landings} = getHeadline

  const getLandingPage = useSelector((state)=>state.getLandingPage)
  const {loading:LandingPage,LandingPages} = getLandingPage

  const getLanguage = useSelector((state)=>state.getLanguage)
  const {loading:LanguageLoading,languages} = getLanguage

  const getProductDesc = useSelector((state)=>state.getProductDesc)
  const {loading:proLoading,productDescs} = getProductDesc

  const getProductName = useSelector((state)=>state.getProductName)
  const {loading:productNameLoading,productNames} = getProductName

  const getContent = useSelector((state)=>state.getContent)
  const {loading:loadingContent,content} = getContent

  const getOneBlogTopic = useSelector((state)=>state.getOneBlogTopic)
  const {loading:loadingTopic,topic} = getOneBlogTopic

  const getArticleWriter = useSelector((state)=>state.getArticleWriter)
  const {loading:writterLoading,writer} = getArticleWriter

  const getConclusion = useSelector((state)=>state.getConclusion)
  const {loading:loadingConclusion,conclusions} = getConclusion

  const getYoutubeDesc = useSelector((state)=>state.getYoutubeDesc)
  const {loading:youtubeDescConclusion,youtubesDescs} = getYoutubeDesc

  const dispatch = useDispatch()

 

  useEffect(() => {
    dispatch(getYoutubeAction())
    dispatch(getTweetAction())
    dispatch(getFacebookAdsAction())
    dispatch(getEmailGenAction())
    dispatch(getSubjectAction())
    dispatch(getBlogintroAction())
    dispatch(getBlogWriterAction())
    dispatch(getLinkAction())
    dispatch(getParagraphAction())
    dispatch(getEbookAction())
    dispatch(getLinkAdsAction())
    dispatch(getInstagramAction())
    dispatch(getGoogleAdsAction())
    dispatch(getGoogleTitleAction())
    dispatch(getSectionAction());
    dispatch(getAudioAction());
    dispatch(getLandingHeadlineAction())
    dispatch(getLandingPageAction())
    dispatch(getLanguageAction())
    dispatch(getProductNameAction())
    dispatch(getContentRepreAction())
    dispatch(getArticleAction())
    dispatch(getConclusionAction())
    dispatch(getYoutubeDescAction())
    dispatch(getProductDescAction())

    


  }, [])

 
  

  

  return (
    <>
      <main>
        <TopNav />
        
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="saved-draft-text">
            <p>Your Draft is Saved Here</p>
            </div>
            <div className="scrollable-content">
            <div className="cards-container">

           
             
            {
              youtubes && youtubes.length > 0 &&
              <div className="card">
                <Link to="/all_youtube">
                  <img src={youtube} className="icon" alt="YouTube" />
                  <b>Youtube</b>
                </Link>
              </div>
            }

         
             
            {
              tweeters && tweeters.length > 0 &&
              <div className="card">
                <Link to="/all_tweet">
                  <img src={twitter} alt="" />
                  <b>Twitter Post</b>
                </Link>
              </div>
            }

            
            {
              facebooks && facebooks.length > 0 && 
              <div className="card">
                <Link to="/allfacebookads">
                  <img src={facebook} />
                  {/* <FaFacebookF className="icon" style={{ color: "#4267b2" }} /> */}
                  <b>Facebook Ads</b>
                </Link>
              </div>
            }

           

            {emails && emails.length > 0 && 
              <div className="card">
                <Link to="/allemail">
                  <img src={gmail} />
                  {/* <FaMailBulk className="icon" style={{ color: "#3357c0" }} /> */}
                  <b>Email</b>
                </Link>
              </div>
            }

           
            {subjects && subjects.length > 0 &&
              <div className="card">
              <Link to="/allemailSubject">
                <img src={gmail} />
                {/* <FaMailBulk className="icon" style={{ color: "#3357c0" }} /> */}
                <b>Email Subject</b>
              </Link>
            </div>
            }

            

            {blogs && blogs.length > 0 &&
              <div className="card">
                <Link to="/all_intro">
                  <img src={blog} />
                  {/* <TfiWrite className="icon" style={{ color: "#002366" }} /> */}
                  <b>Blog Intro</b>
                </Link>
            </div>
            }

         
            {blogRewritter && blogRewritter.length > 0 &&
              
              <div className="card">
                <Link to="/allblogs">
                  <img src={blog} />
                  {/* <FaBloggerB className="icon" style={{ color: "#fc4f08" }} /> */}
                  <b>Blog Article</b>
                </Link>
              </div>
            }

           

            {links && links.length > 0 &&
              
              <div className="card">
                <Link to="/all_link_post">
                  <img src={linkedIn} alt="" />
                  {/* <BsLinkedin className="icon" style={{ color: "#4267b2" }} /> */}
                  <b>Short Linkdlin Post</b>
                </Link>
              </div>
            }

          

            {paragraphs && paragraphs.length > 0 &&
              
              <div className="card">
                <Link to="/all_paragraph">
                  {<img src={paragraph} alt="" />}
                  <b>Paragraph</b>
                </Link>
              </div>
            }

           
            {Ebooks && Ebooks.length > 0 &&
              <div className="card">
                <Link to="/all_ebook">
                  {<img src={ebook} alt="" />}
                  <b>Ebook</b>
                </Link>
              </div>
            
            }
             
           
            {Linkdlin && Linkdlin.length > 0 &&
              <div className="card">
                <Link to="/all_linkedin_ads">
                  <img src={linkedIn} alt="" />
                  <b>Linkdlin Ads</b>
                </Link>
              </div> 
            }

            
            {instagrams && instagrams.length > 0 &&
              <div className="card">
              <Link to="/allinstagram">
                <img src={instagram} alt="" />
                <b>Instagram Post</b>
              </Link>
            </div>
            }

            
            {GoogleAds && GoogleAds.length > 0 &&
              <div className="card">
                <Link to="/allgoogleads">
                  <img src={google} alt="" />
                  <b>Google Ads</b>
                </Link>
              </div>
            }

            
            {titles && titles.length > 0 &&
              <div className="card">
              <Link to="/alltitle">
                <img src={google} alt="" />
                <b>Google Title</b>
              </Link>
            </div>
            }

           
            {Section && Section.length > 0 &&
              <div className="card">
              <Link to="/blogsection">
                <img src={feed} alt="" />
                <b>Blog Section</b>
              </Link>
            </div>
            }

           
              {audios && audios.length > 0 &&
                <div className="card">
                <Link to="/all_audio">
                  <img src={audio} alt="" />
                  <b>Transcribed Audio</b>
                </Link>
              </div>
              }
              
             
              {Landings && Landings.length > 0 &&
                <div className="card">
                <Link to="/all_landing_headline">
                  <img src={landing} alt="" />
                  <b>Landing Page Headline Generator</b>
                </Link>
              </div>
              }

              
              {LandingPages && LandingPages.length > 0 &&
                <div className="card">
                <Link to="/all_landing">
                  <img src={landing} alt="" />
                  <b>Landing Page </b>
                </Link>
              </div>
              }

              
              {languages && languages.length > 0 &&
                <div className="card">
                <Link to="/language">
                  <img src={language} alt="" />
                  <b>Language </b>
                </Link>
              </div>
              }

              
              {productDescs && productDescs.length > 0 &&
                <div className="card">
                <Link to="/all_productDesc">
                  <img src={landing} alt="" />
                  <b>Product Description</b>
                </Link>
              </div>
              }


             
              {productNames && productNames.length > 0 &&
                <div className="card">
                <Link to="/all_product_name">
                  <img src={proname} alt="" />
                  <b>Product Name Generator</b>
                </Link>
              </div>
              }

             
              {content && content.length > 0 &&
                <div className="card">
                <Link to="/content">
                  <img src={con} alt="" />
                  <b>Content Rephrasal</b>
                </Link>
              </div>
              }

            
              {topic && topic.length > 0 &&
                <div className="card">
                <Link to="/all_blog_topic">
                  <img src={content2} alt="" />
                  <b>Blog Topic</b>
                </Link>
              </div>
              }

            
              {writer && writer.length > 0 &&
                <div className="card">
                <Link to="/allArticle">
                  <img src={writerkk} alt="" />
                  <b>Article/Blog Writer</b>
                </Link>
              </div>
              }

              
             
              {conclusions && conclusions.length > 0 &&
                <div className="card">
                <Link to="/conclusion">
                  <img src={conclu} alt="" />
                  <b>Article/Blog Conclusion</b>
                </Link>
              </div>
              }

              {youtubesDescs && youtubesDescs.length > 0 &&
                <div className="card">
                <Link to="/all_youtubeDesc">
                  <img src={youtube} alt="" />
                  <b>Youtube Description Generation</b>
                </Link>
              </div>
              }

              


            
                
             
              </div>
            </div>
            {/* <Voice /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
