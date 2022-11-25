import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";

function App() {
const [selectedPage, setSelectedPage] = useState('home');
const [isTopOfPage, setIsTopOfPage] = useState(true);
const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY === 0) setIsTopOfPage(true);
    if(window.scrollY !== 0) setIsTopOfPage(false);
  }

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
},[]);

  return (
    <div className="app bg-deep-blue">
      <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      <div className="w5/6 mx-auto md:h-full">

      </div>
    </div>
  );
}

export default App;
