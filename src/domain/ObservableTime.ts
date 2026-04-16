import Time from "./Time";

type Observable<T> = (arg: T) => void

// TODO test
export default class ObservableTime extends Time {
    private minutesSubs = new Set<Observable<string>>();
    private secondsSubs = new Set<Observable<string>>();

    private notifyMinutes() {
        this.minutesSubs.forEach(minutesSub => minutesSub(this.getMinutes()))
    }

    private notifySeconds() {
        this.secondsSubs.forEach(secondsSub => secondsSub(this.getSeconds()))
    }

    public addMinutesSub(minutesSub: Observable<string>) {
        this.minutesSubs.add(minutesSub);
    }

    public addSecondsSub(secondsSub: Observable<string>) {
        this.secondsSubs.add(secondsSub);
    }

    // TODO optimize to notify only observables needed
    override addSeconds(timeToAdd: number): void {
        super.addSeconds(timeToAdd);

        this.notifyMinutes();
        this.notifySeconds();
    }
}