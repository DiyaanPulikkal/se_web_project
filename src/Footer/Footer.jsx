import style from './Footer.module.css'
import phoneIcon from './phone-call.png'
import emailIcon from './email.png'
function Footer() {
  return (
    <footer className={style.mainFooter}>
      <h2><bold>King Mongkut's Institute of Techonology, Ladkrabang</bold></h2>
      <div className={style.container}>
        <div className={style.footerLeft}>
          <h3>Address</h3>
          <p>King Mongkut Institute of Technology <br />Ladkrabang 1, Chalongkrung 1 Alley, <br />Lat Krabang, Bangkok 10520, Thailand</p>
          <br />
          <img className={style.icons} src={phoneIcon} alt="phone" /> xxx-xxx-xxxx
          <br />
          <br /> 
          <img className={style.icons} src={emailIcon} alt="email" /> xxxxx@xxxxx.xxx
        </div>
      </div>
    </footer>
  );
}

export default Footer;