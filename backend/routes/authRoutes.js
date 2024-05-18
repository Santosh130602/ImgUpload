
const express = require("express");
const router = express.Router();

const {Login, SignUp} = require("../controllers/authController")

router.post('/login', Login);
router.post('/SignUp',SignUp);

module.exports = router;



