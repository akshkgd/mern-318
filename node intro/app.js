const express = require('express');
// console.log(typeof express)
const app = express();

app.get('/', (req,res)=>{
    res.send('<h1>Home page</h1>')
})
app.get('/about', (req,res)=>{
    res.send('<h1>About page</h1>')
})
app.get('*', (req,res)=>{
    res.send('<h1>Page not Found</h1>')
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000!')
})