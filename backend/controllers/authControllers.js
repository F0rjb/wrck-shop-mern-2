const userModel = require("../model/User");
const { hashPwd, comparePwd } = require("../utils/passwordFunctions");
module.exports.register = async (req, res) => {
  const { email, pasword } = req.body;
  console.log(req.body);
  try {
    //verefier si l'utilisateur exsite
    const existeUser = await userModel.findOne({ email });
    if (existeUser) {
      return res.status(400).send({ msg: "user exsists" });
    }
    const hashed = await hashPwd(pasword);
    const user = new userModel({ ...req.body, pasword: hashed });
    await user.save();
    res.send({ msg: "the user successfully created" });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
module.exports.loginuser = async (req, res) => {
  const { email, pasword } = req.body;
  console.log(req.body);
  try {
    //verefier si l'utilisateur exsite
    const existeUser = await userModel.findOne({ email });
    if (!existeUser) {
      return res.status(400).send({ msg: "bad credentials(email)" });
    }
    const match = comparePwd(pasword, existeUser.pasword);
    if (!match) {
      return res.status(400).send({ msg: "bad credentials(password)" });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
