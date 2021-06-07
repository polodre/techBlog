const { User } = require('../models');

const userData = [{
        username: 'Matt',
        password: 'matt'

    },
    {
        username: 'Arthur',
        password: 'arthur'
    },
    {
        username: 'Toney',
        password: 'toney'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;