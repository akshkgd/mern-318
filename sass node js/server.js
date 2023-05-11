const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))
const router = require('./routes')



// routes
app.use('/',router);
app.use('*',router)

// routes end

app.listen(3000, ()=>{
    console.log('server running on port 3000')
})