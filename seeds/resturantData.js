const { Resturant } = require('../models');

const resturantdata = [
  {
    name: 'resturant-A',
    category: 'Italian',
  },
  {
    name: 'resturant-B',
    category: 'SeaFood',
  },  
  {
    name: 'resturant-C',
    category: 'American',
  },  
  {
    name: 'resturant-D',
    category: 'BBQ',
  },  
  {
    name: 'resturant-E',
    category: 'Mexican',
  },  
  {
    name: 'resturant-F',
    category: 'MiddleEastren',
  },  
  {
    name: 'resturant-G',
    category: 'Japanese',
  },
];

const seedResturants = () => Resturant.bulkCreate(resturantdata);

module.exports = seedResturants;
