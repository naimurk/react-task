import { useEffect, useState } from "react";
import Header from "../../components/ui/Header/Header";
import Navbar from "../../components/ui/Navbar/Navbar";
import Service from "./Service";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!modalOpen);
  };

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
      {isScrolled && <Navbar handleModal={handleModal}></Navbar>}
      <Header isScrolled={isScrolled} handleModal={handleModal}></Header>
      <Service handleModal={handleModal}></Service>

      {/* modal */}
      <Modal modalOpen={modalOpen} setIsModalOpen={setIsModalOpen}></Modal>
    </div>
  );
};

export default Home;
