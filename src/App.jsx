import "./components/styles/error.css";
import "regenerator-runtime/runtime";
import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Draft,
  Upload,
  Home,
  Font,
  Resources,
  Theme,
  Transcribe,
  Collaborate,
  Ebook,
  Instagram,
  LinkedIn,
  Youtube,
  ProductDesc,
  ContentRephraser,
  ArticleBlog,
  BlogWriter,
  BlogIntro,
  BlogSection,
  ParagraphWriter,
  Tweets,
  PDFDownload,
  MSDownload,
  Profile,
  Notification,
  Password,
  Preference,
} from "../src/components/index";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SpeechTest from "./pages/SpeechTest";
import TTR from "./pages/blogTest";
import ArticleRewriter from "./pages/ArticleRewriter";
import YoutubeGenerator from "./pages/YoutubeGenerator";
import LindlnAds from "./pages/LinkdlnAds";
import GoogleAds from "./pages/GoogleAds";
import GoogleTitle from "./pages/GoogleTitle";
import Facebook from "./pages/Facebook";
import ProductName from "./pages/ProductName";
import EmailSubject from "./pages/EmailSubject";
import EmailGenerator from "./pages/EmailGen";
import LandingPage from "./pages/LandingPage";
import BlogTopic from "./pages/BlogTopic";
import Land from "./pages/land";
import ImageGen from "./pages/ImageGen";
import Audio from "./pages/Audio";
import French from "./Language/French";
import Spanish from "./Language/Spanish";
import German from "./Language/German";
import Hausa from "./Language/Hausa";
import Igbo from "./Language/Igbo";
import Yoruba from "./Language/Yoruba";
import Russian from "./Language/Russian";
import Portugish from "./Language/Portugish";
import Italian from "./Language/Italian";
import Japanese from "./Language/Japanese";
import Chinese from "./Language/Chinese";
import Project from "./pages/Project";
import Test from "./pages2/Test";
import ArticleRewriter2 from "./pages/ArticleRewriter2";
import ALLArticleRewritter from "./pages2/ArticleRewriter/ArticleRewritter";
import ArticleRewriterMore from "./pages2/ArticleRewriter/ArticleRewriterMore";
import UpdateArticle from "./pages2/ArticleRewriter/UpdateArticle";
import AllBlog from "./pages2/BlogWriter/blogwriter";
import BlogMore from "./pages2/BlogWriter/blogWritermore";
import UpdateBlog from "./pages2/BlogWriter/updateBlog";
import AllContentRepre from "./pages2/ContentRepresal/ContentRepresal";
import ContentRepreMore from "./pages2/ContentRepresal/ContentRepreMore";
import EmailGen from "./pages2/Email/EmailGen";
import EmailMore from "./pages2/Email/EmailMore";
import AllEmailSubject from "./pages2/EmailSubject/EmailSubject";
import EmailSubjectMore from "./pages2/EmailSubject/EmailSubjectMore";
import FacebookAds from "./pages2/FacebookAds/FacebookAds";
import FacebookMore from "./pages2/FacebookAds/FacebookMore";
import ALLGoogleAds from "./pages2/GoogleAds/GoogleAds";
import GoogleAdsMore from "./pages2/GoogleAds/GoogleAdsMore";
import AllTitles from "./pages2/GoogleTitles/GoogleTitles";
import GoogleTitleMore from "./pages2/GoogleTitles/GoogleTitleMore";
import AllInstagram from "./pages2/Instagram/Instagram";
import InstagramMore from "./pages2/Instagram/InstagramMore";
import AllLandingPage from "./pages2/LangingPage/LandingPage";
import LandingMore from "./pages2/LangingPage/LandPageMore";
import LandingHeadline from "./pages2/LandingHeadline/LandingHeadline";
import LandingHeadlineMore from "./pages2/LandingHeadline/LandingHeadlineMore";
import ALLPARAGRAPHWRITER from "./pages2/ParagraphWriter/ParagraphWriter";
import ParagraphMore from "./pages2/ParagraphWriter/ParagraphMore";
import ALLBlogIntro from "./pages2/BlogIntro/BlogIntro";
import BlogIntroMore from "./pages2/BlogIntro/BlogMore";
import AllBlogTopic from "./pages2/BlogTopic/AllBlogTopic";
import BlogTopicMore from "./pages2/BlogTopic/BlogTopicMore";
import AllProductName from "./pages2/ProductName/ProductName";
import ProductMore from "./pages2/ProductName/ProductNameMore";
import AllTweet from "./pages2/Tweet/Tweeter";
import TweetMore from "./pages2/Tweet/TweetMore";
import AllYoutube from "./pages2/Youtube/Youtube";
import YoutubeMore from "./pages2/Youtube/YoutubeMore";
import AllEbook from "./pages2/Ebook/Ebook";
import EbookMore from "./pages2/Ebook/EbookMore";
import AllLinkPost from "./pages2/LinkedinPost/Linkedin";
import LinkMore from "./pages2/LinkedinPost/LinkPostMore";
import Language from "./pages2/Language/Language";
import LanguageMore from "./pages2/Language/LanguageMore";
import Conclusion from "./pages2/Conclusion/Conclusion";
import ConclusionMore from "./pages2/Conclusion/ConclusionMore";
import AllBlogSection from "./pages2/BlogSection/BlogSection";
import BlogSectionMore from "./pages2/BlogSection/BlogSectionMore";
import AllLinkAds from "./pages2/LinkedinAds/LinkedinAds";
import LinkAdsMore from "./pages2/LinkedinAds/LinkedinAdsMore";
import AllAudio from "./pages2/Audio/Audio";
import AudioMore from "./pages2/Audio/AudioMore";
import AllImage from "./pages2/Image/Image";
import ImageMore from "./pages2/Image/ImageMore";
import AllProject from "./pages2/Project/Project";
import ProjectMore from "./pages2/Project/ProjectMore";
import AllProductDesc from "./pages2/ProductDesc/ProductDesc";
import ProductDescMore from "./pages2/ProductDesc/ProductDescMore";
import Help from "./pages/Help";
import Suggest from "./pages/Suggest";
import ForgotPassword from "./pages/ForgotPassword";

