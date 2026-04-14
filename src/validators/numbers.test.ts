import { nonNegative, integer, less } from "./numbers";

describe("integer", () => {
    it.each([
        "29",
        null,
        undefined,
        false,
        {},
    ])("should throw error on invalid type (%s)", (num) => {
        // TODO specify error
        expect(() => integer(num)).toThrow();
    });

    it.each([
        -39399.34,
        -0.000001,
        1.1,
        2292.99,
    ])("should throw error on invalid integer value (%s)", (num) => {
        // TODO specify error
        expect(() => integer(num)).toThrow();
    });

    it.each([
        -1,
        100,
        229299,
    ])("should return value when is valid (%s)", (num) => {
        const validatedNum = integer(num);

        expect(validatedNum).toBe(num);
    });
})

describe("nonNegative", () => {
    it.each([
        "29",
        null,
        undefined,
        false,
        {},
    ])("should throw error on invalid type (%s)", (num) => {
        // TODO specify error
        expect(() => nonNegative(num)).toThrow();
    });

    it.each([
        -39399.34,
        -0.000001,
        -1,
    ])("should throw error when is invalid (%s)", (num) => {
        // TODO specify error
        expect(() => nonNegative(num)).toThrow();
    });

    it.each([
        0,
        1.1,
        100,
        229.212228,
    ])("should return value when is valid (%s)", (num) => {
        const validatedNum = nonNegative(num);

        expect(validatedNum).toBe(num);
    });
})

describe("less", () => {
    it.each([
        "29",
        null,
        undefined,
        false,
        {},
    ])("should throw error on invalid type (%s)", (num) => {
        // TODO specify error
        expect(() => less(num, 0)).toThrow();
    });

    it.each([
        [0, -1],
        [23, 23],
        [1, 0],
        [1, -1.55],
    ])("should throw error when value is equal or greater than ref (%s >= %s)", (num, ref) => {
        // TODO specify error
        expect(() => less(num, ref)).toThrow();
    });

    it.each([
        [0, -1],
        [1, 0],
        [1, -1.55],
    ])("should return value when is less than ref (%s < %s)", (ref, num) => {
        const validatedNum = less(num, ref);

        expect(validatedNum).toBe(num);
    });
})
