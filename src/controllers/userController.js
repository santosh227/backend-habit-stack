const User = require("../models/Users");

const CreateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name | !email | !password) {
      res
        .status(400)
        .json({ success: false, message: "Name and Email are required" });
    }

    const CreatedUser = await User.create({ name, email, password });
    res.status(200).json(CreatedUser);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const GetUser = async (req, res) => {
  try {
    const GettedUser = await User.find();
    res.status(201).json(GettedUser);
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

const GetUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const GettedUserById = await User.findById(id);
    if (!GettedUserById) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(201).json(GettedUserById);
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateuser = await User.findByIdAndUpdate(id, req.body);
    res.status(201).json(updateuser);
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await User.findByIdAndDelete(id);
    res
      .status(201)
      .json({ success: true, message: "user deleted successfully" });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};
module.exports = { CreateUser, GetUser, GetUserById, UpdateUser, DeleteUser };
