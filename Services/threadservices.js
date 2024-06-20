let threads = require("../Model/threads");
let threadreply = require("../Model/threadreply");
let threadsreply = require("../Model/threadreply");
let loginuser = require("../Model/loginuser");
async function createthreads(req, res) {
  let { category, email, landmark, image, bill, location, heading } = req.body;
  try {
    let thread = new threads({
      category,
      email,
      landmark,
      image,
      bill,
      location,
      heading,
    });
    await thread.save();
    return res.status(200).json({ status: "true", thread });
  } catch (err) {
    return res.status(404).json({ status: "false" });
  }
}
async function createthreadsreply(req, res) {
  let { threads_id, loginuser_id, deliverystatus, deal, replymessage } =
    req.body;
  try {
    let newthreadreply = new threadsreply({
      threads_id,
      loginuser_id,
      deliverystatus,
      deal,
      replymessage,
    });
    const savedThreadReply = await newthreadreply.save();
    await threads.findByIdAndUpdate(threads_id, {
      $push: { threadsreply: savedThreadReply._id },
    });

    return res.status(200).json({ status: "true" });
  } catch (err) {
    return res.status(404).json({ status: "false" });
  }
}

async function getuserthreads(req, res) {
  let { location, category } = req.body;
  try {
    const result = await threads.find({
      location: location,
      category: category,
    });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(400);
  }
}
async function getreplydata(req, res) {
  let { email } = req.body;
  try {
    const result = await threads.find({ email: email }).populate({
      path: "threadsreply",
      populate: { path: "loginuser_id", model: "userlogin" },
    });
    return res.status(200).json({ status: "true", result });
  } catch (err) {
    console.log(err);
    return res.status().json({ status: "false", error: err.message });
  }
}

module.exports = {
  createthreads,
  createthreadsreply,
  getreplydata,
  getuserthreads,
};
