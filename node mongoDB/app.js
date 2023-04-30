const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const ejs = require('ejs');
const app = express()
app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({ extended: true }))
mongoose.connect('mongodb+srv://ashish:codekaro123@cluster0.cxwdzde.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('MongoDB is connected!')
})
// user schema
const userSchema = new mongoose.Schema({
    firstName: String,
    email: String
})

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/register-user', (req, res) => {
    const User = mongoose.model('students', userSchema);
    let data = new User({
        firstName: req.body.name,
        email: req.body.email,
    })
    data.save();
    res.redirect('/')
})

app.post('/search', async (req, res) => {
    const User = mongoose.model('students', userSchema);
    let data = await User.find({ email: req.body.email })
    console.log(data);
    res.render('users', { users: data })
})

app.post('/delete', async (req, res) => {
    const User = mongoose.model('students', userSchema);
    let data = await User.deleteOne({ email: req.body.email })
    res.redirect('/users')
})
app.post('/edit', async (req, res) => {
    const User = mongoose.model('students', userSchema);
    let data = await User.findOne({ email: req.body.email })
    console.log(data);
    res.render('edit', { user: data })
})
app.post('/update-user', async (req, res) => {
    const User = mongoose.model('students', userSchema);
    let data = await User.updateOne(
        { email: req.body.oldEmail },
        {
            $set: {
                firstName: req.body.firstName,
                email: req.body.email,
            }
        })
        console.log(data);
        res.redirect('/users')
})
app.get('/users', async (req, res) => {
    const User = mongoose.model('students', userSchema);
    let data = await User.find()

    res.render('users', { users: data })
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})