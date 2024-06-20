let User = require("../Model/loginuser");
let Customer = require("../Model/logincustomer");

async function createUser(req, res) {
  let {
    name,
    businessname,
    location,
    phonenumber,
    email,
    password,
    latitude,
    longitude,
    googlelink,
    category,
  } = req.body;

  try {
    let user = new User({
      name,
      businessname,
      location,
      phonenumber,
      email,
      password,
      latitude,
      longitude,
      googlelink,
      category,
    });
    await user.save();

    return res.status(200).json({ status: true });
  } catch (err) {
    return res.status(404).json({ status: false });
  }
}

async function checkuser(req, res) {
  let { email, password } = req.body;
  try {
    const query = { email, password };
    const result = await User.findOne(query);
    if (result) {
      return res.status(200).json({ status: true, data: result });
    } else {
      return res.status(400).json({ status: false });
    }
  } catch (err) {
    return res.err;
  }
}

async function createcustomer(req, res) {
  let { email, name, password, phonenumber } = req.body;
  if (!email || !name || !password || !phonenumber) {
    return res
      .status(400)
      .json({ status: "Check all the feilds are filled properly" });
  }
  try {
    let customer = new Customer({ email, name, password, phonenumber });
    await customer.save();
    return res.status(200).json({ status: "true" });
  } catch (err) {
    return res.status(400).json({ start: "false" });
  }
}
async function checkcustomer(req, res) {
  let { email, password } = req.body;
  try {
    const query = { email, password };
    const result = await Customer.findOne(query);
    if (result) {
      return res.status(200).json({ status: true, data: result });
    } else {
      return res.status(400).json({ status: false });
    }
  } catch (err) {
    return res.err;
  }
}

async function availabilitystatus(req, res) {
  let { availabilitystatus, _id } = req.body;
  try {
    let updatedUser;
    updatedUser = await User.findByIdAndUpdate(
      _id,
      { availabilitystatus: availabilitystatus },
      { new: true, upsert: true }
    );
    return res.status(200).json({ status: "true", updatedUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: "false", error: err.message });
  }
}

module.exports = {
  createUser,
  checkuser,
  createcustomer,
  checkcustomer,
  availabilitystatus,
};
