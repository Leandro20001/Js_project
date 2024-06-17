const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public'))
var a = null
const response = async function(){
    const info = await fetch('https://randomuser.me/api/').then(
        console.log('usuario encontrado')
    )
    const user = await info.json().then((userN)=>{
        console.log(userN.results)
    })
}
app.get('/',(req,res)=>{
    return res.sendFile(__dirname + '/main.html')
})
response()
app.listen(3333)


