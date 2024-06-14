/**
 * The App component is the main component of the application.
 * It manages the state for the list of contacts, the selected user, 
 * the loading state, and error messages. It fetches contacts from 
 * the JSONPlaceholder API when the component mounts and allows 
 * the user to select a contact from the list. Once a user is selected, 
 * the user's email can be updated via the ContactForm component. 
 * The component also handles the display of loading and error states.
 */

import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserSelector from './UserSelector';
import ContactForm from './ContactForm';


const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContacts = () => {
    setLoading(true);
    setError(null);

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setContacts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch contacts');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
    const user = contacts.find(contact => contact.id === parseInt(userId));
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <UserSelector users={contacts} selectedUserId={selectedUserId} onUserSelect={handleUserSelect} />
      {selectedUser && <ContactForm selectedUser={selectedUser} onFormSubmit={fetchContacts} />}
      {loading && <p>Loading contacts...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default App;

