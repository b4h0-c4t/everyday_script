const FizzBuzz = (num) => !(num % 3) && !(num % 5)
  ? "FizzBuzz"
  : !(num % 3)
    ? "Fizz"
    : !(num % 5)
      ? "Buzz"
      : num + "";

module.exports = FizzBuzz;
