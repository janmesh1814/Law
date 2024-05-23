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
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <>
    <div className='w-full flex items-center h-16 text-white '>
      {/* Logo */}
      {/* <img className='w-10 h-10' src="./assets/law2.jpg" alt="" /> */}
      <h1 className='display-flex text-3xl font-bold text-black ml-[200px]'> Law & Order</h1>

      {/* Desktop Navigation */}
      <div className='w-[900px] '>
      <ul className='md:flex ml-10 mt-3'>
        {navItems.map(item => (
          <li
          key={item.id}
          className='p-2 text-black rounded-xl m-2 cursor-pointer duration-300 '
          >
            {item.text}

          </li>
        ))}
      </ul>
      </div>
      

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
      <div className='w-100px flex flex-row'>
        <h6 className='text-black h-full mt-3 hover:cursor-pointer'>log in</h6>
        <h6 className='w-[80px] h-[40px] pl-[10px] p-[8px] ml-5 mt-2 bg-black border rounded-lg hover:cursor-pointer'>Sign up</h6>
      </div>
    </div>
    <div class="border-b border-gray-300 "></div>
    </>
    
  );
};

export default Header;
