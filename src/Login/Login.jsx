import style from "./Login.module.css";
import ima from "./software.png";

function Login() {
  return (
    <div className={style.outterdiv}>
      <h1 className={style.head}>Log In</h1>
      <div className={style.backgroundLogin}>
        <form>
          <br />
          <img src={ima} alt="Software" className={style.image} />
          <br />

          <div className={style.freespace}>
            <label className={style.textcolor}>
              Username:&nbsp;
              <input
                type="text"
                name="username"
                id="username"
                placeholder="E-mail"
                className={style.customInput}
              />
            </label>
          </div>

          <br />
          <div className={style.freespace}>
            <label className={style.textcolor}>
              Password:&nbsp;&nbsp;
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className={style.customInput}
              />
            </label>
          </div>

          <br />
          <div align="center">
            <a href="/forgot" className={style.forget}>
              Forgot Password
            </a>
          </div>
          <br />
          <div align="center">
            <a href="/register" className={style.register}>
              Register
            </a>
          </div>
          <br />
          <br />
          <div align="center">
            <button type="submit" className={style.buttonst}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
