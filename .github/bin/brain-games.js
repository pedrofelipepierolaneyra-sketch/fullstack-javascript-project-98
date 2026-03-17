#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('¡Bienvenido a Brain Games!');
const name = readlineSync.question('¿Cual es tu nombre? ');
console.log(`¡Hola, ${name}!`);

