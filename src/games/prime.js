import readlineSync from 'readline-sync';
import start from '../cli.js';

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}



const startPrime = () => {
    const name = start();

    console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

    let won = true;

    for (let i = 0; i < 3; i++) {
        const number = Math.floor(Math.random() * 100);
        console.log(`Pregunta: ${number}`);
        const correctAnswer = isPrime(number) ? 'yes' : 'no';
        const answer = readlineSync.question('Tu respuesta: ');

        if (answer === correctAnswer) {
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

export default startPrime;