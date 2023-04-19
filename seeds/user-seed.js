const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'someguy1',
        email: 'someguy1@emailemail.com',
        password: 'password123'
    },
    {
        username: 'somewoman1',
        email: 'somewoman1@emailemail.com',
        password: 'password123'
    },
    {
        username: 'anotherguy1',
        email: 'anotherguy1@emailemail.com',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
