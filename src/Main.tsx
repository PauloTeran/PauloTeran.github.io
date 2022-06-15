import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Portfolio } from "./Pages/Portfolio";
import { Social } from "./Pages/Social";
import { Contact } from "./Pages/Contact";
import ResponsiveAppBar from "./Components/Main/ResponsiveAppBar";

const Main = () => {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/social" element={<Social />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
export default Main;
