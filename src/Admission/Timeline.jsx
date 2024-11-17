import style from "./Timeline.module.css";
import timelineImage from "./assets/admission_timeline.png";
import pin from "./assets/pin.png";
import { useState, useEffect ,useRef} from "react";
import lockedIcon from "./assets/locked.png";
import unlockedIcon from "./assets/unlocked.png";

const rounds = [
    {
        id: 1,
        name: "Round 1",
        startDate: "2023-10-1T10:30:00",
        endDate: "2023-10-27T10:30:00"
    },
    {
        id: 2,
        name: "Round 2",
        startDate: "2023-12-25T10:30:00",
        endDate: "2024-01-10T10:30:00"
    },
    {
        id: 3,
        name: "Round 3",
        startDate: "2024-03-08T10:30:00",
        endDate: "2024-03-29T10:30:00"
    }
];

function Timeline() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [posIndex, setPosIndex] = useState(0);

    const currentRound = rounds[0];
    const pinPosition = { left: 0, top: 0 };


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 24 * 60 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    const [roundsLocked, setRoundsLocked] = useState([true, true, true]);

    useEffect(() => {
        const updatedRoundsLocked = rounds.map(round => {
            console.log(currentDate.toDateString(), new Date(round.startDate).toDateString());
            return currentDate < new Date(round.startDate)
        });
        setRoundsLocked(updatedRoundsLocked);
        
    }, [currentDate, rounds]);

    useEffect(() => {
        for (let i = roundsLocked.length - 1; i >= 0; i--) {
            if (roundsLocked[i] === false) {
                setPosIndex(i+1);
                break;
            }
            if (i === 0) {
                setPosIndex(i);
            }
        }
    }, [roundsLocked]);

    const carRun = [{ left: 10, top: 0}, { left: 25, top: -4 }, { left: 45, top: 12 }, { left: 58, top: 70 }];
   
    console.log(posIndex);

    return (
        <div className={style.timelineDiv}>
            <img src={timelineImage} className={style.timelineImage} alt="Admission Timeline" />
            <img src={unlockedIcon} className={style.pin} alt="Pin" style={{ position: "absolute", left: `${carRun[posIndex].left}%`, top: `${carRun[posIndex].top}%`, zIndex: 2 }} />







            


        </div>
    );
}
export default Timeline;
