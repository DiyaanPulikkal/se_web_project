import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar/NavBar.jsx";
import Home from "./Home/Home.jsx";
import Admission from "./Admission/Admission.jsx";
import Program from "./Program/Program.jsx";
import About from "./About/About.jsx";
import Activities from "./Activities/Activities.jsx";
import Contact from "./Contact/Contact.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import Forget from "./ForgetPassword/ForgetPassword.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState(null);

  return (
    <>
      <Router>
        <header>
          <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentStudentId={setCurrentStudentId}/>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route
            path="/admission"
            element={<Admission/>}
          />
          <Route path="/activities" element={<Activities currentStudentId={currentStudentId}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setCurrentStudentId={setCurrentStudentId}/>} />
          <Route path="/forget" element={<Forget />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
