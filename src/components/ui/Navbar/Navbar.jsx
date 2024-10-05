import { useState } from "react";

const Navbar = () => {
  const [toggle, setIsToggle] = useState(false);
  return (
    <div>
      <nav
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        id="navbar-1"
        className="w-full  bg-white shadow fixed top-0 z-50"
      >
        {/* desktop menu */}
        <div className="mx-auto px-6 lg:px-16 py-5 flex justify-between items-center max-w-7xl">
          <a href="#" className="text-2xl font-bold text-indigo-500">
            CourierX
          </a>

          <div className="hidden lg:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-indigo-500 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-500 font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-indigo-500 font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-500 font-medium"
            >
              Contact
            </a>
          </div>

          <div className="hidden lg:block">
            <a
              href="#"
              onClick="openQuoteModal()"
              className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition duration-300"
            >
              Get Quote
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsToggle(!toggle)}
              id="menuBtn"
              className="text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobileMenu"
          className={`lg:hidden ${toggle ? "block" : "hidden"}  bg-white py-4`}
        >
          <a
            href="#home"
            className="block px-6 py-2 text-gray-700 hover:text-indigo-500 font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-6 py-2 text-gray-700 hover:text-indigo-500 font-medium"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-6 py-2 text-gray-700 hover:text-indigo-500 font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-6 py-2 text-gray-700 hover:text-indigo-500 font-medium"
          >
            Contact
          </a>
          <a
            href="#"
            onClick="openQuoteModal()"
            className="block px-6 py-2 mt-4 bg-indigo-500 text-white text-center font-semibold rounded-full"
          >
            Get Quote
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
