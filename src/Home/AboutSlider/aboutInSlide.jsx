import aboutim from './aboutSlide.jpg';
import style from './aboutInSlide.module.css';
import {Link} from 'react-router-dom';


function aboutInSlide(){
    return(
        <div className={style.divcontainImageAbout}>
            <img src={aboutim} alt="Slide 2" />
            <div className={style.textOverAboutPic}>
                <h1>ABOUT Software @ KMITL</h1>
                <p>Software engineering (SE) is an engineering discipline concerning <br /> all aspects of software production, <br />including software analysis, design, development, testing, and deployment. <br /> SE requires profound abstract and logical thinking<br /> and the application of mathematics,<br /> logic, and computer science in order to produce efficient and <br /> reliable software with the available resources.</p>
                <div className={style.DivOverLink}>
                    <Link to="/about">
                        Read More
                        <button >&#62;</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default aboutInSlide;