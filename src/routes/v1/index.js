const express = require("express");
const app = express();
const router = express.Router();
const {
  CreateUser,
  GetUser,
  GetUserById,
  UpdateUser,
  DeleteUser,
} = require("../../controllers/userController");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
     const extension = path.extname(file.originalname);

     cb(null, file.originalname + '-' + uniqueSuffix + extension);

    
  },
});

const upload = multer({ storage: storage });

//// CRUD OPERATION START //////////////
router.post("/create", CreateUser);
router.get("/getuser", GetUser);
router.get("/getuser/:id", GetUserById);
router.patch("/getuser/:id", UpdateUser);
router.delete("/getuser/:id", DeleteUser);

//// CRUD OPERATION DONE //////////////

// MULTER : File Upload implemenntation //

router.post("/uploads", upload.single("file"), (req, res) => {
  res.status(201).json(req.file)
});

module.exports = router;
