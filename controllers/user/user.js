const path = require('path'); // Import the 'path' module to work with file paths
const {userSchema}=require('../../database/schema')
const bcrypt=require('bcrypt')
const signup = (req, res) => {
    res.render('signup')
};

const createuser=async(req,res)=>{
    const {firstname,lastname,email,mobile,password}=req.body;
    try{
        const user1= await userSchema.findOne({where:{
            email:email
        }})
        console.log(user1)
        if(user1)
        {
            
           res.render('signin',{message:"User is already exist"})
         
        }
        else{
            //         Hashing password using Bcrypt and storing it in database
            bcrypt.hash(password,10,async(err,hash)=>{
                await userSchema.create(
                    {
                        // firstname:firstname,lastname:lastname,email:email,mobile:mobile,password:password}
                        firstname,lastname,email,mobile,password:hash}
                    
                )
                res.render('signin.ejs',{message:"user created"})
            })
            
           
        }
        }
        
    catch(err)
    {
        res.render('signin.ejs',{messgae:err})
    }
   
}

module.exports = {signup,createuser} // Corrected 'module.exports' statement
