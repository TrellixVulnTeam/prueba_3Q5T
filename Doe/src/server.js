const express = require('express');
const path = require('path');
const { extname } = require('path');
//INICIALIZACIONES

const app =express();

//CONFIGURACIONES: Lo que hara express basado en algunos modulos

app.set('port' , process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));


//MIDDLEWARES: Funciones que se ejecuntan despues de las peticiones

app.use(express.urlencoded({extended:false}));


//Variables Globales



//Rutas

//Archivos Estaticos
app.use(express.static(path.join(__dirname,'public')));



module.exports= app;