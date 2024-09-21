import AboutSlide from "./aboutInSlide.jsx";
import AdmissionSlide from "./AdmissionInSlide.jsx";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import Glasgowuniver from './gasglowUni.jpg';
import KingMongkut from './kmitlUni.jpg';
import Queenlanduniver from './queenlandUni.jpg';

import AI_slide from './AI_slide.jpg';

// import image for insert text skill mapping
import webIm from './frontEnd.png';
import mobileIm from './mobileDeveloper.png';
import cyber from './cyberSecurity.png';
import ai from './artificialEng.png';
import CirMap from './graph.png';
//end


import prevArrowImage from './slideToleft.png'; // Path to your previous button image
import nextArrowImage from './slideToright.png'; // Path to your next button image

function Home() {

  // Custom previous arrow button
  const customPrevArrow = (onClickHandler, hasPrev, label) => (
    <button
      type="button"
      className={style.customPrevArrow}
      onClick={onClickHandler}
      title={label}
      style={{ display: hasPrev ? 'block' : 'none' }} // Show only if previous slide exists
    >
      <img src={prevArrowImage} alt="Previous" className={style.arrowImage} />
    </button>
  );

  // Custom next arrow button
  const customNextArrow = (onClickHandler, hasNext, label) => (
    <button
      type="button"
      className={style.customNextArrow}
      onClick={onClickHandler}
      title={label}
      style={{ display: hasNext ? 'block' : 'none' }} // Show only if next slide exists
    >
      <img src={nextArrowImage} alt="Next" className={style.arrowImage} />
    </button>
  );

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
        // emulateTouch={true} // Emulate touch on desktop
          renderArrowPrev={customPrevArrow} // Apply custom prev button
          renderArrowNext={customNextArrow} // Apply custom next button
        >
          <div>
            <img src={AI_slide} alt="AI" className={style.imageFirstSlide}/>
          </div>
          <div>
            <AboutSlide />
          </div>
          <div>
            <AdmissionSlide />
          </div>

      </Carousel>




      <div className={style.divContainHeadandSub}>
            <h1 className={style.headText}>" SOFTWARE can change the World "</h1>
            <p className={style.subText}>Empowering the future through innovative software engineering, <br /> we are dedicated to building solutions that <br /> enhance our department's impact on the world.</p>
      </div>

      <div className={style.insertedText}>
          <div className={style.divContainJobDes}>
            <div className={style.divContainWebDeveloper}>
              <img src={webIm} alt="web development" />
              <h1>Web Developer</h1>
              <p>Creates responsive websites and web applications, focusing on user experience and performance.</p>
            </div>
              
            <div className={style.divContainorders}>
              <img src={mobileIm} alt="mobile development" />
              <h1>Mobile Application Developer</h1>
              <p>Builds user-friendly applications for iOS and Android, using native or cross-platform tools.</p>
            </div>

            <div className={style.divContainorders}>
              <img src={cyber} alt="network security" />
              <h1>Network Security Engineer</h1>
              <p>Protects networks from cyber threats by implementing security measures and monitoring vulnerabilities.</p>
            </div>

            <div className={style.divContainorders}>
              <img src={ai} alt="artificial intelligence" />
              <h1>Artificial Intelligence Engineer</h1>
              <p>Develops intelligent systems using machine learning and deep learning to solve complex problems.</p>
            </div>
          </div>

          
          <a target="_blank" href = {'https://skill-mapping.kmitl.ac.th/curriculum/01039'}><button className={style.skillMapping}><img src = {CirMap}  alt="circle graph" />View More Skill Mapping</button></a>
          
          
      
      </div>






      <div className={style.programdiv}>
        <h1 className={style.headerOfProgram}>Explore Programs</h1>
        
        <div className={style.innerProgramDiv}>
          <div className={style.divGlasgowUni}>
            <Link to="/program#Glasgow">
              <img src={Glasgowuniver} alt="Glasgow university" />
            </Link>
            <h1>The University of Glasgow</h1>
          </div>
          
          <div className={style.divKMITLandQueenland}>
            <div className={style.divKmitl}>    
              <Link to="/program#KMITL">
                <img src={KingMongkut} alt="KMITL" />
              </Link>
              <h1>King Mongkut's Institute of Technology Ladkrabang</h1>
            </div>
            <div className={style.divQueenland}>
              <Link to="/program#Queensland">
                <img src={Queenlanduniver} alt="The University of Queenland" />
              </Link>
              <h1>The University of Queenland</h1>
            </div>
          
          </div>
        </div>
        
      </div>


      






    </>
  );
}

export default Home;
