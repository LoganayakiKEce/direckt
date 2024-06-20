const express = require("express");
let cors = require("cors");

let Threadrouter = express.Router();

const {
  createthreads,
  createthreadsreply,
  getreplydata,
  getuserthreads,
} = require("../Services/threadservices");

Threadrouter.post("/createthreads", createthreads);
Threadrouter.post("/createthreadreply", createthreadsreply);
Threadrouter.post("/getreplydata", getreplydata);
Threadrouter.post("/getuserthreads", getuserthreads);

module.exports = Threadrouter;
