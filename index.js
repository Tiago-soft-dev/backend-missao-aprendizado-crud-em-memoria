const express=require('express')
const app=express()


const lista = ['Java', 'Kotlin', 'Android']

//endpoint read all get
app.get('/personagem', (req,res)=>{
    res.send(lista)
})


app.listen(3000, ()=>console.log('servidor online'))