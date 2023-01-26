import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/navLogo.png';
import { AiOutlineArrowRight } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
        
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 shadow lg:h-[100px] md:h-[59px]">
  <div className="container flex flex-wrap items-center justify-between mx-auto lg:w-[80%]">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src={logo} className="mr-3 sm:h-9 lg:w-[226.94px] lg:h-[23.55px] w-[70%]" alt="Flowbite Logo" />
        {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-[#0A66C2] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex lg:flex-rows flex-col items-center text-left p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
        <NavLink>
          <p className="block py-2 pl-3 pr-4 text-[#0A66C2] rounded md:bg-transparent md:text-[#0A66C2] md:p-0" aria-current="page">Home</p>
        </NavLink>
        <NavLink>
          <p className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0A66C2] md:p-0">About Us</p>
        </NavLink>
        <NavLink>
          <p className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0A66C2] md:p-0">Contact Us</p>
        </NavLink>
        <NavLink>
          <p className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0A66C2] md:p-0">Patnership</p>
        </NavLink>
        <NavLink>
          <button type="button" className="text-white bg-[#0A66C2] focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2 flex gap-3 items-center">
          <p>Register </p>
          <AiOutlineArrowRight />
       </button>
        </NavLink>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar