import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "./assets/logo.png";
import accountIcon from "./assets/account-icon.png";

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

function NavBar({setIsLoggedIn, isLoggedIn, setCurrentStudentId, currentStudentId}) {

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentStudentId(null);
    deleteCookie("student_id");
    window.location.href = "/";

  }
  
  return (
    <nav className={style.mainNav}>
      <h2>
        Software
        <br />
        &nbsp;&nbsp;Engineering <br />
        &nbsp;&nbsp;@KMITL
      </h2>
      <Link to="/">
        <img className={style.logo} src={logo} alt="logo" />
      </Link>
      <div className={style.listDiv}>
        <ul>
          <li>
            <Link className={style.textLink} to="/admission">
              Admission
            </Link>
          </li>
          <li>
            <Link className={style.textLink} to="/program">
              Program
            </Link>
          </li>
          <li>
            <Link className={style.textLink} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={style.textLink} to="/activities">
              Activities
            </Link>
          </li>
          <li>
            <Link className={style.textLink} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            {!isLoggedIn ? (<Link className={style.login_link} to="/login">
              <img src={accountIcon} className={style.account_icon}></img>Login
            </Link>) : <div className={style.divLog}><p>ID: {currentStudentId}</p><button  onClick={() => handleLogout()}>Logout</button></div>}
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default NavBar;
