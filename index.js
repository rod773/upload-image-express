import express from "express";
import fs from "fs";
import cors from "cors";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

const port = 5000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.set("view engine", "ejs");

app.get("/upload", (req, res) => {
  res.render("upload");
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("image uploaded");
});
