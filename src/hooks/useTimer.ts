import { ObservableTime } from "@/classes";
import { useEffect, useState } from "react";
import { useAudioPlayer } from 'expo-audio';

const time = new ObservableTime();

const beepSource = require('assets/sounds/beep.mp3');

// TODO test
export default () => {
    const [minutes, setMinutes] = useState(time.getMinutes());
    const [seconds, setSeconds] = useState(time.getSeconds());
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const beepPlayer = useAudioPlayer(beepSource);

    const playBeep = () => {
        beepPlayer.seekTo(0);
        beepPlayer.play();
    }

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