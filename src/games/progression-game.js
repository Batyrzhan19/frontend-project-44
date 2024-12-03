import { getRandomNumber, start } from '../index.js';

const condition = 'What number is missing in the progression?';

const amountElements = 10;
const safeIndex = 8;

const getProgression = (number, step, answerIndex) => {
  const progression = [];

  progression.push(number);

  let hiddenElement = 0;

  for (let i = 1; i <= amountElements; i += 1) {
    progression.push(progression[i - 1] + step);

    if (i === answerIndex) {
      hiddenElement = progression.pop();
      progression.push('..');
      progression.push(hiddenElement + step);
      i += 1;
    }
  }

  const question = progression.join(' ');

  return [question, hiddenElement];
};

const getQuestion = () => {
  const number = getRandomNumber() + 1;
  const step = getRandomNumber() + 1;
  const answerIndex = getRandomNumber(safeIndex) + 1;

  const [question, rightAnswer] = getProgression(number, step, answerIndex);

  return [question, rightAnswer];
};

export default () => start(condition, getQuestion);
