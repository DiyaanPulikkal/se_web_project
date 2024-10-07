import style from "./Login.module.css";
import ima from "./assets/software.png";
import { useEffect } from 'react';


function Login() {

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
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
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
          <button type="submit" className={style.buttonst}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
