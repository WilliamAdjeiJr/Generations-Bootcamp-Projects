/**
 * The ContactForm component handles updating the email of a selected user.
 * It manages the state for the email, success and error messages, and the loading state.
 * When a user is selected, it updates the email field with the corresponding email address.
 * The form submission updates the user's email via an API call and logs the update.
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactForm({selectedUser, onFormSubmit }) {
    const [email, setEmail] = useState(selectedUser.email);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

/**
   * useEffect hook to update the email field when the selected user changes.
   * This ensures that the email in the contact form loads the corresponding email address of the selected user.
   */
    useEffect(() => {
        setEmail(selectedUser.email);
      }, [selectedUser]);

/**
   * Handles the form submission.
   * Sends a PUT request to update the user's email and a POST request to log the update.
   * Updates the loading, success, and error states based on the outcome of the requests.
   * 
   * @param {Event} e - The form submission event
   */      
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setMessage('');
        setLoading(true);

        // Prepare the PUT request to update the user's email
        const postContact = axios.put(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}`, {
            email,
        });

        const logContact = axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'Contact Submission',
            body: `Updated Email: ${email}`,
            userId: selectedUser.id,
        });

        Promise.all([postContact, logContact])
            .then(() => {
                setMessage('Email updated successfully!');
                setEmail('');
                onFormSubmit();
            })
            .catch(() => {
                setError('Failed to update email');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required />
            <button type="submit" disabled={loading || !selectedUser}>Submit</button>
            {loading && <p>Loading...</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default ContactForm;
