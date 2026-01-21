import express, { json, urlencoded } from "express";
import { configDotenv } from "dotenv";
import userRouter from "./routes/userRoute.js";
import connectDB from "./utils/connectDB.js";
import logger from "./middlewares/logger.js";

configDotenv();
const app = express();

//db connection
connectDB();

//middlewares
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(logger("../logs/log.txt"));

//Routes
app.use("/api/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log("App is running on PORT:", process.env.PORT);
});
