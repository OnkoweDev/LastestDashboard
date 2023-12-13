import React, { useState } from 'react';
import '../components/styles/Topnew.css'; // Import your CSS file for Navbar styling

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const toggleServices = () => {
    setShowServices(!showServices);
    setShowProducts(false); // Close other dropdowns when this is clicked
  };

  const toggleProducts = () => {
    setShowProducts(!showProducts);
    setShowServices(false); // Close other dropdowns when this is clicked
  };

  return (
    <div className='container'>
   
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li>
          <a href="#" onClick={toggleServices}>
            Services
            {showServices && (
              <ul className="dropdown">
                <li><a href="#">Service 1</a></li>
                <li><a href="#">Service 2</a></li>
                <li><a href="#">Service 3</a></li>
              </ul>
            )}
          </a>
        </li>
        <li>
          <a href="#" onClick={toggleProducts}>
            Products
            {showProducts && (
              <ul className="dropdown">
                <li><a href="#">Product 1</a></li>
                <li><a href="#">Product 2</a></li>
                <li><a href="#">Product 3</a></li>
              </ul>
            )}
          </a>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
