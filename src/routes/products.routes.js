import { Router } from "express";
import * as productsCtrl from "../controllers/products.controller";
import { authJwt } from "../middlewares";
const router = Router();

router.get(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  productsCtrl.getProducts
);
router.get("/:productId", productsCtrl.getProductById);
router.post("/", productsCtrl.createProduct);
router.put(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.updateProductById
);
router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.deleteProductById
);

export default router;
