import {Link} from 'react-router-dom'
import './NavBar.module.css'
import styles from './NavBar.module.css'
import logo from './logo.png'
function NavBar(){
    return(
        <nav>
            <ul>
                <li><Link to="/"><img src={logo} alt='logo' /></Link></li>
                <li><Link className={styles.textLink} to="/admission">Admission</Link></li>
                <li><Link className={styles.textLink} to="/program">Program</Link></li>
                <li><Link className={styles.textLink} to="/about">About</Link></li>
                <li><Link className={styles.textLink} to="/activities">Activities</Link></li>
                <li><Link className={styles.textLink} to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;