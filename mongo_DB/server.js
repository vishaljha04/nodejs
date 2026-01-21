import express from "express";
// import { User } from './models/User.model';
// import users from './MOCK_DATA.json'
import mongoose from "mongoose";
import connectDB from "./utils/db.js";
import { User } from "./models/User.model.js";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectDB();

app.post("/api/users", async (req, res) => {
  const { first_name, last_name, email, gender, job_title } = req.body;
  console.log("request hit with", email);
  if (!first_name || !last_name | !email | !gender | !job_title) {
    return res.json({ message: "All fields are required to create user" });
  }

  //check for availablity of existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json(
      { message: "User is already existing with following detaiel" },
      { status: 400 },
    );
  }
  const newUser = await User.create({
    firstName: first_name,
    lastName: last_name,
    email: email,
    gender: gender,
    jobTitle: job_title,
  });
  console.log(newUser);
  return res.json(
    { message: "user is created successfully:", newUser },
    { status: 200 },
  );
});

//get
app.get("/api/users", async (req, res) => {
  try {
    const allDBusers = await User.find({});

    const html = `
      <ul>
        ${allDBusers
          .map(
            (user) => `
          <li>
            ${user.firstName} ${user.lastName} - ${user.email}
          </li>
        `,
          )
          .join("")}
      </ul>
    `;

    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

//get user by id
app.get("/api/users/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.json(
      { message: "id is not available in params" },
      { status: 404 },
    );
  }
  const userwithId = await User.findById(id);

  return res.json(
    { message: "user find successfully", userwithId },
    { status: 200 },
  );
});



app.listen(PORT, () => {
  console.log("APP IS RUNNING ON PORT", PORT);
});
