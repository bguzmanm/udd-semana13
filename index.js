// const { suma, resta, multiplica } = require("./modules/utilities");
// const { mensaje } = require("./modules/mensajes");

// var moment = require("moment");

// let valor1 = 4;
// let valor2 = 5;
// let resultado = suma(valor1, valor2);

// console.log(`la suma da: ${resultado}`);
// console.log(`y la resta da: ${resta(10, 4)}`);
// console.log(`y la multiplicación da: ${multiplica(10, 4)}`);

// console.log(moment().format("LLLL"));

// mensaje("Este es un mensaje");


const { mostrarUsuario } = require("./modules/mensajes");
const { addUser, getUser } = require("./modules/user");
const { authenticate } = require("./modules/auth");

addUser('martina', '123', '2003-11-18');
addUser('teo', '321', '2011-04-26');
addUser('emilia', 'abc', '2005-07-20');

console.log("Autenticación de martina:", authenticate('martina', '123'));
console.log("Autenticación de teo:", authenticate('teo', '321'));
console.log("Autenticación de emilia:", authenticate('emilia', 'abc'));

mostrarUsuario(getUser('martina'));

