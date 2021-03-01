const express = require("express");
const app = express();
const axios = require("axios");
const notGoing = [];
const going = [];
const randomUsers = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//randomUser backend portion
//get
app.get("/randomUser", (req, res) => {
  axios.get("https://randomuser.me/api").then((resp) => {
    res.json(resp.data.results);
  });
});
//post
app.post("/randomUser", (req, res) => {
  console.log(req.body);
  const user = req.body;
  randomUsers.push({ ...user, id: randomUsers.length + 1 });
  res.json(user);
});
//going users backend portion
//get
app.get("/goingUsers", (req, res) => {
  res.json(going);
});
//post
app.post("/goingUsers", (req, res) => {
  //req.body received from front end
  going.push(req.body);
  res.json(going);
});

//not going users backend portion
//get
app.get("/notGoingUsers", (req, res) => {
  res.json(notGoing);
});
//post
app.post("/notGoingUsers", (req, res) => {
  //req.body received from front end
  notGoing.push(req.body);
  res.json(notGoing);
});
//

app.listen(3001, (req, res) => {
  console.log("listening on port 3001");
});
