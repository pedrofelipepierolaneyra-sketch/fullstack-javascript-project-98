import readlineSync from 'readline-sync';

const start = () => {
    const name = readlineSync.question('¿Cuál es tu nombre?');

    console.log(`¡Hola, ${name}!`);

    return name;
};

export default start;