// Q1: Understanding Arrow Functions & Lexical this
// Question:
// Predict the output of the following code and explain the behavior:
const person = {
  name: "Alice",
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`);
    }, 1000);
  }
};
person.greet();

// Arrow functions lexically bind this, meaning they inherit this from the enclosing scope (greet method). Here, this.name correctly refers to person.name.