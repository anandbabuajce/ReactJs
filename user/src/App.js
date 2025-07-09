// src/App.js
import React, { useState, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/Header';
import AddUserForm from './components/AddUserForm';
import UserList from './components/Userlist';
import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const { isDark } = useContext(ThemeContext);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  return (
    <div className={isDark ? 'app dark' : 'app'}>
      <Header />
      <div className="container">
        <AddUserForm onAdd={addUser} />
        <UserList users={users} onSelect={setSelectedUser} />
        {selectedUser && <UserDetails user={selectedUser} />}
      </div>
    </div>
  );
}

export default App;
