import React from "react";
import { Link } from "react-router-dom";
function NavbarHome() {
  return (
    <div>
      <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b  border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://tac-tic.net/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <img src="/logo2.png" className="h-12" alt="TacTicFlowLogo" />
            <h3 className="mt-1 relative text-[#212177] text-2xl  tracking-[0.16em] font-bold font-inherit whitespace-nowrap z-[3]">
              acticFlow
            </h3>
          </a>
          <div class="flex md:order-2 text-[#212177]  space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/login">
              <button
                type="button"
                className="text-white bg-[#212177] transition-transform transform hover:scale-105  hover:font-bold font-medium rounded-xl text-sm px-4 py-2 text-center"
              >
                Login
              </button>
            </Link>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white da">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-[#212177] font-medium  hover:font-bold   md:p-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-[#212177] font-medium  hover:font-bold   md:p-0"
                >
                  AboutUs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-[#212177] font-medium  hover:font-bold   md:p-0"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-[#212177] font-medium  hover:font-bold   md:p-0"
                >
                  Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarHome;
