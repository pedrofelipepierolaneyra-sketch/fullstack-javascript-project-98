import readlineSync from 'readline-sync';
import start from '../cli.js';

const isEven = (number) => number % 2 === 0;

const startGame = () => {
    const name = start();

    
    console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

    let won = true;

    for (let i = 0; i < 3; i++) {
        
    const number = Math.floor(Math.random() * 100);

    console.log(`Pregunta: ${number}`);
    const answer = readlineSync.question('Tu respuesta: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';

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



export { isEven };
export default startGame; 
