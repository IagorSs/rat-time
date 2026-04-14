import { ObservableTime } from "@/classes";
import { useEffect, useState } from "react";
import useSingleBeep from "./useSingleBeep";

const time = new ObservableTime();

// TODO test
export default () => {
    const [minutes, setMinutes] = useState(time.getMinutes());
    const [seconds, setSeconds] = useState(time.getSeconds());
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const { playBeep } = useSingleBeep();

    useEffect(() => {
        time.addMinutesSub(setMinutes);
        time.addSecondsSub(setSeconds);
    }, []);

    useEffect(() => {
        if (isTimerRunning) {
            if (minutes === "00" && seconds === "00") {
                playBeep();
                setIsTimerRunning(false);
            }
            else {
                setTimeout(() => time.addTime(-1), 1000)
            }
        }
    }, [minutes, seconds, isTimerRunning]);

    return {
        minutes,
        seconds,
        isTimerRunning,
        addMinute: () => time.addTime(60),
        subMinute: () => time.addTime(-60),
        addSecond: () => time.addTime(1),
        subSecond: () => time.addTime(-1),
        startTimer: () => {
            setIsTimerRunning(true);
        }
    }
}