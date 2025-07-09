// src/components/Header.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="user-info">
    <h1>DIRECTORY</h1>
    </div>
      <button onClick={toggleTheme}>
        {isDark ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
