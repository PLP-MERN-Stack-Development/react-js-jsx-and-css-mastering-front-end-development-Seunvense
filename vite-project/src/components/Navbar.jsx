import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">PLP Task Manager</h1>
        <div className="flex gap-4 items-center">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:underline">
            Home
          </Link>
          <Link to="/api" className="text-gray-600 dark:text-gray-300 hover:underline">
            API Todos
          </Link>
          <Button variant="secondary" size="sm" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;