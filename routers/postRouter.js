const express =require("express") ;
const { getPost, createPost } =require("../Controller/postController") ;
const routerPost = express.Router();

routerPost.get('/api/getAllPost', getPost);
routerPost.post('/api/addPost', createPost);

module.exports = { 
    routerPost,
    createPost,
};
