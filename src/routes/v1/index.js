const express = require('express')
const app = express()
const router = express.Router()
const {CreateUser, GetUser, GetUserById, UpdateUser, DeleteUser} = require('../../controllers/userController')


router.post('/create', CreateUser)
router.get('/getuser', GetUser)
router.get('/getuser/:id', GetUserById)
router.patch('/getuser/:id', UpdateUser)
router.delete('/getuser/:id', DeleteUser)

module.exports = router