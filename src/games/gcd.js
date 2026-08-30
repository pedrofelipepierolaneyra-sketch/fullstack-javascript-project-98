import readlineSync from 'readline-sync';
import start from '../cli.js';

const gcd = (a, b) => {
    if (b === 0) {
        return a;
    }

    return gcd(b, a % b);
}

const startGcd = () => {
    const name = start();
    
    console.log('Encuentra el máximo común divisor de los números dados.');
    let won = true
    for (let i = 0; i < 3; i++) {
        
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);

    console.log(`Pregunta: ${number1} ${number2}`);

    const correctAnswer = gcd(number1, number2);
    const answer = readlineSync.question('Tu respuesta: ');

    if (Number(answer) === correctAnswer) {
        console.log('¡Correcto!');
    } else {
        console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
        console.log(`¡Intentémoslo de nuevo, ${name}!`);
        won = false
        break
    }
    }
    if (won) {
        console.log(`¡Felicidades, ${name}!`);
    }
};

export { gcd };
export default startGcd;