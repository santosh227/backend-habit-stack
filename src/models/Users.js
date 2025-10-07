const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    required: [true, "usernamee is req"],
    type: String,
  },

  email: {
    unique: [true, "email already exists"],
    required: [true, "email is reuired"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
  },
  
});
