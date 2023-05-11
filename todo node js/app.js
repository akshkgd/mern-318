const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const mongoDbSession = require('connect-mongodb-session')(session)
const bcrypt = require('bcrypt')
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb+srv://ashish:codekaro123@cluster0.cxwdzde.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('mongoDB is connected!')
})

// setup sessions

const store = new mongoDbSession({
    uri: 'mongodb+srv://ashish:codekaro123@cluster0.cxwdzde.mongodb.net/?retryWrites=true&w=majority',
    collection: 'sessions'
})

app.use(session({
    secret: 'this is a secret',
    resave: false,
    saveUninitialized: false,
    store: store
}))

// isAuth Middleware => this will redirect to todos if user is logged in
const isAuth = (req, res, next)=>{
    if(req.session.isAuth == true){
        next()
    }
    else(
        res.redirect('/')
    )
}
const isAdmin = (req,res,next)=>{
    if(req.session.user.role == 1 && req.session.isAuth == true){
        next()
    }
    else(
        res.redirect('/')
    )
}



// task schema
const taskSchema = new mongoose.Schema({
    task: String,
    dueDate: Date,
    userEmail: String,
})

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: Number, default: 0}
})
// define the user model
const User = mongoose.model('User', userSchema);
const Task = mongoose.model('ck-task', taskSchema);
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
        req.session.isAuth = true;
        req.session.user = user;
        console.log(req.session.user)
        if(user.role == 0){
            res.redirect('/todos');
        }
        else{
            res.redirect('/dashboard')
        }
    }
    else{
        return res.status(406).json({message: 'Password is wrong!!'})
        
    }
})
app.get('/register', (req,res)=>{
    res.render('register')
})
app.get('/dashboard', isAdmin, async(req,res)=>{
    const users = await User.find({role: 0});

    res.render('dashboard', {users: users})
})
app.post('/delete-user', isAdmin, async(req,res)=>{
    let user = await User.deleteOne({email: req.body.email});
    let todos = await Task.deleteMany({userEmail: req.body.email});
    res.redirect('/dashboard')
})
app.post('/user-details', async(req,res)=>{
    const user = await User.findOne({email: req.body.email});
    const todos = await Task.find({userEmail: req.body.email})
    res.render('userDetails', {user: user, todos: todos})
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
app.get('/todos',isAuth, async (req,res)=>{
    
    let data =await Task.find({userEmail: req.session.user.email}).sort({dueDate : "asc"});
    let newData = data.map((task)=>{
        let date = new Date(task.dueDate)
        formatDueDate = date.toLocaleDateString('en', { weekday: 'long', month: 'long', day: 'numeric' });
        return {task: task.task, dueDate: formatDueDate};
    })
    const name = req.session.user.name;
    res.render('home', {task: newData, name: name})
})

app.post('/add-task', (req,res)=>{
    const Task = mongoose.model('ck-task', taskSchema);
    let data = new Task({
        task: req.body.task,
        dueDate: req.body.dueDate,
        userEmail: req.session.user.email,
    })
    data.save()
    res.redirect('/todos')
})
app.post('/logout', (req,res)=>{
    req.session.destroy();
    res.redirect('/')
})

app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})