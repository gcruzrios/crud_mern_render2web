const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/test');

mongoose.connect('mongodb+srv://mern_user:y22h0sujL0DhH6RJ@cluster0.jbim8.mongodb.net/crud-mern-stack');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexión correcta a  MongoDB')});
objetobd.on('error', ()=>{console.log('Error en la conexión a MongoDB')});

module.exports = mongoose

