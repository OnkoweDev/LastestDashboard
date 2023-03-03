import "./components/styles/error.css"
import 'regenerator-runtime/runtime';
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

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

      </Routes>
    </React.Fragment>
  );
}

export default App;
