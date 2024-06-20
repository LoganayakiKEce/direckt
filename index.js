const express = require("express");
let app = express();
const mongoose = require("mongoose");
let cors = require("cors");
const dotenv = require("dotenv");

const router = require("./Controllers/login");
const Threadrouter = require("./Controllers/thread");

dotenv.config();
// Middlewares
// To get request body and converts to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors({ orgin: ["http://localhost:5173/"], credentials: true }));

app.use(cors());

app.use("/public/images", express.static("public/images"));

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoDbAtlas");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/user", router);
app.use("/customer", router);
app.use("/customer", Threadrouter);

// app.get("/", (req, res) => {
//   res.send("<h1>HELLO</h1>");
// });
const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT | 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
