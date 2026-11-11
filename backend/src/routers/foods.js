import express from "express";
import foodsController from "../controllers/foods.js";

const router = express.Router();

router.get("/foods", foodsController.getAllFoods);

export default router;
