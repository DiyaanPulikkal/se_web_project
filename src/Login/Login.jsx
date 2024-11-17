import style from "./Login.module.css";
import ima from "./assets/software.png";
import { useEffect } from 'react';

function SubmitCredential(setIsLoggedIn) {
  const student_id= document.getElementById("student_id").value;
  const password = document.getElementById("password").value;
  const data = {student_id: student_id, password: password};

  fetch('http://localhost:8000/student/login', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 200) {
      window.location.href = "/dashboard";
      setIsLoggedIn(true);
    } else {
      alert("Invalid Credentials");
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}




function Login({setIsLoggedIn}) {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component loads
  }, []);

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
            placeholder="enter e-mail"
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
          <a href="/register" className={style.register}>
            Register
          </a>
          <button type="submit" className={style.buttonst} onClick={()=>SubmitCredential(setIsLoggedIn)}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
