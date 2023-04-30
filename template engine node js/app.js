let express = require('express');
const users = [];
let bodyParser = require('body-parser');
let ejs = require('ejs');
let app = express();
app.set(('view engine'), 'ejs')
app.use(bodyParser.urlencoded({extended:false}))
app.get('/', (req,res)=>{
    res.render('index')
})
app.post('/register-user', (req,res)=>{
    if(req.body.email != ''){
        console.log(req.body)
        let tempUser = {
            name: req.body.name, email: req.body.email, state:req.body.state,
        }
        users.push(tempUser);
        res.render('registerSuccess', {name: req.body.name, email: req.body.email})

    }
    else{
        res.redirect('/');
    }
})

app.get('/users', (req,res)=>{
    res.render('users', {data: users});
})
app.get('*', (req,res)=>{
    res.render('notFound')
})


app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})
