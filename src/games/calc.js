import readlineSync from 'readline-sync';
import start from '../cli.js';

const calculate = (number1, number2, operator) => {
    switch (operator) {
        case '+':
            return number1 + number2;
            
        
        case '-':
            return number1 - number2;
            

        case '*':
            return number1 * number2;
                
        default:
            return 'operacion invalida';
            
    }

};

const startCalc = () => {
    const name = start();

    
    console.log('¿Cuál es el resultado de la expresión?');
    let won = true;
    const operators = ['+', '-', '*'];
    for (let i = 0; i < 3; i++) {
        
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);

    const index = Math.floor(Math.random() * operators.length)
    const operator = operators[index];
    console.log(`Pregunta: ${number1} ${operator} ${number2}`);
    const correctAnswer = calculate(number1, number2, operator);
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


export { calculate };
export default startCalc;