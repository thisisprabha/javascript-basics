'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, MainmemuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainmemuIndex]];
  },
};

// destructing retun vlaues
const [x, y] = restaurant.order(1, 1);
console.log(x, y);

//destructuring variables
const [a, b, c, d] = [1, 23, 4, 67];
console.log(a, b, c, d);

// destructuring default values
const [f, g, h = 0] = [1, 2];
console.log(f, g, h);

let [main, starter] = [restaurant.mainMenu[0], restaurant.starterMenu[0]];
console.log(main, starter);
// swicth vlaues by classic way
const temp = main;
main = starter;
starter = temp;
console.log(main, starter);

//  swtching by new way
[starter, main] = [starter, main];
console.log(main, starter);
