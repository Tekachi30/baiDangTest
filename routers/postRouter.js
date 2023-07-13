const express =require("express") ;
const { getPost } =require("../Controller/postController") ;
const routerPost = express.Router();

routerPost.get('/api/getAllPost', getPost);

module.exports = { 
    routerPost,
};
