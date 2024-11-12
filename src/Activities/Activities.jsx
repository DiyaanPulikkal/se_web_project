import style from "./Activities.module.css";
import ActSection from "./ActSection.jsx";
import { useEffect, useState } from 'react';

import pic1 from './assets/picture1.jpg';

function Activities() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component loads
  }, []);
  const [upcomingActivities, setUpcomingActivities] = useState([]);
  const [archivedActivities, setArchivedActivities] = useState([]);

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

  useEffect(() => {
    // Fetch data from the FastAPI server
    fetch("http://localhost:8000/activity/archived")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setArchivedActivities(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);


  return (
    <>
      <h1 className="pageHeading">Activities</h1>
      <img src={pic1} alt="Students" className={style.imageProgram} />
      <div className={style.sectionContainer}>
        <ActSection title="Upcoming" content={upcomingActivities} />
        <ActSection title="Archive" content={archivedActivities} />
      </div>
    </>
  );
}

export default Activities;
