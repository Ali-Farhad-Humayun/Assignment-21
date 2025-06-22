// Q4: Async Function with Multiple Await Calls
// Question:
// Write an async function that sequentially fetches:

// User data (1s delay),

// Order details (2s delay),

// Payment status (3s delay),
// then logs "Order completed".

const delay = (ms, msg) => new Promise(resolve => setTimeout(() => resolve(msg), ms));

async function fetchOrderDetails() {
  const user = await delay(1000, "User data loaded");
  console.log(user);
  const order = await delay(2000, "Order details loaded");
  console.log(order);
  const payment = await delay(3000, "Payment status loaded");
  console.log(payment);
  console.log("Order completed");
}
fetchOrderDetails();