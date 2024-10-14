import User from "../model/userModel.js";

export const create = async(req,res) =>{
    try{
        const userData = new User(req.body);
        const {email} = userData;
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json({message: "User already exists"})
        }
        const savesUser = await User.save();
    }
    catch (err) {
        res.status(500).json({err:"inter server error"})
    }

}

export const  fetch = async (req,res) =>{
    try{
        const users = await User.find()
        if(users.length===0){
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).json(users)

    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const update = async (req,res) =>{
    try{
       const id = req.params.id;
       const userExist= await User.findById({_id:id})
       if(!userExist){
        return res.status(404).json({message: "User not found"})
       }
       const updatedUser = await User.findByIdAndUpdate(id,req.body,{new:true})
       res.status(201).json({message: "User updated"})
    }
    catch(error){
     res.status(500).json({message: "Internal Server Error"})
    }
}


export const deleteUser = async (req,res) =>{
    try{
        const id = req.params.id;
        const userExist= await User.findById({_id:id})
        if(!userExist){
         return res.status(404).json({message: "User not found"})
        }
        await User.findByIdAndDelete(id);
        res.status(201).json({message: "User deleted"})
    }catch(error){
        res.status(500).json({message: "Internal Server Error"})
       }
}