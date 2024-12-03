import { getRandomNumber, start } from '../index.js';

const condition = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRightAnswer = (operator, num, num1) => {
  switch (operator) {
    case '+':
      return num + num1;
    case '-':
      return num - num1;
    case '*':
      return num * num1;
    default:
      return null;
  }
};

const getQuestion = () => {
  const number = getRandomNumber();
  const number1 = getRandomNumber();
  const operator = operators[getRandomNumber(operators.length - 1)];

  const question = `${number} ${operator} ${number1}`;
  const rightAnswer = getRightAnswer(operator, number, number1);

  return [question, rightAnswer];
};

export default () => start(condition, getQuestion);
