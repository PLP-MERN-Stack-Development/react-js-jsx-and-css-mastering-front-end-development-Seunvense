import React from 'react';
import PropTypes from 'prop-types';

function Card({ title, children, className = '' }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow rounded-lg p-4 sm:p-6 md:p-8 ${className} transform transition duration-300 hover:scale-105`}
    >
      {title && <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">{title}</h2>}
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;