import express from "express";
import emails from "./db.js";
import bodyParser from "body-parser";
import multer from "multer";

const port = 3000;

// Set up the express app
const app = express();

const upload = multer();

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

// Set up CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// get all emails
app.get("/api/emails", async (req, res) => {
  await new Promise((r) => setTimeout(r, 2000));
  res.status(200).send({
    success: "true",
    message: "book'sinfo retrieved successfully",
    emails: emails,
  });
});

app.post("/api/emails", async (req, res) => {
  console.log(req.body);
  await new Promise((r) => setTimeout(r, 2000));
  if (!req.body.author || !req.body.title || !req.body.body) {
    return res.status(400).send({
      success: "false",
      message: "every books field should be filled out",
    });
  }

  const email = {
    id: emails.length + 1,
    author: req.body.author,
    title: req.body.title,
    body: req.body.body,
  };

  emails.push(email);
  return res.status(201).send({
    success: "true",
    message: "book'sinfo sent successfully",
    email,
  });
});

app.listen(port, () => {
  console.log(`Email app listening at http://localhost:${port}`);
});
