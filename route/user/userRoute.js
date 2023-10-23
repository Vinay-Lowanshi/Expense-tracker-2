const express=require('express')
const userRoute=express.Router()
const {signup,createuser}=require('../../controllers/user/user')
const login=require('../../controllers/user/login')
const loggedin=require('../../controllers/user/loggedin')

userRoute.get('/signup',signup)
userRoute.post('/createuser',createuser)
userRoute.get('/',(req,res)=>{
    res.render('signin')
})
userRoute.post('/login',login)
userRoute.get('/userpage',loggedin)


const addExpenses = require('../../controllers/expenses/addExpenses')
const expenseRoute=express.Router()

userRoute.post('/addExpense/:userid',addExpenses)




module.exports=userRoute