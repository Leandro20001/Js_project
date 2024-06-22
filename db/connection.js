import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const connection = await mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
});
//mostra todos os dados da tabela:
try {
    const[results] = await connection.query('SELECT *  FROM EMPLOYEE-DB')
    console.log(results)

} catch{console.log('falha na requisição...')}

connection.correct((err)=>{
    if(err) throw err;
    console.log("Conectado ;)")
})