import style from "./Login.module.css";
import ima from "./assets/software.png";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Login({setIsLoggedIn, setCurrentStudentId}) {

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component loads
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    const student_id= document.getElementById("student_id").value;
    const password = document.getElementById("password").value;
    const data = {student_id: String(student_id), password: String(password)};
  
    fetch("http://localhost:8000/student/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === 200) {
          setIsLoggedIn(true);
          setCurrentStudentId(data.student_id);
          document.cookie = `student_id=${data.student_id}`;
          navigate("/");
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className={style.outterdiv}>
      <h1 className={style.head}>Log In</h1>
      <div className={style.backgroundLogin}>
        <form>
          <img src={ima} alt="Software" className={style.imageForlogin}/>
          <label className={style.textcolor}>
            Student ID:
          </label>
          <input
            type="text"
            name="student_id"
            id="student_id"
            placeholder="enter student id"
            className={style.customInput}
          />

          <label className={style.textcolor}>
            Password:
          </label>
          
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            className={style.customInput}
          />

          <a href="/forget" className={style.forget}>
            Forgot Password
          </a>
          <button className={style.buttonst} onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
