const User = require('./User');
const Resturant = require('./Resturant');
const Review = require('./Review');

Resturant.hasMany(Review, {
  foreignKey: 'resturant_id',
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Resturant, Review };
