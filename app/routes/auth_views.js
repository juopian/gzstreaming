var express = require('express')
var router = express.Router()
var model = require('./auth_model.js')


router.post('/sign_in', model.signIn)
router.get('/sign_out', model.signOut)
router.get('/current_user', model.currentUser)

module.exports = router 

