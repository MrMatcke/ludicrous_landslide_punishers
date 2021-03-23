const sequelize = require('../config/connection');
const sseedReview = require('./reviewData');
const seedResturants = require('./resturantData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await sseedReview();

  await seedResturants();

  process.exit(0);
};

seedAll();
