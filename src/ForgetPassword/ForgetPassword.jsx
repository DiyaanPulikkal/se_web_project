import style from "./ForgetPassword.module.css";
import ima from "./assets/software.png";


function ForgetPassword() {
  return (
    <div className={style.outterdiv}>
      <h1 className={style.head}>Reset Password</h1>
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

          <button type="submit" className={style.buttonst}>
            confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
