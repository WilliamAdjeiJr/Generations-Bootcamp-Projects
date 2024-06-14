/**
 * The UserSelector component provides a dropdown menu for selecting a user.
 * It takes in a list of users, the ID of the currently selected user, and a function to handle user selection.
 * When a user is selected from the dropdown, the onUserSelect function is called with the selected user's ID.
 */
import React from 'react';

const UserSelector = ({ users, selectedUserId, onUserSelect }) => {
  return (
    <select value={selectedUserId} onChange={(e) => onUserSelect(e.target.value)}>
      <option value="">Select a user</option>
      {users.map(user => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserSelector;
