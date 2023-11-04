const express=require('express')
const userRoute=express.Router()
const {signup,createuser}=require('../../controllers/user/user')
const login=require('../../controllers/user/login')
const loggedin=require('../../controllers/user/loggedin')
const addExpenses = require('../../controllers/expenses/addExpenses')
const deleteExpense=require('../../controllers/expenses/deleteExpense')
const expenseRoute=express.Router()
userRoute.get('/signup',signup)
userRoute.post('/createuser',createuser)
userRoute.get('/',(req,res)=>{
    res.render('signin')
})
userRoute.post('/login',login)
// userRoute.get('/userpage',loggedin)
userRoute.post('/addExpense/:userid',addExpenses)
userRoute.get('/delete/:id/',deleteExpense)




module.exports=userRoute