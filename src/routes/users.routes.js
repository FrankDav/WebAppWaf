import { Router } from "express";
import { registerUser, getUsers } from "../controllers/users.controller.js";
import { userValidation } from "../validators/user.validator.js";

const router = Router();

router.post("/register", userValidation, registerUser);
router.get("/users", getUsers);

export default router;
