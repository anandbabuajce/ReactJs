// src/components/AddUserForm.js
import React, { useState } from 'react';

const AddUserForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.username) {
      alert('Name and Username are required!');
      return;
    }
    onAdd(formData);
    setFormData({ name: '', username: '', email: '', phone: '' });
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUserForm;
