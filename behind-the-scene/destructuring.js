'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, MainmemuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainmemuIndex]];
  },

  delivery: function ({ time, address, starterIndex, MainmemuIndex }) {
    console.log(
      `Order recieved! at ${time}. ${this.starterMenu[starterIndex]} and ${this.mainMenu[MainmemuIndex]} to the address of ${address}`
    );
  },
};

restaurant.delivery({
  time: '12:10 am',
  address: '12, Los santos downton street',
  starterIndex: 1,
  MainmemuIndex: 0,
});

// destructing retun vlaues
const [x, y] = restaurant.order(1, 1);
// console.log(x, y);

//destructuring variables
const [a, b, c, d] = [1, 23, 4, 67];
// console.log(a, b, c, d);

// destructuring default values
const [f, g, h = 0] = [1, 2];
// console.log(f, g, h);

let [main, starter] = [restaurant.mainMenu[0], restaurant.starterMenu[0]];
// console.log(main, starter);
// swicth vlaues by classic way
const temp = main;
main = starter;
starter = temp;
// console.log(main, starter);

//  swtching by new way
[starter, main] = [starter, main];
// console.log(main, starter);

//destructuring objects
const { name, mainMenu, openingHours } = restaurant;
// console.log(name, mainMenu, openingHours);

//renaming objcet names
const { name: restaurantName, mainMenu: tags, openingHours: operatingHours } = restaurant;
// console.log(restaurantName, tags, openingHours);

//default values
const { menu = [], starterMenu: starters = 0 } = restaurant;
// console.log(menu, starters);

// Mutating/ reassining values
let x1 = 12;
let y1 = 32;
let z1 = 43;
const obj = { x1: 1, y1: 4, z1: 7 };
({ x1, y1 } = obj);
// console.log(x1, y1);

//assigning/mutatung nested vlaues
const {
  fri: { open: O, close: C },
} = openingHours;
// console.log(O, C);
