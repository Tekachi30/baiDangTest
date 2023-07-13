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

module.exports = {
    getPost,
};