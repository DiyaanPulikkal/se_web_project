import style from "./About.module.css";
function TextSection(props) {
    const mainClass = props.index % 2 !== 0 ? style.backgroundAreaEachbox1and3 : style.backgroundAreaEachbox24;

    return (
        <div className= {mainClass}>
            <h1>{props.heading}</h1>
            <div className={style.textExplainArea}>
                {props.content}
            </div>
        </div>
    );
}

export default TextSection;