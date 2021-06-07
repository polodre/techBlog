const { Post } = require('../models');

const postData = [{
        title: 'Lorem Ipsum 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget risus consequat,.',
        user_id: 1

    },
    {
        title: 'Lorem Ipsum 2',
        content: 'Vivamus ac erat mi. Nullam in eleifend neque, sit amet rutrum ipsum',
        user_id: 2
    },
    {
        title: 'Lorem Ipsum 3',
        content: 'Nulla dolor nunc, vestibulum et purus nec, eleifend sodales felis.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;