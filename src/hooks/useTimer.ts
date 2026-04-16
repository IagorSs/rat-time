import { ObservableTime } from "@/domain";
import { useEffect, useState } from "react";
import useSingleBeep from "./useSingleBeep";

const time = new ObservableTime();
let timerToReset: number = 0;

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
            if (time.getEntireTimeInSeconds() === 0) {
                playBeep();
                setIsTimerRunning(false);
                time.addSeconds(timerToReset);
            }
            else {
                setTimeout(() => time.addSeconds(-1), 1000)
            }
        }
    }, [minutes, seconds, isTimerRunning, playBeep]);

    return {
        minutes,
        seconds,
        isTimerRunning,
        addMinute: () => time.addMinutes(1),
        subMinute: () => time.addMinutes(-1),
        addSecond: () => time.addSeconds(1),
        subSecond: () => time.addSeconds(-1),
        startTimer: () => {
            setIsTimerRunning(true);
            timerToReset = time.getEntireTimeInSeconds();
        }
    }
}