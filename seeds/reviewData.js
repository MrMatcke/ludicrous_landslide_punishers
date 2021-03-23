const { Review } = require('../models');

const reviewdata = [
  {
    title: 'Great Food!',
    star_rating: 5,
    msg: 'The food was great, highly recommended',
  },
  {
    title: 'Expinsive',
    star_rating: 3,
    msg: 'The food was great, bit it was little pricy',
  },
  {
    title: 'Love it!',
    star_rating: 5,
    msg: 'It is my favorite so far',
  },
];

const seedReview = () => Review.bulkCreate(reviewdata);

module.exports = seedReview;
