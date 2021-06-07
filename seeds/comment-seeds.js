

const { Comment } = require('../models');

const commentData = [{
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Vestibulum ante ipsum primis in faucibus orci luctus",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Nullam sit amet felis et lacus viverra tincidunt.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;