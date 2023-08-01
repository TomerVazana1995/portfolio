import Hero from "./pages/Hero/Hero";
import SideButtons from "./components/SideButtons/SideButtons";
import Projects from "./pages/Projects/Projects";
import NavBar from "./components/navbar/NavBar";
import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";
import AboutMe from "./pages/AbooutMe/AboutMe";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <NavBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <SideButtons />
      <Hero setSelectedPage={setSelectedPage}/>
      <AboutMe setSelectedPage={setSelectedPage}/>
      <Projects setSelectedPage={setSelectedPage} />
    </>
  );
}

export default App;
