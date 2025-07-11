//get request

fetch('https://jsonplaceholder.typicode.com/posts/1') // Example API
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
       return response.json();
    })
    .then(data => {
        console.log('GET Response:', data);
    })
    .catch(error => {
        console.error('GET Error:', error);
    });

    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',           // Use POST method
  headers: {
    'Content-Type': 'application/json',  // Tell server you're sending JSON
  },
  body: JSON.stringify({     // Convert JS object to JSON string
    title: 'foo',
    body: 'bar',
    userId: 1
  })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();   // Parse response JSON (returns a Promise)
})
.then(data => {
  console.log('POST Response:', data);  // The actual response data
})
.catch(error => {
  console.error('POST Error:', error);
});

