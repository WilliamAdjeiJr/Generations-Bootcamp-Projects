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

// Export the getServerURL and listUsers functions
module.exports = {
  getServerURL,
  listUsers,
};
