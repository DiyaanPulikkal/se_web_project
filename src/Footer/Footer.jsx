import style from './Footer.module.css'
import phoneIcon from './phone-call.png'
import emailIcon from './email.png'
function Footer() {
  return (
    <footer className={style.mainFooter}>
      <h2><b>King Mongkut's Institute of Techonology, Ladkrabang</b></h2>
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
        <div className={style.footerRight}>
          <div><h3>Our Topics</h3></div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;