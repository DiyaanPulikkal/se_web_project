import style from "./Activity.module.css";

function Activity(props){

  const goToForm = (index) => {
    window.location.href = `http://localhost:8000/activity/add_participant/${index}/form/`;
  }

  const addParticipant = (index) => {
    fetch(`http://localhost:8000/activity/add_participant/${index}/${props.currentStudentId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      }}
    ).then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  }

  
  if (props.mainTitle === "Upcoming") {
    return (
      <div className={style.activityContainer}>
        <div className={style.activityImage}>
          <img src={"http://localhost:8000/static/" + props.image} alt={props.title} />
        </div>
        <div className={style.activityText}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <a href={props.link} target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#6a9c89"}}>More Info</a>
        </div>
        {!props.maxParticipants || !props.startRegistration || !props.endRegistration}

        {props.isGroup ? 
        <input 
          type="button" 
          value = "Register"
          disabled={new Date() < new Date(props.startRegistration) || props.maxParticipants <= props.participants.length || props.currentStudentId === null}
          onClick={() => goToForm(props.index)}
        /> : 
        <input 
          type="button" 
          value = "Register"
          disabled={!props.maxParticipants || !props.startRegistration || !props.endRegistration}  
          onClick={() => addParticipant(props.index)}
        />}
  
      </div>);
  } else {
    return (
      <div className={style.activityContainer}>
        <div className={style.activityImage}>
          <img src={"http://localhost:8000/static/" + props.image} alt={props.title} />
        </div>
        <div className={style.activityText}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <a href={props.link} target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#6a9c89"}}>More Info</a>
        </div>
  
      </div>);
  }
  
}

export default Activity;
