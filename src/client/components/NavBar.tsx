import React from 'react';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav id="header" className="fixed top-0 z-30 w-full text-white">
      <div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
        <div className="flex items-center pl-4">
          <a
            className="text-2xl font-bold text-white no-underline toggleColour hover:no-underline lg:text-4xl"
            href="#"
          >
            LANDING
          </a>
        </div>
        <div className="block pr-4 lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 transition duration-300 ease-in-out transform hover:text-gray-900 focus:outline-none focus:shadow-outline hover:scale-105"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="z-20 flex-grow hidden w-full p-4 mt-2 text-black bg-white lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:p-0"
          id="nav-content"
        >
          <ul className="items-center justify-end flex-1 list-reset lg:flex">
            <li className="mr-3">
              <a className="inline-block px-4 py-2 font-bold text-black no-underline" href="#">
                Active
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block px-4 py-2 text-black no-underline hover:text-gray-800 hover:text-underline"
                href="#"
              >
                link
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block px-4 py-2 text-black no-underline hover:text-gray-800 hover:text-underline"
                href="#"
              >
                link
              </a>
            </li>
          </ul>
          <button
            id="navAction"
            className="px-8 py-4 mx-auto mt-4 font-bold text-gray-800 transition duration-300 ease-in-out transform bg-white rounded-full shadow opacity-75 lg:mx-0 hover:underline lg:mt-0 focus:outline-none focus:shadow-outline hover:scale-105"
          >
            Action
          </button>
        </div>
      </div>
      <hr className="py-0 my-0 border-b border-gray-100 opacity-25" />
    </nav>
  );
};

export default NavBar;
