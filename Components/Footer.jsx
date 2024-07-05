import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} ToDo List. All rights reserved.</p>
      
      </div>
    </footer>
  );
};

export default Footer;
