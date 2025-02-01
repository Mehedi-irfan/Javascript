/**
 * The fetch() function in JavaScript is used to make HTTP requests. It provides a modern way to interact with APIs and fetch resources asynchronously, replacing older methods like XMLHttpRequest.
 */

fetch(url, options)
  .then(response => response.json()) // Converts the response to JSON
  .then(data => console.log(data)) // Handles the data
  .catch(error => console.error('Error:', error)); // Handles errors


  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) 
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


  //Making a POST Request

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: 'Hello', body: 'World', userId: 1 }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  
//handling errors
fetch('https://jsonplaceholder.typicode.com/posts/1000')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));

  //using async await
  async function fetchData() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  fetchData();
  