/**
 * Synchronous Code: Executes line by line, blocking further execution until the current operation completes.
 */
console.log("First");
console.log("Second"); // Waits for the first line to finish
console.log("Third");

//Asynchronous Code: Allows other code to run while waiting for time-consuming operations to complete.
console.log("First");
setTimeout(() => console.log("Second"), 1000); // Non-blocking
console.log("Third");

//Callback
/**
 * Callbacks are the oldest way to handle asynchronous operations in JavaScript. A callback is a function passed as an argument to another function, which is executed once the asynchronous operation completes.
 */
function fetchData(callback) {
    setTimeout(() => {
      const data = "Async data";
      callback(data);
    }, 1000);
  }
  
  fetchData((data) => {
    console.log(data); // "Async data" after 1 second
  });

//Promises were introduced in ES6 to address the issues with callbacks. A Promise represents a value that may be available now, in the future, or never.
/**
 * States:
    Pending: Initial state, neither fulfilled nor rejected.
    Fulfilled: Operation completed successfully.
    Rejected: Operation failed.
 */

/**
 * async: Declares an asynchronous function. It always returns a Promise.
   await: Pauses the execution of the async function until the Promise is resolved
 */

//Example of Async:-
async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  fetchData();