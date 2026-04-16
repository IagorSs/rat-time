import Time, { MAX_TIME } from "./Time";

describe("Time validation", () => {
    describe("Initial value", () => {
        it.each([
            -39399.34,
            -0.000001,
            -1,
            1.1,
            MAX_TIME + 1,
            1239836,
        ])("should throw error in constructor if plainTime is invalid (%s)", (plainTime) => {
            // TODO specify error
            expect(() => new Time(plainTime)).toThrow();
        });
    
        it.each([
            0,
            99,
            134,
            MAX_TIME,
        ])("shouldn't throw error if plainTime is valid (%s)", (plainTime) => {
            new Time(plainTime)
        });

        it("should start with 0 by default", () => {
            const time = new Time();

            expect(time.getMinutes()).toBe("00");
            expect(time.getSeconds()).toBe("00");
        })
    })

    describe("Operations", ()=> {
        describe("Can add", () => {
            it.each([
                0, 15, 367, MAX_TIME - 1
            ])("should return true if value is between 0 and MAX_TIME - 1 (%s)", (timeValue) => {
                const time = new Time(timeValue);

                expect(time.canAdd()).toBe(true);
            })

            it("should return false if value is on MAX_TIME", () => {
                const time = new Time(MAX_TIME);

                expect(time.canAdd()).toBe(false);
            })

        })

        describe("Can sub", () => {
            it.each([
                1, 10, 36, 99
            ])("should return true if value is between 1 and 99 (%s)", (timeValue) => {
                const time = new Time(timeValue);

                expect(time.canSub()).toBe(true);
            })

            it("should return false if value is on min limit of time", () => {
                const time = new Time(0);

                expect(time.canSub()).toBe(false);
            })

        })
    })
})

describe("Time visualization", () => {
    describe("Time formatter", () => {
        class TestableTimeFormatter extends Time {
            public static testableFormatTime(timeValue: number) {
                return Time.formatTime(timeValue);
            }
        }
    
        it.each([
            [0, "00"],
            [5, "05"],
            [7, "07"],
        ])("should add 0 if time is with one single digit (%s)", (timeValue, timeFormattedExpected) => {
            expect(TestableTimeFormatter.testableFormatTime(timeValue)).toBe(timeFormattedExpected);
        })
        
        it.each([
            [10, "10"],
            [35, "35"],
            [99, "99"],
        ])("should convert to simple string if time already have two digits (%s)", (timeValue, timeFormattedExpected) => {
            expect(TestableTimeFormatter.testableFormatTime(timeValue)).toBe(timeFormattedExpected);
        })
    })

    describe("Minutes and seconds", () => {
        it.each([
            [0, "00", "00"],
            [59, "00", "59"],
            [60, "01", "00"],
            [212, "03", "32"],
            [MAX_TIME, "59", "59"],
        ])("should return valid minutes / seconds (%s)", (timeValue, minutesExpected, secondsExpected) => {
            const time = new Time(timeValue);

            expect(time.getMinutes()).toBe(minutesExpected);
            expect(time.getSeconds()).toBe(secondsExpected);
        })
    })
})

describe("Time operations", () => {
    describe("Add time", () => {
        // TODO
        it.skip.each([
            0.11,
            394.55,
        ])("should throw error if number to add is Invalid (%s)", (timeToAdd) => {
            const time = new Time();

            expect(time.addTime(timeToAdd)).toThrow();
        });

        it.each([
            [0, 10, "00", "10"],
            [10, 0, "00", "10"],
            [30, 45, "01", "15"],
            [15, 180, "03", "15"],
            [100, -10, "01", "30"],
            [220, -40, "03", "00"],
        ])("should add positive and negative time", (startTime, timeToAdd, minutesExpected, secondsExpected) => {
            const time = new Time(startTime);

            time.addTime(timeToAdd);

            expect(time.getMinutes()).toBe(minutesExpected);
            expect(time.getSeconds()).toBe(secondsExpected);
        });

        it.each([
            [MAX_TIME, 1],
            [MAX_TIME, 34],
            [0, MAX_TIME + 1],
        ])("should limit on MAX_TIME if will add more than this", (startTime, timeToAdd) => {
            const time = new Time(startTime);

            time.addTime(timeToAdd);

            expect(time.getMinutes()).toBe("59");
            expect(time.getSeconds()).toBe("59");
        });

        it.each([
            [0, -1],
            [0, -MAX_TIME],
            [MAX_TIME, -MAX_TIME],
            [MAX_TIME, -MAX_TIME-56],
        ])("should limit on 0 if will sub more than this", (startTime, timeToAdd) => {
            const time = new Time(startTime);

            time.addTime(timeToAdd);

            expect(time.getMinutes()).toBe("00");
            expect(time.getSeconds()).toBe("00");
        });
    })
})
