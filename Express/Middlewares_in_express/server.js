const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("Hello from middleware 1")
    // return res.json({message:"Hello from middleware:1"});
    next();
});

app.use((req, res, next) => {
    console.log("Hello from middleware 2")
    // return res.json({message:"Hello from middleware:1"});
    next();
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.listen(PORT, () => {
  console.log("server is running on PORT", PORT);
});
