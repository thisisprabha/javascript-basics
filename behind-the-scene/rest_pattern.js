'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderitems: [],
  openingHours: {
    sat: {
      open: 12,
      close: 22,
    },
    sun: {
      open: 12,
      close: 22,
    },
    mon: {
      open: 0,
      close: 24,
    },
    tue: {
      open: 0,
      close: 24,
    },
    wed: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, MainmemuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainmemuIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}. Yuck!`);
  },
  orderingPizza: function (mainitems, ...otheritems) {
    console.log(mainitems);
    console.log(`Other items are`, otheritems);
  },
};

restaurant.orderingPizza(`mushroom`, `olive`, `spinach`, `onion`, `Dried-grape`);
//Destructring

// Spread beacoz of RIGHT side after '=' [Assignment Operator]
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// Rest beacoz of Left side after '=' [Assignment Operator]
const [a, b, , d, ...other] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(other);

// Joining spread and rest operator
const [pizza, , rissoto, ...restofitems] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, rissoto, restofitems);

const { sat, sun, ...weekends } = restaurant.openingHours;
console.log(weekends);

//Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3, 4, 5, 6);
add(2, 5);
add(9, 0, 1, 2, 3, 2, 34, 4, 4);

const x = [1, 2, 3, 4];
add(...x);
