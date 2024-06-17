const sql = require('mysql')
const connection = mysql.createConnection({
    host :"localhost",
    user:"root",
    password:"L.0987654321"
});
connection.correct((err)=>{
    if(err) throw err;
    console.log("Conectado ;)")
})