// src/components/UserList.js
import React from 'react';

const UserList = ({ users, onSelect }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        users.map(user => (
          <div
            key={user.id}
            className="user-card"
            onClick={() => onSelect(user)}
          >
            {user.name}
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
