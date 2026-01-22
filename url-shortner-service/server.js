import express, { json, urlencoded } from "express";
import urlRoute from './routes/url.route.js'
import connectDB from "./config/db.js";
const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use(urlencoded({extended:true}));

app.use('/url',urlRoute);

app.listen(PORT, () => {
  console.log(`Server is runnig on PORT:http://localhost:${PORT}`);
});
