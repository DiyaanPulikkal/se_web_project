import style from "./Hamburger.module.css";


function Hamburger({setIsLoggedIn, isLoggedIn, setCurrentStudentId, currentStudentId}) {
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentStudentId(null);
    document.cookie = `student_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    window.location.href = "/";
  }

  return (
    <div className={style.hamburger}>
        <div className={style.burger}></div>
        <div className={style.burger}></div>
        <div className={style.burger}></div>
    </div>
  );
}


export default Hamburger;