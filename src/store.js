
import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'
import { addEbookReducer, viewEbookReucer } from './reducers/ebookReducer'
import { addBlogIntroReducer } from './reducers/ai/blogIntroReducer'
import { blogSectionReducer } from './reducers/ai/blogSectionReducer'
import { blogArticleWriterReducer } from './reducers/ai/articleWriterReducer'
import { contentRephesalReducer } from './reducers/ai/contentRepresalReducer'
import { articleBlogReducer } from './reducers/ai/articleBlogReducer'
import { articleRewriterReducer } from './reducers/ai/articleRewriterReducer'
import { paragraphWriterReducer } from './reducers/ai/paragraphReducer'
import { linkedinReducer } from './reducers/ai/SocialMediaReducer'
import { twitterReducer } from './reducers/ai/twitterReducer'
import { youtubeReducer } from './reducers/ai/youtubeReducer'
import { instagramReducer } from './reducers/ai/instagramReducer'
import { addProductReducer } from './reducers/ai/productReducer'
import { ebookReducer } from './reducers/ai/ebookReducer'
import { youtubeDescReducer } from './reducers/ai/youtubeDescriptionReducer'
import { linkdladsReducer } from './reducers/ai/linkdlnAdsReducer'
import { googleadsReducer } from './reducers/ai/googleAdsReducer'
import { googletitleReducer } from './reducers/ai/googleTitleReducers'
import { facebookReducer } from './reducers/ai/facebookReducer'
import { productNameReducer } from './reducers/ai/productNameReducer'
import { emailSubjectReducer } from './reducers/ai/EmailReducer'
import { emailGeneratorReducer } from './reducers/ai/emailGenReducer'
import { landingPageReducer } from './reducers/ai/landingPageReducer'
import { blogtopicReducer } from './reducers/ai/blogTopicReducer'
import { landingReducer } from './reducers/ai/landReducer'
import { addProjectReducer, getProjectReducer } from './reducers/backend/projectReducer'
import {  addArticleWriterReducer, deleteArticleWriterReducer, getArticleWriterReducer, getOneArticleWriterReducer, updatdeArticleWriterReducer } from './reducers/backend/articleWriterReducer'
import { addBlogWriterReducer, deleteBlogWriterReducer, getBlogWriterReducer, getOneBlogWriterReducer, updateBlogWriterReducer } from './reducers/backend/blogWriterReducer'
import { deleteBlogIntroReducer, getNewBlogIntroReducer, getOneBlogIntroReducer, saveBlogIntroReducer } from './reducers/backend/blogIntroReducer'
import { saveBlogSectionReducer } from './reducers/backend/blogSectionReducer'
import { deleteBlogTopicReducer, getBlogTopicReducer, getOneBlogTopicReducer, saveBlogTopicReducer } from './reducers/backend/blogTopicReducer'
import { addContentReducer, deleteContentReducer, getContentReducer, getOneContentReducer } from './reducers/backend/contentRepreReducer'
import { addEmailReducer, deleteEmailReducer, getEmailReducer, getOneEmailReducer } from './reducers/backend/emailGenReducer'
import { addSubjectReducer, deleteSubjectReducer, getOneSubjectReducer, getSubjectReducer } from './reducers/backend/emailSubjectReducer'
import { addFacebookReducer, deleteFacebookReducer, getFacebookReducer, getOneFacebookReducer } from './reducers/backend/facebookReducer'
import { addGoogleAdsReducer, deleteGoogleAdsReducer, getGoogleAdsReducer, getOneGoogleAdsReducer } from './reducers/backend/googleAdsReducer'
import { addGoogleTitleReducer, deleteGoogleTitleReducer, getGoogleTitleReducer, getOneGoogleTitleReducer } from './reducers/backend/googleTitleReducer'
import { addInstagramCapReducer, deleteInstagramReducer, getInstagramReducer, getOneInstagramReducer } from './reducers/backend/instagramReducer'
import { addLandingPageCapReducer, deleteLandingPageReducer, getLandingPageReducer, getOneLandingPageReducer } from './reducers/backend/langingPageReducer'
import { addLandingHeadlineReducer, deleteLandingHeadlineReducer, getLandingHeadlineReducer, getOneLandingHeadlineReducer } from './reducers/backend/landingHeadlineReducer'
import { addParagraphReducer, deleteParagraphReducer, getOneParagraphReducer, getParagraphReducer } from './reducers/backend/paragraphReducer'
import { addProductDescReducer, deleteProductDescReducer, getOneProductDescReducer, getProductDescReducer } from './reducers/backend/productDescReducer'
import { addProductNameReducer, deleteProductNameReducer, getOneProductNameReducer, getProductNameReducer } from './reducers/backend/productNameReducer'


