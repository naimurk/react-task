import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import PropTypes from "prop-types";

const Header = ({ isScrolled, handleModal }) => {
  const [toggle, setIsToggle] = useState(false);

  // Defining animations for the header text and button
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 1000 },
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 800 },
  });

  return (
    <header id="home" className="relative h-screen bg-slideshow">
      <nav
        id="navbar-2"
        className={`w-full bg-transparent shadow fixed top-0 z-50 ${
          isScrolled === false ? "" : "hidden"
        }`}
      >
        <div className="mx-auto px-6 lg:px-16 py-5 flex justify-between items-center max-w-7xl">
          <a href="#home" className="text-2xl font-bold text-indigo-500">
            CourierX
          </a>

          <div className="hidden lg:flex space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-indigo-500 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-indigo-500 font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-indigo-500 font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-indigo-500 font-medium"
            >
              Contact
            </a>
          </div>

          <div className="hidden lg:block">
            <a
              href="#"
              onClick={() => handleModal()}
              className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition duration-300"
            >
              Get Quote
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsToggle(!toggle)}
              id="menuBtn1"
              className="text-gray-300 focus:outline-none"
            >
              {toggle ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>

        <div
          id="mobileMenu1"
          className={`lg:hidden ${
            toggle ? "block" : "hidden"
          } bg-white bg-opacity-20 backdrop-blur-2xl py-4 rounded-lg shadow-lg`}
        >
          <a
            href="#home"
            className="block px-6 py-2 text-white hover:text-indigo-500 font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-6 py-2 text-white hover:text-indigo-500 font-medium"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-6 py-2 text-white hover:text-indigo-500 font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-6 py-2 text-white hover:text-indigo-500 font-medium"
          >
            Contact
          </a>
          <a
            href="#"
            onClick={() => handleModal()}
            className="block px-6 py-2 mt-4 bg-indigo-500 text-white text-center font-semibold rounded-full"
          >
            Get Quote
          </a>
        </div>
      </nav>

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex items-center justify-start h-full px-6 lg:px-16 py-20 text-white max-w-7xl mx-auto">
        <div className="max-w-lg">
          <animated.h1
            style={headerAnimation}
            className="text-4xl lg:text-6xl font-bold lg:ling-hight"
          >
            Swift and Secure Courier Services for Fast, Reliable Deliveries
          </animated.h1>

          <animated.p
            style={headerAnimation}
            className="mt-6 text-lg lg:text-xl"
          >
            We specialize in providing fast, safe, and reliable courier
            solutions for all your delivery needs, whether local or
            international.
          </animated.p>

          <animated.button
            onClick={() => handleModal()}
            style={buttonAnimation}
            className="mt-8 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600"
          >
            Get Started
          </animated.button>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
};
