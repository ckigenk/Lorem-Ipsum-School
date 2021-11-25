import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import Academics from "./components/Academics";
import Default from "./components/Default";
import Home from "./components/Home";
// import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Admissions from "./components/Admissions";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Academics" element={<Academics />}></Route>
        <Route path="/Admissions" element={<Admissions />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
        <Route element={<Default />}></Route>
        {/* <Route element={<Footer />}> </Route> */}
      </Routes>
    </div>
  );
}

export default App;
