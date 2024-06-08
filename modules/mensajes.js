const moment = require('moment');
const mensaje = (mensaje) => {
  console.log(mensaje);
}

const mostrarUsuario = (usr) => {

  moment.locale("es");
  const fecha = moment(usr.date);

  console.log(`USUARIO: ${usr.username} nacio el ${fecha.format('DD/MM/YYYY')}`);
}

module.exports = {
  mensaje,
  mostrarUsuario,
}

