import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from './logo.png'
import accountIcon from './account-icon.png'
function NavBar(){
    return(
        <nav className={styles.mainNav}>
            <h2>
                Software Engineering @ KMITL
            </h2>
            <Link to="/"><img className={styles.logo} src={logo} alt='logo' /></Link>
            <ul>
                <li><Link className={styles.textLink} to="/admission">Admission</Link></li>
                <li><Link className={styles.textLink} to="/program">Program</Link></li>
                <li><Link className={styles.textLink} to="/about">About</Link></li>
                <li><Link className={styles.textLink} to="/activities">Activities</Link></li>
                <li><Link className={styles.textLink} to="/contact">Contact</Link></li>
                <li><Link className={styles.login_link} to="/contact"><img src={accountIcon} className={styles.account_icon}></img>Login</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;