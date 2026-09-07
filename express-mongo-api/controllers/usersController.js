
import User from '../models/user.js'


export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}

export const getSingleUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.json(user);

    } catch (error) {
        res.status(500).json({message:error.message})
  }
}

export const createUser = async (req, res) => {
    console.log("req.body",req.body)
    const user = new User(req.body)
    const saved =  await user.save();
    res.status(201).json(saved)
}
export const updateUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body,{new:true});
        if (!user) {
            return res.status(404).send("not find user")
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
 }
    
}
export const deleteUser = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send("not found delete id")
        }
        res.json(user)
    } catch (err) {
        res.status(500).json({message:err.message})
 }
}