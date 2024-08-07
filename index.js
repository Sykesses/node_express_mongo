import express from "express";
import mongoose from "mongoose";
import router from "./Router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DataBaseURL = `mongodb+srv://user:user@cluster0.7fx74dq.mongodb.net/`;

const app = express();

app.use(express.json());
app.use(fileUpload({}));
app.use(express.static("static"));
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DataBaseURL);
    app.listen(PORT, () => console.log("server started on port" + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
