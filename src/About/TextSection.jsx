import style from "./About.module.css";
function TextSection(props) {
    //const mainClass = props.index % 2 !== 0 ? style.backgroundAreaEachbox1and3 : style.backgroundAreaEachbox24;

    if (props.index % 2 !== 0) {
        return (
                <div className= {style.backgroundAreaEachbox1and3}>
                    <h1>{props.heading}</h1>
                    <div className={style.textExplainArea}>
                        {props.content}
                    </div>
                </div>
        );
    }

    return (
            <div className= {style.backgroundAreaEachbox24}> 
                <div className={style.textExplainArea}>
                    {props.content}
                </div>
                <h1>{props.heading}</h1>
            </div>
    );
    
    
}

export default TextSection;