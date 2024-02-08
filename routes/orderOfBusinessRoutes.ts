import { Router } from "express";
import OrderOfBusinessController from "../controllers/OrderOfBusinessController";

const router: Router = Router();

router.post("/order-of-business", OrderOfBusinessController.create);
router.get("/order-of-business", OrderOfBusinessController.getAll);
router.get("/order-of-business/:id", OrderOfBusinessController.getById);
router.put("/order-of-business/:id", OrderOfBusinessController.update);
router.delete("/order-of-business/:id", OrderOfBusinessController.delete);

export default router;