import ResetPassword from "./pages/ResetPassword";

BlogMore

import SocialMedia from "./pages/SocialMedia";
import Commerce from "./pages/Commerce";
import BlogAndArticle from "./pages/BlogAndArticle";
import LandingP from "./pages/LandingP";
import Translate from "./pages/Translate";
import Email from "./pages/Email";
import LanguageTrans from "./Language/Language";

function App() {
  return (
    <React.Fragment>
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="font" element={<Font />} />
        <Route path="forgetpassword" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="resources" element={<Resources />} />
        <Route path="theme" element={<Theme />} />
        <Route path="transcribe" element={<Transcribe />} />
        <Route path="draft" element={<Draft />} />
        <Route path="collaborate" element={<Collaborate />} />
        <Route path="ebook" element={<Ebook />} />
        <Route path="blog-intro-generator" element={<BlogIntro />} />
        <Route path="blog-section-generator" element={<BlogSection />} />
        <Route path="instagram" element={<Instagram />} />
        <Route path="short-LinkedIn-posts" element={<LinkedIn />} />
        <Route path="blog-article-writer" element={<BlogWriter />} />
        <Route path="content-rephraser" element={<ContentRephraser />} />
        <Route path="youtube-intro-generator" element={<Youtube />} />
        <Route path="product" element={<ProductDesc />} />
        <Route path="article-blog-conclusion" element={<ArticleBlog />} />
        <Route path="paragraph-writer" element={<ParagraphWriter />} />
        <Route path="tweets-generation" element={<Tweets />} />
        <Route path="pdf-download" element={<PDFDownload />} />
        <Route path="MSword-download" element={<MSDownload />} />
        <Route path="profile" element={<Profile />} />
        <Route path="notification" element={<Notification />} />
        <Route path="password" element={<Password />} />
        <Route path="preference" element={<Preference />} />
        <Route path="speech" element={<SpeechTest />} />
        <Route path="test" element={<TTR />} />
        <Route path="articleRewriter" element={<ArticleRewriter />} />
        <Route path="youtube-generator" element={<YoutubeGenerator />} />
        <Route path="linkdlnads" element={<LindlnAds />} />
        <Route path="googleads" element={<GoogleAds />} />
        <Route path="googletitle" element={<GoogleTitle />} />
        <Route path="facebook" element={<Facebook />} />
        <Route path="productname" element={<ProductName />} />
        <Route path="emailsubject" element={<EmailSubject />} />
        <Route path="emailgenerator" element={<EmailGenerator />} />
        <Route path="landingpage" element={<LandingPage />} />
        <Route path="blogtopic" element={<BlogTopic />} />
        <Route path="land" element={<Land />} />
        <Route path="image" element={<ImageGen />} />
        <Route path="audio" element={<Audio />} />
        <Route path="french" element={<French />} />
        <Route path="spanish" element={<Spanish />} />
        <Route path="german" element={<German />} />
        <Route path="hausa" element={<Hausa />} />
        <Route path="igbo" element={<Igbo />} />
        <Route path="yoruba" element={<Yoruba />} />
        <Route path="russian" element={<Russian />} />
        <Route path="portugish" element={<Portugish />} />
        <Route path="italian" element={<Italian />} />
        <Route path="japanese" element={<Japanese />} />
        <Route path="chinese" element={<Chinese />} />
        <Route path="language-translation" element={<LanguageTrans />} />
        <Route path="project" element={<Project />} />
        <Route path="art" element={<ArticleRewriter2 />} />
        {/*  */}
        <Route path="social_media" element={<SocialMedia />} />
        <Route path="blog-and-articles" element={<BlogAndArticle />} />
        <Route path="commerce" element={<Commerce />} />
        <Route path="landing_page" element={<LandingP />} />
        <Route path="translate" element={<Translate />} />
        <Route path="email" element={<Email />} />
        // pages2
        <Route path="allArticle" element={<ALLArticleRewritter />} />
        <Route path="allArticle/:id" element={<ArticleRewriterMore />} />
        <Route path="update/:id" element={<UpdateArticle />} />
        <Route path="allblogs" element={<AllBlog />} />
        <Route path="allblogs/:id" element={<BlogMore />} />
        <Route path="updateBlog/:id" element={<UpdateBlog />} />
        <Route path="content" element={<AllContentRepre />} />
        <Route path="content/:id" element={<ContentRepreMore />} />
        <Route path="allemail" element={<EmailGen />} />
        <Route path="email/:id" element={<EmailMore />} />
        <Route path="allEmailSubject" element={<AllEmailSubject />} />
        <Route path="allEmailSubject/:id" element={<EmailSubjectMore />} />
        <Route path="allfacebookads" element={<FacebookAds />} />
        <Route path="allfacebookads/:id" element={<FacebookMore />} />
        <Route path="allgoogleads" element={<ALLGoogleAds />} />
        <Route path="allgoogleads/:id" element={<GoogleAdsMore />} />
        <Route path="alltitle" element={<AllTitles />} />
        <Route path="alltitle/:id" element={<GoogleTitleMore />} />
        <Route path="allinstagram" element={<AllInstagram />} />
        <Route path="allinstagram/:id" element={<InstagramMore />} />
        <Route path="all_landing" element={<AllLandingPage />} />
        <Route path="all_landing/:id" element={<LandingMore />} />
        <Route path="all_landing_headline" element={<LandingHeadline />} />
        <Route
          path="all_landing_headline/:id"
          element={<LandingHeadlineMore />}
        />
        <Route path="all_paragraph" element={<ALLPARAGRAPHWRITER />} />
        <Route path="all_paragraph/:id" element={<ParagraphMore />} />
        <Route path="all_intro" element={<ALLBlogIntro />} />
        <Route path="all_intro/:id" element={<BlogIntroMore />} />
        <Route path="all_blog_topic" element={<AllBlogTopic />} />
        <Route path="all_blog_topic/:id" element={<BlogTopicMore />} />
        <Route path="all_product_name" element={<AllProductName />} />
        <Route path="all_product_name/:id" element={<ProductMore />} />
        <Route path="all_tweet" element={<AllTweet />} />
        <Route path="all_tweet/:id" element={<TweetMore />} />
        <Route path="all_youtube" element={<AllYoutube />} />
        <Route path="all_youtube/:id" element={<YoutubeMore />} />
        <Route path="all_ebook" element={<AllEbook />} />
        <Route path="all_ebook/:id" element={<EbookMore />} />
        <Route path="all_link_post" element={<AllLinkPost />} />
        <Route path="all_link_post/:id" element={<LinkMore />} />
        <Route path="language" element={<Language />} />
        <Route path="language/:id" element={<LanguageMore />} />
        <Route path="conclusion" element={<Conclusion />} />
        <Route path="conclusion/:id" element={<ConclusionMore />} />
        <Route path="blogsection" element={<AllBlogSection />} />
        <Route path="blogsection/:id" element={<BlogSectionMore />} />
        <Route path="all_linkedin_ads" element={<AllLinkAds />} />
        <Route path="all_linkedin_ads/:id" element={<LinkAdsMore />} />
        <Route path="all_audio" element={<AllAudio />} />
        <Route path="all_audio/:id" element={<AudioMore />} />
        <Route path="all_image" element={<AllImage />} />
        <Route path="all_image/:id" element={<ImageMore />} />
        <Route path="all_project" element={<AllProject />} />
        <Route path="all_project/:id" element={<ProjectMore />} />
        <Route path="all_productDesc" element={<AllProductDesc />} />
        <Route path="all_productDesc/:id" element={<ProductDescMore />} />
        <Route path="help" element={<Help />} />
        <Route path="suggest" element={<Suggest />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
