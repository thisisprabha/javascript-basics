'use strict';

const orderSets = new Set(['Pizza', 'Rossito', 'Curd', 'Vada', 'Curd', 'Pizza', 'Vada']);
console.log(orderSets.has('Pizza'));
console.log(orderSets.has('Medhu Vada'));
console.log(orderSets.add('Sambar Vada'));
// console.log(orderSets.delete('Pizza'));
console.log(orderSets);
console.log(orderSets.size);
const staff = ['manager', 'clerk', 'security', 'lawyer', 'security', 'manager'];
const uniqueSets = [...new Set(staff)];
console.log(uniqueSets);
console.log(new Set(`Prabhakaran`).size);
