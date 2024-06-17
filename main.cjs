const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public'))

app.get('/',(req,res)=>{
    return res.sendFile(__dirname + '/main.html')
})
app.listen(3333)
console.log('ola')


const response = async function(){
    const info = await fetch('https://randomuser.me/api/').then(
        console.log('usuario encontrado')
    )
    const user = await info.json().then((userN)=>{
        console.log(userN.results)
         
    })
}
response()

