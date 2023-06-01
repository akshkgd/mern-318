const express = require('express');
const cors = require('cors')
const ejs = require('ejs');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const mongoDbSession = require('connect-mongodb-session')(session);
const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt')
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))
const router = require('./routes');
const Users = require('./model/Users');
const Callback = require('./model/Callbacks');
const Products = require('./model/Products')
const Payments = require('./model/Payments')
app.use(cors());

mongoose.connect('mongodb+srv://ashish:codekaro123@cluster0.cxwdzde.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('mongoDB is connected!')
})
const store = new mongoDbSession({
    uri: 'mongodb+srv://ashish:codekaro123@cluster0.cxwdzde.mongodb.net/?retryWrites=true&w=majority',
    collection: 'sessions'
 })
// setup sessions
app.use(session({
    secret: 'This is a secrect project',
    resave: false,
    saveUninitialized: false,
    store: store
}))

// routes
app.use('/',router);
app.use('/request-callback', router);
app.use('/callbacks', router);
app.use('/update-callback', router);
app.use('/login', router);
app.use('/register', router);
app.use('/create-user', router)
app.use('/products', router)
app.use('/create-product', router)
app.use('/store-product', router)
app.use('/edit-prouct', router)
app.use('/update-product', router)
app.use('/active-service', router)
app.use('/auth', router);
app.use('/api-callbacks', router)
app.use('/checkout', router)
app.use('/payment-success', router);
app.use('/paid-users', router);
app.use('*',router);

// routes end

app.listen(8000, ()=>{
    console.log('server running on port 8000')
})