import dateTime from "../../src/is/date-time";

const { isPast, isFuture } = dateTime;

describe("DateTime", () => {
    it("should be an object with keys `isPast` and `isFuture` that are functions", () => {
        expect(dateTime).toHaveProperty("isPast");
        expect(dateTime).toHaveProperty("isFuture");

        Object.values(dateTime).forEach(fn =>
            expect(fn).toBeInstanceOf(Function)
        );
    });

    describe(".isPast", () => {
        it("should return true if date is in the past", () => {
            const oldDate = new Date("1930-12-12");
            const result = isPast(oldDate);

            expect(result).toBeTruthy();
        });

        it("should return false if date is in the future", () => {
            const oldDate = new Date("2020-12-12");
            const result = isPast(oldDate);

            expect(result).toBeFalsy();
        });
    });

    describe(".isFuture", () => {
        it("should return true if date is in the future", () => {
            const futureDate = new Date("2020-12-12");
            const result = isFuture(futureDate);

            expect(result).toBeTruthy();
        });

        it("should return false if date is in the past", () => {
            const futureDate = new Date("1900-12-12");
            const result = isFuture(futureDate);

            expect(result).toBeFalsy();
        });
    });
});
