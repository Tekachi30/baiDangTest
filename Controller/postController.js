const db = require("../models");
const Post = db.post;

const getPost = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.json("không lấy được post ");
        console.log(error);
    }
}

const createPost = async (req, res) => {
    try {
        const {
            title,
            post_content,
            user_id,
        } = req.body;
        if(title==''|| post_content==''||user_id=='')
        {

        }else{
            const post = await Post.create({
                title,
                post_content,
                user_id,
            });
            return res.status(201).json({
                message: "Thêm post oke"
            });
        }
    } catch (error) {
        res.json("không tạo được post ");
        console.log(error);
    }
} 

module.exports = {
    getPost,
    createPost,
};