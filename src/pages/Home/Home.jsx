import { useEffect, useState } from "react";
import Header from "../../components/ui/Header/Header";
import Navbar from "../../components/ui/Navbar/Navbar";

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
      <div className="min-h-screen">
        <h1>d</h1>
      </div>
    </>
  );
};

export default Home;
