import React from 'react';
import {useDarkMode} from './hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setToggleMode] = useDarkMode(false);
  
  const setDarkMode = e => {
    e.preventDefault();
    setToggleMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={setDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
