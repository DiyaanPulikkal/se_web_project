import style from "./Activity.module.css";

function Activity(props) {
  return (
    <div className={style.activityContainer}>
      <div className={style.activityImage}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={style.activityText}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link} target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#6a9c89"}}>More Info</a>
      </div>

    </div>);
}

export default Activity;
