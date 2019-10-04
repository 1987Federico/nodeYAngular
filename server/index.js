const express= require('express');
const morgan=require ('morgan');
const app=express();

const {mongoose} = require('./database');
const cors =require('cors');

//serting
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

//Rouotes
app.use('/api/employees',require('./routes/employee.routes'));

//Inicio servidor
app.listen(app.get('port'),()=>{
    console.log('escuchando puerto', app.get('port'));
});