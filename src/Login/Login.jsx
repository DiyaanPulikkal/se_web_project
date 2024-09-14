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
            Username:
            <input type="text" name="username" id = "username"/>
          </label>
          </div>
          
          <br />
          <div className= {style.freespace}>
            <label className= {style.textcolor}>
            Password:
            <input type="password" name="password" id = "password"/>
          </label>
          </div>
          
          <br />
          <button type="submit" className={style.buttonst}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;