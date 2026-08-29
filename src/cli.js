import readlineSync from 'readline-sync';

const start = () => {
    const name = readlineSync.question('¿Cuál es tu nombre?');

    return `¡Hola, ${name}!`;
}

export default start;