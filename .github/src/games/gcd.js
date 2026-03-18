import readlineSync from 'readline-sync';

// Genera número aleatorio
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Algoritmo de Euclides para MCD
const getGcd = (a, b) => {
  let x = a;
  let y = b;

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

const runGcdGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);

  console.log('Encuentra el máximo común divisor de los números dados.');

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);

    const correctAnswer = getGcd(num1, num2);

    console.log(`Pregunta: ${num1} ${num2}`);
    const userAnswer = Number(readlineSync.question('Tu respuesta: '));

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`
      );
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }

    console.log('¡Correcto!');
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default runGcdGame;