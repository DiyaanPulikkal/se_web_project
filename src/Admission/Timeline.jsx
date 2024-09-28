import style from "./Timeline.module.css";
import timelineImage from "./assets/admission_timeline.png";
import pin from "./assets/pin.png";
import { useState, useEffect } from "react";
import lockedIcon from "./assets/locked.png";
import unlockedIcon from "./assets/unlocked.png";

const rounds = [
    {
        id: 1,
        name: "Round 1",
        startDate: "2024-06-28T10:30:00",
        endDate: "2024-07-28T10:30:00"
    },
    {
        id: 2,
        name: "Round 2",
        startDate: "2024-07-30T10:30:00",
        endDate: "2024-08-30T10:30:00"
    },
    {
        id: 3,
        name: "Round 3",
        startDate: "2024-09-03T10:30:00",
        endDate: "2024-10-03T10:30:00"
    }
];

function Timeline() {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 1));

    const currentRound = rounds[0];
    const pinPosition = findPinPosition(currentDate, currentRound);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 24 * 60 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    const [roundsLocked, setRoundsLocked] = useState([true, true, true]);

    useEffect(() => {
        const updatedRoundsLocked = rounds.map(round => currentDate < new Date(round.startDate));
        setRoundsLocked(updatedRoundsLocked);
    }, [currentDate, rounds]);


    return (
        <div className={style.timelineDiv}>
            <img src={timelineImage} className={style.timelineImage} alt="Admission Timeline" />
            <img src={pin} className={style.pin} alt="Pin" style={{ position: "absolute", left: `${pinPosition.left}%`, top: `${pinPosition.top}%`, zIndex: 2 }} />
            {
                roundsLocked.map((isLocked, index) => {
                    const icon = isLocked ? lockedIcon : unlockedIcon;
                    return (
                        <img
                            key={rounds[index].id}
                            src={icon}
                            className={style.lockedIcon}
                            alt={isLocked ? "Locked" : "Unlocked"}
                            style={{ position: "absolute", top: "46.5%", left: `${index * 29.35 + 5.4}%`, width: "4%", height: "7%", transform: "translate(-50%, -50%)" }}
                        />
                    );
                })
            }
        </div>
    );
}

function findPinPosition(currentDate, currentRound) {
    const left = 4.0 + (currentRound.id - 1) * 29.35;
    const top = 39;
    return { left: left, top: top };
}

export default Timeline;
