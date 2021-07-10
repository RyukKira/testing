const FizzBuzz = require("../../FizzBuzz");

describe("FizzBuzz", () => {
	it("should return FizzBuzz if num is divisible by 3 and 5", () => {
		const result = FizzBuzz.FizzBuzz(15);
		expect(result).toBe("FizzBuzz");
	});
	it("should return Fizz if num is only divisible by 3", () => {
		const result = FizzBuzz.FizzBuzz(33);
		expect(result).toBe("Fizz");
	});
	it("should return Buzz if num is only divisible by 5", () => {
		const result = FizzBuzz.FizzBuzz(50);
		expect(result).toBe("Buzz");
	});
	it("should return not a number if num is not a number", () => {
		const result = FizzBuzz.FizzBuzz("Hi");
		expect(result).toBe("Not a number");
	});
	it("should return num if num is not divisible by 3 and 5", () => {
		const result = FizzBuzz.FizzBuzz(67);
		expect(result).toBe(67);
	});
});
