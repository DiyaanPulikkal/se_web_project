import style from './AdmissionInSlide.module.css';
import admissionim from './assets/AdmissionSlide.jpg';
import {Link} from 'react-router-dom';

function AdmissionInSlide() {
    return (
        <div className={style.divcontainImageAdmissionSlide}>
            <img src={admissionim} alt="Slide 3" />
            <div className={style.textOverAdmissionSlidePic}>
                <h1>Admission Year 2025</h1>
                <p> Early Round: Open "01-10-2023" <br /> First Round: Open "25-12-2023" <br /> Second Round: Open "08-03-2024"</p>
                <div className={style.DivOverLink}>
                    <Link to="/admission">
                        Read More
                        <button >&#62;</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default AdmissionInSlide;