import { Router } from "express";
import * as userCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";
const router = Router();

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkExistingRoles],
  userCtrl.createUser
);

export default router;
