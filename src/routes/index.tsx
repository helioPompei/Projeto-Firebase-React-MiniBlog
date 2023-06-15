// React Router Dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Styles
import { AppContainer } from "../styles/globalStyles";
// Components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// Pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppContainer>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AppContainer>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
