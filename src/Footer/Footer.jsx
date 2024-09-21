import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import phoneIcon from "./phone-call.png";
import emailIcon from "./email.png";
function Footer() {
  return (
    <footer className={style.mainFooter}>
      <h2>
        <b>King Mongkut's Institute of Techonology, Ladkrabang</b>
      </h2>
      <div className={style.container}>
        <div className={style.footerLeft}>
          <h3>Address</h3>
          <p>
            King Mongkut Institute of Technology <br />
            Ladkrabang 1, Chalongkrung 1 Alley, <br />
            Lat Krabang, Bangkok 10520, Thailand
          </p>
          <br />
          <img className={style.icons} src={phoneIcon} alt="phone" />{" "}
          02-329-8000
          <br />
          <br />
          <img className={style.icons} src={emailIcon} alt="email" />{" "}
          siie@kmitl.ac.th
        </div>
        <div className={style.footerRight}>
          <div>
            <h3>Our Topics</h3>
            <Link to="/about">About</Link>
            <br />
            <Link to="/program">Program</Link>
            <br />
          </div>
          <div>
            <h3>&nbsp;</h3>
            <Link to="/activities">Activities</Link>
            <br />
            <Link to="/contact">Contact</Link>
            <br />
          </div>
          <div>
            <h3>&nbsp;</h3>
            <Link to="/activities">Admission</Link>
            <br />
            <Link to="/login">Login</Link>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
