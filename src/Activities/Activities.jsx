import style from "./Activities.module.css";
import ActSection from "./ActSection.jsx";
import { useEffect } from 'react';

import pic1 from './assets/picture1.jpg';
import pic2 from './assets/aiEvent.jpg';
import pic3 from './assets/studentpic.jpg';


function Activities() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component loads
  }, []);
  const archiveChildren = [
    {
      img: pic2,
      title: "2024 International AI Hackathon",
      description: "Create an innovative software prototype that addresses our present environmental and societal issues, targeting one or more in the link below.",
      link: "https://se.kmitl.ac.th/aihackathon/about",
      button: "have",
    },
  ];

  const upcomingChildren = [
    {
      img: pic3,
      title: "Final Exam", 
      description: "A comprehensive and often cumulative assessment that evaluates a student's understanding of the entire course material at the end of an academic term or semester",
      link: "https://www.reg.kmitl.ac.th/educalendar/2567/th-2.pdf",
    },
  ];

  return (
    <>
      <h1 className="pageHeading">Activities</h1>
      <img src={pic1} alt="Students" className={style.imageProgram} />
      <div className={style.sectionContainer}>
        <ActSection title="Upcoming" content={upcomingChildren}></ActSection>
        <ActSection title="Archive" content={archiveChildren}></ActSection>
      </div>
    </>
  );
}

export default Activities;
