// Q5: Handling Synchronous Errors with Try-Catch
// Question:
// Write a function that:

// Takes a string input,

// Converts it to a number and returns its square,

// Handles invalid inputs with try-catch.

function squareInput(input) {
  try {
    const num = Number(input);
    if (isNaN(num)) throw new Error("Invalid Input");
    return num * num;
  } catch (error) {
    return "Invalid Input";
  }
}
console.log(squareInput("5"));  // 25
console.log(squareInput("abc")); // "Invalid Input"