const express = require('express')
const app = express()
const router = express.Router()
const v1Routes = require('./v1/index')

router.get('/v1',v1Routes)



module.exports = router