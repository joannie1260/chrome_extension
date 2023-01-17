// Make an API call using the fetch function
fetch('https://your-api-url.com/')
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data);
  });