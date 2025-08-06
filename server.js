import mysql from 'mysql2';
import express from 'express';
import { connection } from './db.js';
import { app } from './db.js';

const PORT ='3000'
// Creo la conexion y verifico si esta funcionando 
connection.connect(
    (error)=>{
        if (error) throw new error;
        
        console.log('conexion correcta')
    }
)
//Creacion del metodo de la api
app.get('/tasks', async (req, res) => {
    try {
    const result = await connection.query('SELECT * FROM tasks');
    res.status(200).json(result.rows);
    } catch (error) {
    console.error('Error fetching tasks:', error.message);
    res.status(500).json({ error: 'Error fetching tasks from the database' });
    }
});


// La manera de hacer una query y se muestre el resultado en consola 
// connection.query('SELECT * FROM tasks',(error,results)=>{
//     console.log(JSON.stringify(results));
// })

//Para alojar la aplicacion o la api en un puerto 
app.listen(PORT,()=>{
    console.log('API corriendo en el puerto 3000');
    
})