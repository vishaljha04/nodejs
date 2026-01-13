const express = require("express");
const users = require('./MOCK_DATA.json');
const mongoose = require('mongoose');


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app
  .route("/api/users/:id")
  .get((req, res) => {
    console.log("user request", req.params.id);
    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  })
  .post((req, res) => {
    return res.json({ status: "pending" });
    const id = req.params.id;
  })
  .patch((req, res) => {
    return res.json({ status: "pending" });
    const id = req.params.id;
  })
  .delete((req, res) => {
    const id = Number(req.params.id);

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return res.status(404).json({ status: "user not found" });
    }

    users.splice(userIndex, 1);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ status: "error deleting user" });
      }

      return res.json({
        status: "successfully user deleted",
        userId: id,
      });
    });
  });

app.post("/api/users", (req, res) => {
  console.log(req.body);
  const userData = req.body;
  users.push({ id: users.length + 1, ...userData });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "successful", userId: users.length });
  });
});


app.listen(PORT, () => {
  console.log("APP IS RUNNING ON PORT", PORT);
});
