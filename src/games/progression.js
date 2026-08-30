import readlineSync from 'readline-sync';
import start from '../cli.js';

const generateProgression = (start, step, length) => {
    const progression = [];
    
    for (let i = 0; i < length; i++) {
      const numero = start + i * step
        progression.push(numero);
    }
    
    const hiddenIndex = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[hiddenIndex];

    const hiddenProgression = progression.map((number, index) => {
        if (index === hiddenIndex) {
            return '..'
        }
        return number
    });

    const question = hiddenProgression.join(' ');
    return [question, correctAnswer];
};

const startProgression = () => {
    const name = start();

    console.log('¿Qué número falta en la progresión?');
    let won = true
    for (let i = 0; i < 3; i++) {
    const startNumber = Math.floor(Math.random() * 100);
    const step = Math.floor(Math.random() * 10) + 1;
    const length = 10;
    
    const [question, correctAnswer] = generateProgression(startNumber, step, length); 
    

    console.log(`Pregunta: ${question}`);
    const answer = readlineSync.question('Tu respuesta: '); 
    
    if (Number(answer) === correctAnswer) {
        console.log('¡Correcto!');
    }else {
        console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
        console.log(`¡Intentémoslo de nuevo, ${name}!`);
        won = false;
        break;
    }
    }
    if (won) {
        console.log(`¡Felicidades, ${name}!`);
    }
};

export default startProgression;
