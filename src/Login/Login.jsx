import style from "./Login.module.css";
import ima from "./software.png";

function Login() {
  return (
    <div>
      <h1 className={style.head}>Login</h1>
      <div className={style.backgroundLogin}>
        <form>
          <br/>
          <img src={ima} alt="Software" className={style.image}/>
          <br/>

          <div className= {style.freespace}>
            <label className= {style.textcolor}>
            Username:&nbsp;
            <input type="text" name="username" id = "username" placeholder="E-mail" className= {style.customInput}/>
          </label>
          </div>
          
          <br />
          <div className= {style.freespace}>
            <label className= {style.textcolor}>
            Password:&nbsp;&nbsp;
            <input type="password" name="password" id = "password" placeholder="********" className= {style.customInput}/>
          </label>
          </div>
          
          <br />
          <a href="/forgot" className={style.forget}>Forgot Password</a>
          <br />
          <br />
          <a href="/register" className={style.register}>Register</a>
          <button type="submit" className={style.buttonst}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;