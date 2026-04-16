import Time from "./Time";

// TODO tests
export default class CountdownTimer {
    private timeConfigured: number = 0;

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

    // FIXME probably with bug related to js async, check if time counted is right
    public runTimer(): void {
        this.timeConfigured = this.time.getEntireTimeInSeconds();

        this.countdownIntervalRef = setInterval(() => {
            this.makeCountdownStep();
        }, 1000);
    }

    private makeCountdownStep(): void {
        this.time.addSeconds(-1);

        if (this.time.getEntireTimeInSeconds() === 0) this.finishCountdown();
    }

    private finishCountdown(): void {
        clearInterval(this.countdownIntervalRef);

        if (this.onFinishCountdown) this.onFinishCountdown();

        if (this.resetWhenFinish) this.time.addSeconds(this.timeConfigured);
    }
}
