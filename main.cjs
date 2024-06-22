const express = require('express')
const app = express()
const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()
app.use(express.json())
app.use(express.static('public'))

const connection = mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
})


//rota de todos os empregados
app.get('/',(req,res)=>{
    let query = 'SELECT * FROM employees'
    connection.query(query,(err,res)=>{
        console.log(res)
    }),res.sendFile(__dirname + '/main.html')
});

app.post('/',(req,res)=>{

})

app.listen(3333)

