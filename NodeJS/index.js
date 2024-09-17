import express from "express";

const App = express();
const Port = 3000;

App.get("/", (req, res) => {
  res.send("<h1><b><i>Hello From Node JS</i></b></h1>");
});

App.listen(Port, () => {
  console.log(`Server is running on port 3000`);
});
