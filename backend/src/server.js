import express from "express";
import { configDotenv } from "dotenv";
import userRouter from "./routers/user.js";
import foodRouter from "./routers/foods.js";
import orderFood from "./routers/orders.js";
import cors from "cors";

configDotenv();

const app = express();
app.use(cors("http://127.0.0.1:5500"));
app.use(express.json());
app.use(userRouter);
app.use(foodRouter);
app.use(orderFood);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
