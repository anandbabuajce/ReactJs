// src/components/UserDetails.js
import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <h2>User Info</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
};

export default UserDetails;
