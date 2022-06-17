import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Portfolio } from "./Pages/Portfolio";
import { Contact } from "./Pages/Contact";
import ResponsiveAppBar from "./Components/Main/ResponsiveAppBar";
import { Container } from "@mui/material";

const Main = () => {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Container>
  );
};
export default Main;
