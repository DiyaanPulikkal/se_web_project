import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from "./NavBar/NavBar.jsx";
import Home from "./Home/Home.jsx";
import Admission from "./Admission/Admission.jsx";
import Program from "./Program/Program.jsx";
import About from "./About/About.jsx";
import Activities from "./Activities/Activities.jsx";
import Contact from "./Contact/Contact.jsx";
import Login from "./Login/Login.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState } from "react";


function App() {
  const [isLogged, setIsLogged] = useState({value: false});

  return (
    <>
        <Router>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/program" element={<Program />} />
            <Route path="/admission" element={<Admission isLoggedIn={isLogged}/>} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <footer>
            <Footer />
          </footer>
        </Router>


    </>

  )
}

export default App;
