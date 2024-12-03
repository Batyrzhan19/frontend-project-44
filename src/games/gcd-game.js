import { getRandomNumber, start } from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const gcd = (num, num1) => {
  if (num1 === 0) {
    return num;
  }
  return gcd(num1, num % num1);
};

const getQuestion = () => {
  const number = getRandomNumber();
  const number1 = getRandomNumber();

  const question = `${number} ${number1}`;

  const rightAnswer = gcd(number, number1);

  return [question, rightAnswer];
};

export default () => start(condition, getQuestion);
