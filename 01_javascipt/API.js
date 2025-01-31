/**
 * In JavaScript, an API request is a way for your application to communicate with a server to send or retrieve data. This is commonly used for fetching data from a database, accessing web services, or interacting with third-party APIs like weather services, payment gateways, and social media platforms.
 */

/**
 * Using fetch() (Modern Approach)
The fetch() function is a built-in JavaScript method for making API requests. It returns a Promise that resolves with the response.
 */
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log(data)) // Handle the data
  .catch(error => console.error('Error:', error)); // Handle errors
