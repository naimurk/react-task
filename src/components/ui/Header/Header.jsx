const Header = ({ isScrolled }) => {
  return (
    <header id="home" className="relative h-screen bg-slideshow">
      <nav
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
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
              // onclick="openQuoteModal()"
              className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition duration-300"
            >
              Get Quote
            </a>
          </div>

          <div className="lg:hidden">
            <button id="menuBtn1" className="text-gray-300 focus:outline-none">
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
          id="mobileMenu1"
          className="lg:hidden hidden bg-white bg-opacity-20 backdrop-blur-2xl py-4 rounded-lg shadow-lg"
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
            onClick="openQuoteModal()"
            className="block px-6 py-2 mt-4 bg-indigo-500 text-white text-center font-semibold rounded-full"
          >
            Get Quote
          </a>
        </div>
      </nav>

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex items-center justify-start h-full px-6 lg:px-16 py-20 text-white max-w-7xl mx-auto">
        <div className="max-w-lg">
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-4xl lg:text-6xl font-bold lg:ling-hight"
          >
            Swift and Secure Courier Services for Fast, Reliable Deliveries
          </h1>

          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="mt-6 text-lg lg:text-xl"
          >
            We specialize in providing fast, safe, and reliable courier
            solutions for all your delivery needs, whether local or
            international.
          </p>
          <button
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            onClick="openQuoteModal()"
            className="mt-8 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
