import style from "./Activities.module.css";
import ActSection from "./ActSection.jsx";
import { useEffect } from 'react';

import pic1 from './assets/picture1.jpg';


function Activities() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component loads
  }, []);
  const archiveChildren = [
    {
      img: "https://via.placeholder.com/150",
      title: "Archived Activity 1",
      description: "Description of archived activity 1",
      link: "https://www.google.com",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Archived Activity 2",
      description: "Description of archived activity 2",
      link: "https://www.google.com",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Archived Activity 3",
      description: "Description of archived activity 3",
      link: "https://www.google.com",
    },
  ];

  const upcomingChildren = [
    {
      img: "https://via.placeholder.com/150",
      title: "Upcoming Activity 1",
      description: "Description of upcoming activity 1",
      link: "https://www.google.com",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Upcoming Activity 2",
      description: "Description of upcoming activity 2",
      link: "https://www.google.com",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Upcoming Activity 3",
      description: "Description of upcoming activity 3",
      link: "https://www.google.com",
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
