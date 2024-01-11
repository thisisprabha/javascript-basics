'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderitems: [],

  order: function (starterIndex, MainmemuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainmemuIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}. Yuck!`);
  },
};

// older way
const arr = [4, 5, 6, 7, 8];
const badArr = [9, 0, arr[0], arr[1], arr[2], arr[3]];
console.log(badArr);

// new way
const NewArr = [9, 0, ...arr];
console.log(NewArr);
console.log(...NewArr);

// Adding new values to array
const newMenu = [...restaurant.mainMenu, 'Momo', 'Pintong', 'Jujupee'];
console.log(...newMenu);

// iterablews
const str = 'Jonas';
const letters = [...str];
console.log(letters);

//
const ingredients = [
  prompt("Let 's make pasta ingredent 1"),
  prompt('ingredient 2'),
  prompt('ingredient 3'),
];

const newRestaurant = { foundedIN: 1991, ...restaurant, founder: `Guispe` };
const restaurantCopy = { ...newRestaurant };
console.log(restaurantCopy);
console.log(restaurant.orderitems);
restaurant.orderPasta(ingredients[0], ingredients[1], '');
restaurant.orderPasta(...ingredients);
console.log(restaurant.orderitems);
