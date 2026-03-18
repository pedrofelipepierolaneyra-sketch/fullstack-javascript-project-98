import readlineSync from 'readline-sync';

// Número aleatorio
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Genera la progresión
const generateProgression = (length, start, step) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const runProgressionGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);

  console.log('¿Qué número falta en la progresión?');

  const rounds = 3;
  const length = 10;

  for (let i = 0; i < rounds; i += 1) {
    const start = getRandomNumber(1, 20);
    const step = getRandomNumber(1, 10);

    const progression = generateProgression(length, start, step);

    const hiddenIndex = getRandomNumber(0, length - 1);
    const correctAnswer = progression[hiddenIndex];

    progression[hiddenIndex] = '..';

    console.log(`Pregunta: ${progression.join(' ')}`);
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

export default runProgressionGame;