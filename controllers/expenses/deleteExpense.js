const {userSchema,expenseSchema}=require('../../database/schema')

const deleteExpense=async(req,res)=>{
    const id=req.params.id;

    const uid=await expenseSchema.findOne({
        where:{
            id:id
        }
    })
    const userId=uid.userId
    const item=await expenseSchema.destroy({
        where:{
            id:id
        }
        
    })
    const expense=await expenseSchema.findAll({
        where:{
            userId:userId
        }
    })
  
   
    const username= await userSchema.findOne({
        where:{
            id:userId
        }
})

res.render('userpage',{username:username,message:"Expense deletedsuccessfully",expenses:expense})


    
  
}

module.exports=deleteExpense