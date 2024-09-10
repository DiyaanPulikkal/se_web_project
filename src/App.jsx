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


function App() {
  return (
    <>
    
    <Router>
    <div style={{backgroundColor: '#0B2F9F', display: 'flex'}}>
      <NavBar />
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
    
  )
}

export default App;
