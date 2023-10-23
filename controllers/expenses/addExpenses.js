const {userSchema,expenseSchema}=require('../../database/schema')

const addExpenses=async(req,res)=>{
    
    const {expenseName,category,amount}=req.body;
    const userId=req.params.userid;
    console.log("The id is ",userId)
    try{
        const data= await expenseSchema.create({
            Expense_Name:expenseName,Category:category,Amount:amount, userId:userId
        })
        const expense=await expenseSchema.findAll({
            where:{
                userId:userId
            }
        })
        const username= await userSchema.findAll({
            where:{
                id:userId
            }
      
        })
        console.log(username)

        res.render('userpage',{username:username[0],message:"Expense added successfully",expenses:expense})
    
    }
    catch(err)
    {
        res.render('userpage',{message:"Problem in adding expense"})
    }
    
    
}

module.exports=addExpenses;