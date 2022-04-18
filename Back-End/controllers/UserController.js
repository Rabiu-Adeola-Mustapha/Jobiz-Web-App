const User = require("mongoose")



const getAllUsers = async (req,res) => {

    const user = await User.find();
    res.status(200).json({data:user});

};

const getAUser = async (req,res) => {
    const id = req.params.id;

    const user = await User.findById(id);
    res.status(200).json({data:user});

};

const deleteUser = async (req,res) => {
    const id = req.params.id;

    const user = await User.findByIdAndDelete(id);

    res.status(200).json({message: " User deleted successfully"});
};

const createUser = async (req,res) => {

    const user = await User.create({

        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        cv: req.body.cv,
    })

    res.status(400).json({message:" User created successfully"});
};

const updateUser = async (req,res) => {

    const id = req.params.id;
    const {firstname,lastname,email,phone,cv} = req.body;

    const userupdate = User.findByIdAndUpdate(id, req.body, {new: true});

    res.status(400).json({data:userupdate, message:"User updated successfully"});

};


module.exports = {
    getAllUsers,
    getAUser,
    createUser,
    deleteUser,
    updateUser
}