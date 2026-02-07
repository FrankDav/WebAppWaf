import { body } from "express-validator";

export const userValidation = [
  body("name").trim().escape().notEmpty(),
  body("email").isEmail().normalizeEmail()
];
