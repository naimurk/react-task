import { useEffect, useState } from "react";
import Header from "../../components/ui/Header/Header";
import Navbar from "../../components/ui/Navbar/Navbar";
import Service from "./Service";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <>
      {/* <h1>navbar</h1> */}
      {isScrolled && <Navbar></Navbar>}
      <Header isScrolled={isScrolled}></Header>
      <Service></Service>
    </>
  );
};

export default Home;
