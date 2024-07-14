const express=require('express')
const app=express()
app.use(express.json())


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

//endpoint create post
app.post('/personagem',(req,res)=>{
    const body = req.body
    const novoItem = body.nome
    lista.push(novoItem)
    res.send('Item adicionado com sucesso: ' + novoItem)
})


app.listen(3000, ()=>console.log('servidor online'))