var express = require('express');
var router = express.Router();

let furnitureData = [{
  itemId: 1,
  name: 'coombes',
  collection: 'lounge',
  thumbnailImage: 'https://picsum.photos/id/1/200/300',
  images: ['https://picsum.photos/id/1011/200/300', 'https://picsum.photos/id/1010/200/300', 'https://picsum.photos/id/1013/200/300', 'https://picsum.photos/id/1016/200/300'],
  price: '$2600',
  avgRatings: 3.5,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  colors: ['red', 'black']
}, {
  itemId: 2,
  name: 'keeve set',
  collection: 'table and chairs',
  thumbnailImage: 'https://picsum.photos/id/10/200/300',
  images: ['https://picsum.photos/200/300', 'https://picsum.photos/id/1010/200/300','https://picsum.photos/id/1011/200/300', 'https://picsum.photos/200/300'],
  price: '$590',
  avgRatings: 4,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  colors: ['red', 'black']
},{
  itemId: 3,
  name: 'Nille',
  collection: 'armchair',
  thumbnailImage: 'https://picsum.photos/id/1023/200/300',
  images: ['https://picsum.photos/200/300', 'https://picsum.photos/id/10/200/300','https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  price: '$2600',
  avgRatings: 3.5,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  colors: ['red', 'black']
},{
  itemId: 4,
  name: 'Momo',
  collection: 'shelves',
  thumbnailImage: 'https://picsum.photos/id/100/200/300',
  images: ['https://picsum.photos/200/300', 'https://picsum.photos/id/10/200/300','https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  price: '$2600',
  avgRatings: 3.5,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  colors: ['red', 'black']
},{
  itemId: 5,
  name: 'penemille',
  collection: 'chair',
  thumbnailImage: 'https://picsum.photos/id/1001/200/300',
  images: ['https://picsum.photos/200/300', 'https://picsum.photos/id/1010/200/300','https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  price: '$2600',
  avgRatings: 3.5,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  colors: ['red', 'black']
},{
  itemId: 6,
  name: 'kappu',
  collection: 'shelves',
  thumbnailImage: 'https://picsum.photos/id/1002/200/300',
  images: ['https://picsum.photos/200/300', 'https://picsum.photos/id/1011/200/300','https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  price: '$2600',
  avgRatings: 3.5,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  colors: ['red', 'black']
},{
  itemId: 7,
  name: 'coombes',
  collection: 'lounge',
  thumbnailImage: 'https://picsum.photos/id/1011/200/300',
  images: ['https://picsum.photos/200/300', 'https://picsum.photos/id/1013/200/300','https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  price: '$2600',
  avgRatings: 3.5,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  colors: ['red', 'black']
},{
  itemId: 8,
  name: 'coombes',
  collection: 'lounge',
  thumbnailImage: 'https://picsum.photos/id/1013/200/300',
  images: ['https://picsum.photos/200/300', 'https://picsum.photos/id/1018/200/300','https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  price: '$2600',
  avgRatings: 3.5,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  colors: ['red', 'black']
}]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(furnitureData);
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  const data = furnitureData.find(item => item.itemId == req.params.id);
  res.send(data);
});

module.exports = router;
