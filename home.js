
const express = require('express')
app.use(express.json())
app.get('/',(req,res)=>{
    return res.send('HOME')
})
app.listen(3000)