import { Router } from "express";
import OrderOfBusinessController from "../controllers/OrderOfBusinessController";

const router: Router = Router();

router.post("/", OrderOfBusinessController.create);
router.get("/", OrderOfBusinessController.getAll);
router.get("/:id", OrderOfBusinessController.getById);
router.put("/:id", OrderOfBusinessController.update);
router.delete("/:id", OrderOfBusinessController.delete);

export default router;
