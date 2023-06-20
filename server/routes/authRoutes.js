const express = require('express');
const router = express.Router();
const { authLogin } = require('../controllers/authControllers');


router.post("/login", authLogin);

module.exports = router; 
