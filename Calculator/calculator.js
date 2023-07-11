const express=require('express')
const bodyParser=require('body-parser')
const app=express()

// app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.post('/',(req,res)=>{
    var result=Number(req.body.num1)+Number(req.body.num2);
    res.send("Result of calculation is:"+ result)
})

app.listen(5000)