const reducers = combineReducers({
    //all reducers
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,

    //This is the AI backend Reducers
    addBlogIntro:addBlogIntroReducer,

    //blogSectio
    blogSection:blogSectionReducer,
    //blogArticleWriter
    blogArticle: blogArticleWriterReducer,
    //contentRephesal
    contentRephesal:contentRephesalReducer,
    articleBlogs:articleBlogReducer,
    articleRewriter:articleRewriterReducer,
    paragraphWriter:paragraphWriterReducer,
    linkedin:linkedinReducer,
    twitter:twitterReducer,
    youtube:youtubeReducer,
    instagram:instagramReducer,
    product:addProductReducer,
    ebook:ebookReducer,
    youtubeDesc:youtubeDescReducer,
    linkedinAds:linkdladsReducer,
    googleAds:googleadsReducer,
    googleTitle:googletitleReducer,
    facebook:facebookReducer,
    productName:productNameReducer,
    emailSubject:emailSubjectReducer,
    emailGenerator:emailGeneratorReducer,
    landingPage:landingPageReducer,
    blogTopic:blogtopicReducer,
    land:landingReducer,

    //Backend 
    project: addProjectReducer,
    getProject: getProjectReducer,

    //Article REWRITER
    articleWritter:addArticleWriterReducer,
    getArticleWriter:getArticleWriterReducer,
    getOneArticleWriter:getOneArticleWriterReducer,
    updateArticleWriter:updatdeArticleWriterReducer,
    deleteArticleWriter:deleteArticleWriterReducer,

    //BLOGWRITER
    addBlogWriter:addBlogWriterReducer,
    getBlogWriter:getBlogWriterReducer, 
    getOneBlogWriter:getOneBlogWriterReducer,
    deleteBlogWriter:deleteBlogWriterReducer,
    updateBlogWriter:updateBlogWriterReducer,

    //Blog Intro
    saveBlogIntro:saveBlogIntroReducer,
    getBlogIntro:getNewBlogIntroReducer,
    getOneBlogIntro:getOneBlogIntroReducer,
    deleteBlogIntro:deleteBlogIntroReducer,

    //Blog Section
    saveBlogSection:saveBlogSectionReducer,

    //Blog Topic
    saveBlogTopic: saveBlogTopicReducer,
    getBlogTopic:getBlogTopicReducer,
    getOneBlogTopic:getOneBlogTopicReducer,
    deleteBlogTopic:deleteBlogTopicReducer,

    //contentRepresal
    saveContent:addContentReducer,
    getContent:getContentReducer,
    getOneContent:getOneContentReducer,
    deleteRepresal:deleteContentReducer,

    //email
    addEmail:addEmailReducer,
    getEmail:getEmailReducer,
    getOneEmail:getOneEmailReducer,
    deleteEmail:deleteEmailReducer,

    //email subject
    saveSubject:addSubjectReducer,
    getSubject:getSubjectReducer,
    getOneSubject:getOneSubjectReducer,
    deleteSubject:deleteSubjectReducer,

    //Facebook
    saveFacebook:addFacebookReducer,
    getFacebook:getFacebookReducer,
    getOneFacebook:getOneFacebookReducer,
    deleteFacebook:deleteFacebookReducer,

    //GoogleAds
    saveGoogleAds:addGoogleAdsReducer,
    getGoogleAds:getGoogleAdsReducer,
    getOneGoogleAds:getOneGoogleAdsReducer,
    deleteGoogleAds:deleteGoogleAdsReducer,

    //Google titles
    saveTitle:addGoogleTitleReducer,
    getTitle:getGoogleTitleReducer,
    getOneTitle:getOneGoogleTitleReducer,
    deleteTitle:deleteGoogleTitleReducer,

    // InstagramCaptions
    saveInstagram:addInstagramCapReducer,
    getInstagram:getInstagramReducer,
    getOneInstagram:getOneInstagramReducer,
    deleteInstagram:deleteInstagramReducer,

    //Landing page
    saveLandingPage:addLandingPageCapReducer,
    getLandingPage:getLandingPageReducer,
    getOneLandingPage:getOneLandingPageReducer,
    deleteLandingPage:deleteLandingPageReducer,
    
    //Landing Headlines
    saveHealines:addLandingHeadlineReducer,
    getHeadline:getLandingHeadlineReducer,
    getOneHeadline:getOneLandingHeadlineReducer,
    deleteHeadline:deleteLandingHeadlineReducer,

    //Paragraph 
    saveParagraph:addParagraphReducer,
    getParagraph:getParagraphReducer,
    getOneParagraph:getOneParagraphReducer,
    deleteParagraph:deleteParagraphReducer,

    saveProductDesc:addProductDescReducer,
    getProductDesc:getProductDescReducer,
    getOneProductDesc:getOneProductDescReducer,
    deleteProductDesc:deleteProductDescReducer,

    saveProductName:addProductNameReducer,
    getProductName:getProductNameReducer,
    getOneProductName:getOneProductNameReducer,
    deleteProductName:deleteProductNameReducer,
    
        //ebook in store
   // AddEbook:addEbookReducer,
    viewEbook:viewEbookReucer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null

const projectInfoFromStorage = localStorage.getItem('projectInfo') ? JSON.parse(localStorage.getItem('projectInfo')):null

// const initialState = {
//     userLogin:{ userInfo:userInfoFromStorage}}

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    project: { projectInfo: projectInfoFromStorage },
  };
  
const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;