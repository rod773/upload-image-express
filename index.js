import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

const port = 5000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});