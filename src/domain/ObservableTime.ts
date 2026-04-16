import Time from "./Time";

type Observable<T> = (arg: T) => void

// TODO test
export default class ObservableTime extends Time {
    private minutesSubscribers = new Set<Observable<string>>();
    private secondsSubscribers = new Set<Observable<string>>();

    private notifyMinutes() {
        this.minutesSubscribers.forEach(minutesSub => minutesSub(this.getMinutes()))
    }

    private notifySeconds() {
        this.secondsSubscribers.forEach(secondsSub => secondsSub(this.getSeconds()))
    }

    public addMinutesSubscriber(minutesSub: Observable<string>) {
        this.minutesSubscribers.add(minutesSub);
    }

    public addSecondsSubscribers(secondsSub: Observable<string>) {
        this.secondsSubscribers.add(secondsSub);
    }

    // TODO optimize to notify only observables needed
    override addSeconds(timeToAdd: number): void {
        super.addSeconds(timeToAdd);

        this.notifyMinutes();
        this.notifySeconds();
    }
}