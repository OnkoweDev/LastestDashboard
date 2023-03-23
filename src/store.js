
import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'
import { addEbookReducer, viewEbookReucer } from './reducers/ebookReducer'
import { addBlogIntroReducer, getBlogIntroReducer } from './reducers/ai/blogIntroReducer'
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


const reducers = combineReducers({
    //all reducers
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,

    //This is the AI backend Reducers
    addBlogIntro:addBlogIntroReducer,
    getBlogIntro:getBlogIntroReducer,

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