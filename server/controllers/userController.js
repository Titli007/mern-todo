const user = require('../models/User')

const createUser =async(req, res) =>{
  try{
    const data= req.body
    console.log(data)

    newUser = new user({
      name:data.name,
      email:data.email,
      password:data.password
    })

   await newUser.save()
  
   res.status(200).json({ message: 'account suuccessfully created', newUser});
  }
  catch(error){
    console.log(error)
    res.status(500).json({error:"some error occured"})
  }
}



const loginUser =async(req, res) =>{
  try{
    const {email, password}= req.body
    // console.log(data)

    const existingUser = await user.findOne({
      email: email,
    })

    console.log(existingUser)

    // select * from tablename where email=""

    if(!existingUser){
      return res.status(404).json({message:"email doesn't exists"})
    }

    if(existingUser.password !== password){
      return res.status(404).json({message:"password is incorrect"})
    }

    

    res.status(200).json({ message: 'you are suuccessfully logged in', existingUser });
  }
  catch(error){
    console.log(error)
    res.status(500).json({error:"some error occured"})
  }
}



module.exports = {
  createUser, loginUser
}