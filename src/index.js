import readlineSync from 'readline-sync';

const amountIterations = 3;

export const getRandomNumber = (num = 10) => Math.round(Math.random() * num);

export const greeting = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  return name;
};

export const start = (condition, getQuestion) => {
  console.log('Welcome to the Brain Games!');

  const name = greeting();

  console.log(condition);

  for (let i = 0; i < amountIterations; i += 1) {
    const gameData = getQuestion();
    const [question, rightAnswer] = gameData;

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === String(rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
