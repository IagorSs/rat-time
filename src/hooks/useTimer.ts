import { CountdownTimer, ObservableTime } from "@/domain";
import { useEffect, useState } from "react";
import useSingleBeep from "./useSingleBeep";

const time = new ObservableTime();
const countdownTimer = new CountdownTimer(time);

// TODO test
export default () => {
    const [minutes, setMinutes] = useState(time.getMinutes());
    const [seconds, setSeconds] = useState(time.getSeconds());
    const [isCountingDown, setIsCountingDown] = useState(false);

    const { playBeep } = useSingleBeep();

    useEffect(() => {
        time.addMinutesSubscriber(setMinutes);
        time.addSecondsSubscribers(setSeconds);

        countdownTimer.subscribeFinishObserver(() => {
            playBeep();
            setIsCountingDown(false);
        });
    }, [playBeep]);

    return {
        minutes,
        seconds,
        isTimerRunning: isCountingDown,
        addMinute: () => time.addMinutes(1),
        subMinute: () => time.addMinutes(-1),
        addSecond: () => time.addSeconds(1),
        subSecond: () => time.addSeconds(-1),
        startTimer: () => {
            setIsCountingDown(true);
            countdownTimer.runTimer();
        }
    }
}