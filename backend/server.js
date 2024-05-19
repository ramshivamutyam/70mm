import express from "express";
import nodemon from "nodemon";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send("welcome");
});
app.get("/post", (req, res) => {
  res.statusCode = 200;
  res.send("welcome to post");
});
app.get("/*", (req, res) => {
  res.statusCode = 200;
  res.send("404 Not Found");
});

const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(`listening on : http://localhost:${port}`);
});
