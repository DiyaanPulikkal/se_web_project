import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevArrowImage from './assets/leftArrow.png'; // Path to your previous button image
import nextArrowImage from './assets/rightArrow.png'; // Path to your next button image
import style from "./SlideEvent.module.css";
import hackathon from './assets/AIhackathon.jpg';
import mapping from './assets/map.png';
import { Link } from "react-router-dom";



function SlideEvent() {

    const NextArrow = ({ onClick }) => {
        return (
            <div className={style.customNextArrow} onClick={onClick}>
                <img
                    src={nextArrowImage}
                    alt="Next"
                    className={style.arrowImage}
                />
            </div>
        );
    };

    // Custom Prev Arrow
    const PrevArrow = ({ onClick }) => {
        return (
            <div className={style.customPrevArrow} onClick={onClick}>
                <img
                    src={prevArrowImage}
                    alt="Prev"
                    className={style.arrowImage}
                />
            </div>
        );
    };

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        lazyLoad: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    const events = [
        {
            date: "24 August 2024",
            location: "KMITL",
            imageUrl: hackathon, 
            icon: mapping,
        },
        {
            date: "25 August 2024",
            location: "KMITL",
            imageUrl: "https://via.placeholder.com/150", // placeholder image
            icon: mapping,
        },
        {
            date: "26 August 2024",
            location: "KMITL",
            imageUrl: "https://via.placeholder.com/150",
            icon: mapping,
        },
    ];
    //end
    return (
        <div className = {style.containAll}>
            <h1 className={style.headUpcomingEvent}>Upcoming Event</h1>
            <Slider {...settings}>
                {events.map((event, index) => (
                    <div key={index} className={style.slide}>
                        <img src={event.imageUrl} alt={event.date} className={style.slideImage} />
                        <p className={style.slideDate}>{event.date}</p>
                        <div className={style.divCoverIconNLocation}>   
                            <img src={event.icon} alt={event.location} className={style.slideIcon} />
                            <p className={style.slideLocation}>{event.location}</p>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className={style.DivOverLink}>
                    <Link to="/activities">
                        Read More
                        <button >&#62;</button>
                    </Link>
            </div>
        </div>

    )
}

export default SlideEvent;