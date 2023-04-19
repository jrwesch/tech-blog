const { Post } = require('../models');

const postData = [
    {
        title: "MVC Framework - Introduction",
        content: "https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm",
        user_id: 1

    },
    {
        title: "Node MySQL2 Documentation",
        content: "https://www.npmjs.com/package/mysql2",
        user_id: 3

    },
    {
        title: "Express - Fast, unopinionated, minimalist web framework for Node.js",
        content: "https://expressjs.com/",
        user_id: 5

    },

];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;

