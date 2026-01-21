import { Router } from "express";
import {
  createNewUser,
  getUserById,
  handleGetAllUser,
} from "../controllers/user.controller.js";

const router = Router();

//registered user route on router from express;

router.post("/", createNewUser);

//get
router.get("/", handleGetAllUser);

//get user by id
router.get("/:id", getUserById);

export default router;
