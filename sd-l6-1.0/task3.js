// serverUtils.js

const fetch = require('node-fetch'); // Import the fetch API

// Function to return the URL of the server
function getServerURL() {
  return 'https://sd-12-1-assessmentserver-individual.william.repl.co';
}

// Function to print a list of users from the JSON server
async function listUsers() {
  const url = getServerURL() + '/users'; // Construct the URL to fetch users
  try {
    const response = await fetch(url); // Fetch the list of users
    const users = await response.json(); // Parse the JSON response
    console.log('List of users:');
    console.log(users); // Print the list of users to the console
  } catch (error) {
    console.error('Error fetching users:', error); // Handle any errors
  }
}

// Function to add a new user to the JSON server
async function addUser(first_name, last_name, email) {
  const url = getServerURL() + '/users'; // Construct the URL to add a new user
  const data = {
    first_name,
    last_name,
    email
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const newUser = await response.json(); // Parse the JSON response
    console.log('New user added:');
    console.log(newUser); // Print the new user details to the console
  } catch (error) {
    console.error('Error adding user:', error); // Handle any errors
  }
}

// Export the getServerURL, listUsers, and addUser functions
module.exports = {
  getServerURL,
  listUsers,
  addUser,
};
