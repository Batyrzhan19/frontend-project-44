import { getRandomNumber, start } from '../index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestion = () => {
  const number = getRandomNumber();

  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return [number, rightAnswer];
};

export default () => start(condition, getQuestion);
