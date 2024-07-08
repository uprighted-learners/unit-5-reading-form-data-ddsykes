const express = require("express");
const app = express();

const PORT = 3000;

//Creating the middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//creating global variables

let word1 = "";
let word2 = "";
let word3 = "";
let word4 = "";
let word5 = "";

// Routes
app.get("/first-word", (req, res) => {
  res.sendFile(__dirname + "/public/first-word.html");
});

app.post("/second-word", (req, res) => {
  word1 = req.body.word;
  res.sendFile(__dirname + "/public/second-word.html");
});

app.post("/third-word", (req, res) => {
  word2 = req.body.word;
  res.sendFile(__dirname + "/public/third-word.html");
});

app.post("/fourth-word", (req, res) => {
  word3 = req.body.word;
  res.sendFile(__dirname + "/public/fourth-word.html");
});

app.post("/fifth-word", (req, res) => {
  word4 = req.body.word;
  res.sendFile(__dirname + "/public/fifth-word.html");
});

app.post("/done", (req, res) => {
  word5 = req.body.word;
  res.redirect("/story");
});

app.get("/story", (req, res) => {
  const story = `Once upon a time, there was a ${word1} who loved to ${word2}. They always carried a ${word3} in their pocket and wore a ${word4} hat. One day, they met a ${word5} and they became best friends.`;
  res.send(`<h1>Your Story</h1><p>${story}</p><a href="/reset">Start Over</a>`);
});

app.get("/reset", (req, res) => {
  word1 = "";
  word2 = "";
  word3 = "";
  word4 = "";
  word5 = "";
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
