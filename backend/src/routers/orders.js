import express from "express";
import orderContorller from "../controllers/orders.js";

const router = express.Router();

router
  .post("/orders", orderContorller.addNewOrder)
  .get("/orders/:userId", orderContorller.getUserOrders);

export default router;
