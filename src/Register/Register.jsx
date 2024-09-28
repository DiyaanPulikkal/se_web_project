import style from "./Register.module.css";
import ima from "./software.png";

function Register() {
  return (
    <div className={style.outterdiv}>
      <h1 className={style.head}>Register</h1>
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

          <label className={style.textcolor}>
            Verify Password:
          </label>
          <input
            type="password"
            name="verifypassword"
            id="verifypassword"
            placeholder="********"
            className={style.customInput}
          />

          <button type="submit" className={style.buttonst}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
