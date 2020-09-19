import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
import { verifySignup } from "../middlewares";
const router = Router();

router.post("/signin", authCtrl.signIn);
router.post(
  "/signup",
  [
    verifySignup.checkDuplicatedUsernameOrEmail,
    verifySignup.checkExistingRoles,
  ],
  authCtrl.signUp
);

export default router;
