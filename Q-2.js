// Q2: Convert Traditional Functions to Arrow Functions
// Question:
// Rewrite the following functions using arrow syntax without changing behavior:

//Original Code
// function multiply(a, b) {
//   return a * b;
// }

// const obj = {
//   value: 10,
//   add: function(num) {
//     return this.value + num;
//   }
// };
// console.log(multiply(5,3));
// console.log(obj.add(5));

const multiply = (a, b) => a * b;

const obj = {
  value: 10,
  add: (num) => this.value + num, //(Arrow functions don’t bind `this`!)

  add: function(num) { return this.value + num; } //traditional function!
};
console.log(multiply(5,3));
console.log(obj.add(5));
// Note: The add method will fail because arrow functions don’t have their own this. For methods, use traditional functions: