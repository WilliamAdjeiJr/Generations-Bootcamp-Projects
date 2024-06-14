# Instructions for Using the Contact Management App

## Overview

This app fetches a list of contacts from the JSONPlaceholder API, allows the user to select a contact, and update the contact's email address. It consists of three main components: `App`, `UserSelector`, and `ContactForm`.

### App Component

- **State Management**:
  - `contacts`: An array of contacts fetched from the API.
  - `selectedUser`: The currently selected user object.
  - `selectedUserId`: The ID of the selected user.
  - `loading`: Boolean indicating if data is being loaded.
  - `error`: String containing any error message.

- **Functions**:
  - `fetchContacts()`: Fetches contacts from the API and updates the state.
  - `handleUserSelect(userId)`: Sets the selected user based on the user ID.

- **Lifecycle**:
  - Fetches contacts when the component mounts using `useEffect`.

### UserSelector Component

- **Props**:
  - `users`: Array of user objects.
  - `selectedUserId`: ID of the currently selected user.
  - `onUserSelect`: Function to handle user selection.

- **Functionality**:
  - Renders a dropdown menu with user options.
  - Calls `onUserSelect` with the selected user's ID when a user is selected.

### ContactForm Component

- **Props**:
  - `selectedUser`: The user object of the currently selected user.
  - `onFormSubmit`: Function to call after the form is successfully submitted.

- **State Management**:
  - `email`: The email address of the selected user.
  - `message`: Success message after form submission.
  - `error`: Error message if the email update fails.
  - `loading`: Boolean indicating if the form is submitting.

- **Functions**:
  - `handleSubmit(e)`: Handles form submission, sends PUT and POST requests, and updates the state.

- **Lifecycle**:
  - Updates the email field when the selected user changes using `useEffect`.

## How to Use

1. **Fetch Contacts**:
    - When the app loads, it fetches contacts from `https://jsonplaceholder.typicode.com/users`.

2. **Select a User**:
    - Use the dropdown menu to select a user. The selected user's details will be displayed in the form.

3. **Update Email**:
    - Update the email address in the form and submit. The app will send a PUT request to update the email and a POST request to log the update.

