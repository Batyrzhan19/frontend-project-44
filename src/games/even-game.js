import { getRandomNumber, start } from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestion = () => {
  const question = getRandomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => start(condition, getQuestion);
