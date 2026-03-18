import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operators.length);
  return operators[index];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Operador desconocido');
  }
};

const runCalcGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cual es tu nombre? ');
  console.log(`¡Hola, ${name}!`);

  console.log('¿Cuál es el resultado de la expresión?');

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomNumber(1, 50);
    const num2 = getRandomNumber(1, 50);
    const operator = getRandomOperator();

    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculate(num1, num2, operator);

    console.log(`Pregunta: ${question}`);
    const userAnswer = Number(readlineSync.question('Tu respuesta: '));

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }

    console.log('¡Correcto!');
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default runCalcGame;