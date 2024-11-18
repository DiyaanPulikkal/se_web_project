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
import { useEffect, useState } from "react";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2){ 
    return parts.pop().split(';').shift();
  }
  return null;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState(null);

  useEffect(() => {
    const id_cookie = getCookie("student_id");
    if (id_cookie) {
      setCurrentStudentId(id_cookie);
      setIsLoggedIn(true);
    }
  }, []);

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
