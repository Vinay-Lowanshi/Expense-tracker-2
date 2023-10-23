const sequelize=require('./database/connect')
const jwt = require('jsonwebtoken');
const express=require('express')
const app=express()
const {userSchema,expenseSchema}=require('./database/schema')
// const expenseRoute=require('./route/expenses/expenseRoute')
const userRoute=require('./route/user/userRoute')

const bodyParser=require('body-parser')
const { HasMany, BelongsTo } = require('sequelize')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))
app.set('view engine', 'ejs');
// app.use('/expense',expenseRoute)
app.use('/',userRoute)



userSchema.hasMany(expenseSchema)
expenseSchema.belongsTo(userSchema)
sequelize.sync().then(()=>{
    app.listen(8000,()=>{
        console.log("server is running")
    })
})
