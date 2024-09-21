import style from './AdmissionInSlide.module.css';
import admissionim from './AdmissionSlide.jpg';

function AdmissionInSlide() {
    return (
        <div className={style.divcontainImageAdmissionSlide}>
            <img src={admissionim} alt="Slide 3" />
            <div className={style.textOverAdmissionSlidePic}>
                <h1>Admission Year 2025</h1>
                <p> First Round: Open Soon <br /> Second Round: Open Soon </p>
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