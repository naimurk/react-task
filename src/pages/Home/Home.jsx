import { useEffect, useState } from "react";
import Header from "../../components/ui/Header/Header";
import Navbar from "../../components/ui/Navbar/Navbar";
import Service from "./Service";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //   console.log(isScrolled);
  return (
    <div>
      {/* <h1>navbar</h1> */}
      {isScrolled && <Navbar></Navbar>}
      <Header isScrolled={isScrolled}></Header>
      <Service></Service>

      {/* modal */}
      <div
        id="modal"
        className="fixed inset-0 flex z-20 items-center justify-center bg-black bg-opacity-50 hidden"
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-md">
          <div className="p-6">
            <h2 id="modalTitle" className="text-2xl font-semibold mb-4">
              Modal Title
            </h2>
            <p id="modalContent" className="text-gray-700 mb-4">
              Modal content goes here.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick="closeModal()"
                  className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
