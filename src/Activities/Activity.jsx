import style from "./Activity.module.css";

function Activity(props) {
  console.log(props);
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

        <input 
          type="button" 
          value = "Register"
          // edit tomorooow
          disabled={!props.maxParticipants || !props.startRegistration || !props.endRegistration}  
          onClick={() => alert("You clicked the Register button!")}
        />
        
  
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
