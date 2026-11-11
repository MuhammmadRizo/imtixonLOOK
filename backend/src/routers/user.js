import express from "express";
import userController from "../controllers/user.js";
import userMiddleware from "../middleware/users.js";

const router = express.Router();

router
  .get("/users", userController.getAllUsers)
  .post("/users", userMiddleware.userAdd, userController.addNewUser);

export default router;
