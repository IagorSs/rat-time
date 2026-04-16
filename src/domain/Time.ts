import { NumbersValidators } from "@/validators";

export const MAX_TIME = 3599

export default class Time {
    private timeInSeconds: number;

    public constructor(
        plainTime: number = 0
    ) {
        this.timeInSeconds = Time.timeValueValidator(plainTime);
    }

    protected static timeValueValidator(plainTime: number): number {
        return NumbersValidators.nonNegative(
            NumbersValidators.integer(
                NumbersValidators.less(plainTime, MAX_TIME + 1)
            )
        );
    }

    public getMinutes(): string {
        return Time.formatTime(Math.floor(this.timeInSeconds / 60));
    }

    public getSeconds(): string {
        return Time.formatTime(this.timeInSeconds % 60);
    }

    // TODO change this guy to TimeVisualizer or some like this, that will from 0 to 59
    /**
     * This utility will return time formatter as 2 digit string, use only to integer
     * values between 0 and 99.
     * @param timeValue number
     * @returns 2-digit string representing argument passed
     */
    protected static formatTime(timeValue: number): string {
        return timeValue.toString(10).padStart(2, "0");
    }

    public canAdd(): boolean {
        return this.timeInSeconds < MAX_TIME;
    }

    public canSubtract(): boolean {
        return this.timeInSeconds > 0;
    }

    // TODO some kind of validation in arg number
    public addSeconds(secondsToAdd: number): void {
        this.timeInSeconds = Math.max(
            Math.min(this.timeInSeconds + secondsToAdd, MAX_TIME),
            0
        )
    }

    public addMinutes(minutesToAdd: number): void {
        this.addSeconds(minutesToAdd * 60);
    }

    public getEntireTimeInSeconds(): number {
        return this.timeInSeconds;
    }
}
