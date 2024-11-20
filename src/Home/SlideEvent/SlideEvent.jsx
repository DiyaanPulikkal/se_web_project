import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevArrowImage from './assets/leftArrow.png'; // Path to your previous button image
import nextArrowImage from './assets/rightArrow.png'; // Path to your next button image
import style from "./SlideEvent.module.css";
import hackathon from './assets/AIhackathon.jpg';
import mapping from './assets/map.png';
import { Link } from "react-router-dom";
import { useEffect } from "react";



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
    const [upcomingActivities, setUpcomingActivities] = useState([]);
    useEffect(() => {
        // Fetch data from the FastAPI server
        fetch("http://localhost:8000/activity/upcoming")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setUpcomingActivities(data);
          })
          .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
          });
      }, []);

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
                {upcomingActivities.map((event, index) => (
                    <div key={index} className={style.slide}>
                        <img src={`http://localhost:8000/static/${event.image}`} alt={event.startRegistration} className={style.slideImage} />
                        <p className={style.slideDate}>{event.startRegistration}</p>
                        <div className={style.divCoverIconNLocation}>   
                            <img src={mapping} alt={"KMITL"} className={style.slideIcon} />
                            <p className={style.slideLocation}>{"KMITL"}</p>
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