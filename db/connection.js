import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const connection = await mysql.createConnection({
    host:MYSQL_HOST,
    user:MYSQL_USER,
    password:MYSQL_PASSWORD,
    database:MYSQL_DATABASE
});
try{
    const[result] = await connection.query(
        'SELECT * FROM employees'
    )
    return result

} catch(err){
    console.log(err)
}

connection.correct((err)=>{
    if(err) throw err;
    console.log("Conectado ;)")
})