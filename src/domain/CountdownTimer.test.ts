import CountdownTimer from "./CountdownTimer";
import Time from "./Time";

let countdownTimer: CountdownTimer;
let time: Time;

const ACCEPTANCE_MARGIN = 20;

beforeEach(() => {
    time = new Time();
    countdownTimer = new CountdownTimer(time);
});

describe("Using mocked timers", () => {
    beforeEach(() => {
        jest.useFakeTimers();
        time = new Time();
        countdownTimer = new CountdownTimer(time);
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it("should invoke finish callback when timer finished", () => {
        time.addSeconds(2);

        const finishCallback = jest.fn();
        countdownTimer.subscribeFinishObserver(finishCallback);
        countdownTimer.runTimer();

        jest.advanceTimersByTime(2000);

        expect(finishCallback).toHaveBeenCalledTimes(1);
    });
})

describe("Using real timers", () => {
    const lockEventLoop = async (duration: number) => {
        const start = Date.now();

        while (Date.now() - start < duration) {}
    }

    it("should each step on countdown delay 1s when event loop is free", (done) => {
        // TODO maybe parametrize this
        time.addSeconds(3);

        const executionTimes: number[] = [];

        const originalAddSeconds = time.addSeconds.bind(time);
        time.addSeconds = (seconds: number) => {
            const currentTime = Date.now();
            
            if (seconds === -1) {
                executionTimes.push(currentTime - lastTime);
    
                lastTime = currentTime;
            }

            return originalAddSeconds(seconds);
        };

        let lastTime = Date.now();
        countdownTimer.runTimer();

        countdownTimer.subscribeFinishObserver(() => {
            expect(
                executionTimes.some(time => time > 1000 + ACCEPTANCE_MARGIN || time < 1000 - ACCEPTANCE_MARGIN)
            ).toBe(false);

            done()
        });
    });

    it("should countdown finish time properly even if the event loop is busy", (done) => {
        const timerTimeInMs = 4_000;

        time.addSeconds(timerTimeInMs / 1_000);

        const startTime = Date.now();
        countdownTimer.runTimer();

        // Putting callback on queue that will lock event loop when reach to call stack
        lockEventLoop(3_000);

        countdownTimer.subscribeFinishObserver(() => {
            expect(Date.now() - startTime).toBeLessThan(timerTimeInMs + ACCEPTANCE_MARGIN);

            done()
        });
    }, 10_000);
})
