import style from "./Admission.module.css";
import info from "./assets/info.png";
import Timeline from "./Timeline.jsx";
import { useEffect } from 'react';

function Admission(props) {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component loads
  }, []);

  return (
    <>
      <h1 className="pageHeading">Admission</h1>
      <h2 className={style.sectionHeading}> <img src={info} />Admission Timeline (2025, Real-time)</h2>
      <div className={style.timelineDiv}>
        <Timeline />

      </div>
    </>
  );
}

export default Admission;
