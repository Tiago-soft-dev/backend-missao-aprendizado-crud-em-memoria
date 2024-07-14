const express=require('express')
const app=express()


const lista = ['Java', 'Kotlin', 'Android']

//endpoint read all get
app.get('/personagem', (req,res)=>{
    res.send(lista)
})

//endpoint read by id get
app.get('/personagem/:id', (req,res)=>{
    let id = req.params.id
    res.send(lista[id - 1]);
})


app.listen(3000, ()=>console.log('servidor online'))