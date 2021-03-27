const { User } = require("../models");

const userData = [
  {
    username: "user1",
    twitter: "user1_twitter",
    github: "user1",
    email: "user1@gmail.com",
    password: "user1pass",
  },
  {
    username: "user2",
    twitter: "user2_twitter",
    github: "user2",
    email: "user2@gmail.com",
    password: "user2pass",
  },
  {
    username: "user3",
    twitter: "user3_twitter",
    github: "user3",
    email: "user3@gmail.com",
    password: "user3pass",
  },
  {
    username: "user4",
    twitter: "user4_twitter",
    github: "user4@gmail.com",
    email: "user4@gmail.com",
    password: "user4pass",
  },
  {
    username: "user5",
    twitter: "user5_twitter",
    github: "user5",
    email: "user5@gmail.com",
    password: "user5pass",
  },
  {
    username: "user6",
    twitter: "user6_twitter",
    github: "user6",
    email: "user6@gmail.com",
    password: "user6pass",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
