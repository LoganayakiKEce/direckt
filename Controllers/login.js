const express = require("express");
let cors = require("cors");
let router = express.Router();

const {
  createUser,
  checkuser,
  createcustomer,
  checkcustomer,
  availabilitystatus,
} = require("../Services/loginservices");

router.post("/register", createUser);
router.post("/login", checkuser);
router.post("/registercus", createcustomer);
router.post("/logincus", checkcustomer);
router.post("/availabilitystatus", availabilitystatus);
module.exports = router;
