import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 2, text: 'Services' },
    { id: 3, text: 'News' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
    { id:6, text:'Profile'}
  ];

  return (
    <div className='bg-[#adc3dc] w-full flex justify-between items-center h-20 text-black font-bold'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-black ml-4'>Law & Order</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex  flex-grow'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-1 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}

          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-full h-full bg-[#000300] ease-in-out duration-500 z-50'
            : 'ease-in-out w-full duration-500 fixed top-0 bottom-0 left-[-100%] z-50'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 text-center'>REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
