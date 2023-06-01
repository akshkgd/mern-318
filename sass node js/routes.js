const express = require('express');
const bcrypt = require('bcrypt')
const ObjectId = require('mongodb').ObjectId;
const Callbacks = require('./model/Callbacks');
const Users = require('./model/Users');
const Products = require('./model/Products');
const Payments = require('./model/Payments')
const router = express.Router()
const Razorpay = require('razorpay');
const { resolveInclude } = require('ejs');

const razorpay = new Razorpay({
    key_id: 'rzp_test_1L3v9gzg9nkoYo',
    key_secret: 'et6TgSCcvo4ygU4RsNIaQVBZ',
})

// user
router.get('/', (req,res)=>{
    res.render('index')
})
const isAdmin = (req,res, next)=>{
    if(req.session.isAdmin == true && req.session.user.role == 1){
        next()
    }
    else(
        res.redirect('/')
    )
}
const isAuth = (req,res, next)=>{
    if( req.session.isAuth == true){
        next()
    }
    else(
        res.redirect('/')
    )
}


router.post('/request-callback', (req,res)=>{
    const {name, email, phone} = req.body;
    const callback = new Callbacks({
        name: name,
        email: email,
        phone: phone,
        date: new Date(),
    })
    callback.save();
    res.redirect('/');
})
router.get('/callbacks',isAdmin, async(req,res)=>{
    const callbacks = await Callbacks.find().sort({date: "desc"});
    res.render('./admin/callbacks', {callbacks: callbacks})
});
router.post('/update-callback', isAdmin, async(req,res)=>{
    let callback = await Callbacks.findOne({_id: new ObjectId(req.body.id)})
    res.render('./admin/updateCallback', {callback: callback})
})
router.post('/store-update-callback', isAdmin, async(req,res)=>{
    let data = await Callbacks.updateOne(
        {_id: new ObjectId(req.body.id)},
        {
            $set:{
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                status: req.body.status,
                remarks: req.body.remarks,
            }
        })
        res.redirect('/callbacks')
})

//authentication

router.get("/login", (req,res)=>{
    res.render('login')
})
router.post('/auth',async (req,res)=>{
    const {email, password} = req.body;
    const user = await Users.findOne({email});
    if(user){
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(isPasswordValid){
            req.session.isAuth = true;
            req.session.user = user;
            if(user.role == 0){
                res.render('dashboard')
            }
            else{
                req.session.isAdmin = true;
                res.redirect('/admin/dashboard')
            }
        }
        else{
        return res.status(406).json({message: 'Wrong Password'})

        }
    }
    else{
        return res.status(406).json({message: 'user does not exist'})

    }
})

router.get("/register", (req,res)=>{
    res.render('register')
})
router.post('/create-user', async (req,res)=>{
    const {name, email, password} = req.body;
    const existingUser = await Users.findOne({email});
    if(existingUser){
        return res.status(406).json({message: 'user exist'})
    }
    else{
        const  user = new Users({
            name: name,
            email: email,
            password: await bcrypt.hash(password, 12)
        })
        await user.save();
        res.redirect('/login');
    }
})
router.post('/auth', (req,res)=>{

})




router.get('/products', async(req,res)=>{
    const products = await Products.find({status: 1})
    res.render('products', {products: products})
})

// payment routes
router.get('/checkout',isAuth, async(req,res)=>{
    let productTitle = req.query.product;
    let product = await Products.findOne({title: productTitle})
    const options = {
        amount: product.pricing*100,
        currency: "INR",
        receipt: 'order_receipt',
        payment_capture: 1,
    }
    razorpay.orders.create(options, (err, order)=>{
        if(err){
            console.log(err);
            return;
        }
        res.render('checkout', {order: order, product: product, user: req.session.user})
        // console.log(order)
    })
    // console.log(order)
    // res.render('che ckout', {order: order});
})
router.post('/payment-success', async(req,res)=>{
    const response = await razorpay.payments.fetch(req.body.razorpay_payment_id);
    let now = new Date();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      let date = now.toLocaleDateString("en-US", options);
    let data = new Payments({
        email: response.email,
        phone: response.contact,
        id: response.id,
        amount: response.amount,
        status: response.id,
        order_id: response.order_id,
        method: response.method,
        desc: response.description,
        date: date,
    })
    data.save();
    res.redirect('/')
})

// admin
router.get('/admin/dashboard',isAdmin, async(req,res)=>{
    const users = await Users.find();
                const callbacks = await Callbacks.find();
                const followUps = await Callbacks.find({status: 1})
                const paid = await Callbacks.find({status: 2})
                const notInterested = await Callbacks.find({status: 3})
                const newLeads = await Callbacks.find({status: 0})
                // const callbacks
                res.render('admin/dashboard', {users: users, callbacks:callbacks, followUps: followUps, paid: paid, notInterested: notInterested, newLeads: newLeads})
});
router.get('/paid-users', isAdmin, async(req,res)=>{
    let payments = await Payments.find()
    res.render('admin/payments', {payments: payments})
})
router.get('/create-product', isAdmin, async(req,res)=>{
        res.render('admin/addProduct')
})
router.post('/store-product', isAdmin, async(req,res)=>{
    let {title, desc, img, pricing, status} = req.body;
    const product = new Products({
        title: title,
        desc: desc,
        img: img,
        pricing: pricing,
        status: status,
    })
    await product.save();
    res.redirect('/products');
})

// apis
// apis and react routes test
router.get('/api-callbacks', async(req,res)=>{
    const callbacks = await Callbacks.find().sort({date: "desc"});
    return res.json({
        callbacks
    })
});
router.post('/test', (req,res)=>{
    res.json('The post request is triggered in backend!!')
})
router.get('*', (req,res)=>{
    res.render('notFound')
})
module.exports = router;