// Q3: Handling Errors in Async-Await (Try-Catch Required)
// Question:
// Convert the Promise-based fetchData function to use async/await with error handling:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 0.5;
      success ? resolve("Data received") : reject("Error fetching data");
    }, 2000);
  });
}
fetchData().then(console.log).catch(console.error);

async function fetchDataWithAsync() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchDataWithAsync();