import Time from "./Time";

// TODO revisit tests
export default class CountdownTimer {
    private timeConfigured: number = 0;
    private startTime?: number;

    // TODO make customizable by strategy pattern
    private resetWhenFinish: boolean = true;

    private onFinishCountdown?: VoidFunction;

    private countdownIntervalRef?: number;

    public constructor(
        private readonly time: Time
    ) {}

    public subscribeFinishObserver(finishObserver: VoidFunction) {
        this.onFinishCountdown = finishObserver;
    }

    public runTimer(): void {
        this.timeConfigured = this.time.getEntireTimeInSeconds();
        this.startTime = Date.now();

        this.countdownIntervalRef = setInterval(() => {
            this.makeCountdownStep();
        }, 1000);
    }

    private makeCountdownStep(): void {
        const timeSinceTimerStarts = this.getTimeInSecondsSinceStart();
        this.time.setTime(this.timeConfigured - timeSinceTimerStarts);

        if (this.time.getEntireTimeInSeconds() === 0) this.finishCountdown();
    }

    private getTimeInSecondsSinceStart(): number {
        return Math.floor((Date.now() - this.startTime!) / 1_000);
    }

    private finishCountdown(): void {
        clearInterval(this.countdownIntervalRef);

        if (this.onFinishCountdown) this.onFinishCountdown();

        if (this.resetWhenFinish) this.time.addSeconds(this.timeConfigured);
    }
}
