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

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const allitems of menu) console.log(allitems);

// for (const allitems of menu.entries()) console.log(`${allitems[0] + 1} : ${allitems[1]}`);

if (restaurant.openingHours.mon) {
  // console.log(restaurant.openingHours.mon.open);
}

//with optionalk chaining
// console.log(restaurant?.openingHours?.mon?.open);

const days = [`sat`, `sun`, `mon`, `tue`, `wed`, `thur`, `fri`];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, We open at ${open}`);
}

console.log(restaurant?.order?.(0, 1) ?? `no order yet`);
console.log(restaurant?.orderRissoto?.(0, 1) ?? `no order yet`);

// lOOPING OBJEST KEYS, VALUES and ENTRIES
const properties = Object.keys(restaurant.openingHours);
let openStr = `we open on ${properties.length} days : `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(restaurant.openingHours);
console.log(values);

const entry = Object.entries(restaurant.openingHours);
console.log(entry);

for (const x of entry) {
  console.log(x);
}
