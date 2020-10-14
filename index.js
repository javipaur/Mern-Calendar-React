const express = require('express');
const { dbConnection } = require('./db/config');
require('dotenv').config();


//Crear el servidor de express
const app= express();

//Bd
dbConnection();

//Directorio Píblico 
app.use(express.static('public'));

//Lectura y pardeo del body
app.use(express.json());

//Rutas
app.use('/api/auth',require('./routes/auth'));


//Escuchar Peticiones
    app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto${process.env.PORT}`);
});

