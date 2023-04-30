const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb+srv://ashish:codekaro123@cluster0.cxwdzde.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('mongoDB is connected!')
})


// task schema
const taskSchema = new mongoose.Schema({
    task: String,
    dueDate: Date,
})

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})
// define the user model
const User = mongoose.model('User', userSchema);

// routes
app.get('/', (req,res)=>{
    res.render('login')
})
app.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(406).json({message: 'User does not exists'})
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(isPasswordValid){
        res.redirect('/todos')
    }
    else{
        return res.status(406).json({message: 'Password is wrong!!'})
        
    }
})
app.get('/register', (req,res)=>{
    res.render('register')
})
app.post('/add-user',async (req,res)=>{
    const {name, email, password} = req.body;
    console.log(name, email, password);
    // check if user exist
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(406).json({message: 'User already exists'})
    }
    // create user
    const user = new User({
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10)
    });
    await user.save();
    res.redirect('/');
})
app.get('/todos', async (req,res)=>{
    const Task = mongoose.model('ck-task', taskSchema);
    let data =await Task.find().sort({dueDate : "asc"});
    let newData = data.map((task)=>{
        let date = new Date(task.dueDate)
        formatDueDate = date.toLocaleDateString('en', { weekday: 'long', month: 'long', day: 'numeric' });
        return {task: task.task, dueDate: formatDueDate};
    })
    
    res.render('home', {task: newData})
})

app.post('/add-task', (req,res)=>{
    const Task = mongoose.model('ck-task', taskSchema);
    let data = new Task({
        task: req.body.task,
        dueDate: req.body.dueDate
    })
    data.save()
    res.redirect('/todos')
})


app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})