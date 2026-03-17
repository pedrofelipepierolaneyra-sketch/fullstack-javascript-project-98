#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('¡Bienvenido a Brain Games!');
const name = readlineSync.question('¿Cual es tu nombre? ');
console.log(`¡Hola, ${name}!`);

console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

let correctAnswers = 0;

while (correctAnswers < 3) {
  const number = Math.floor(Math.random() * 100);
  console.log(`Pregunta: ${number}`);

  const answer = readlineSync.question('Tu respuesta: ');

  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('¡Correcto!');
    correctAnswers += 1;
  } else {
    console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
    console.log(`¡Intentémoslo de nuevo, ${name}!`);
    process.exit(0);
  }
}

console.log(`¡Felicidades, ${name}!`);