const express = require("express");
const { register, loginuser } = require("../controllers/authControllers");
const {
  registerRules,
  validator,
  loginRules,
} = require("../middlewares/validation/bodyValidation");
const router = express.Router();
/**
 *@method POST /auth/signup
 *@description register new user
 *@access public
 */
router.post("/signup", registerRules, validator, register);
/**
 *@method POST /auth/signin
 *@description login user
 *@access public
 */

router.post("/signin", loginRules, validator, loginuser);
module.exports = router;
