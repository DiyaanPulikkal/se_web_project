import style from './HeaderInSlide.module.css';
import AI_slide from './AI_slide.jpg';


function HeaderInSlide() {
    return (
        <div className={style.divcontainImageheader}>
            <img src={AI_slide} alt="Slide 1" />
            <div className={style.textOverheaderPic}>
                <h1>"AI and Python is the most <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;efficient and understanable"</h1>
                <p>Said by Header of Software Engineering Program</p>
            </div>
        </div>
    )
}

export default HeaderInSlide;