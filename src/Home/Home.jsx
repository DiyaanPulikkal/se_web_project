<<<<<<< Updated upstream
import "./Home.module.css";
function Home() {
  return (
    <>
      <h1 className="pageHeading">Home</h1>
      <img src="" alt="Hello"></img>
    </>
  );
}
=======
  import AboutSlide from "./aboutInSlide.jsx";
  import AdmissionSlide from "./AdmissionInSlide.jsx";
  import { Carousel } from "react-responsive-carousel";
  import "react-responsive-carousel/lib/styles/carousel.min.css";
  import { useState } from "react";
  import style from "./Home.module.css";
>>>>>>> Stashed changes


  function Home() {
    
    return (
      <>
        



        <Carousel
            autoPlay       // Carousel auto-scrolls to the next slide
            infiniteLoop   // Loop slides infinitely
            showThumbs={false} // Hide thumbnails
            showStatus={false} // Hide status like "1 of 3"
            showArrows={true}  // Show navigation arrows
            transitionTime={1000}
            interval={8000} // Slide changes every 5 seconds
            swipeable={true}  // Allow swipe on touch devices
            emulateTouch={true} // Emulate touch on desktop
        >
          <div>
            <AboutSlide />
          </div>
          <div>
            <AdmissionSlide />
          </div>

        
        </Carousel>






      </>
    );
  }

  export default Home;
