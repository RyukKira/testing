module.exports.FizzBuzz = (num) => {
	if (typeof num !== "number") return "Not a number";

	if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";

	if (num % 3 === 0) return "Fizz";

	if (num % 5 === 0) return "Buzz";

	return num;
};
