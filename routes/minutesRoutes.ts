import { Router } from "express";
import MinutesController from "../controllers/MinutesController";

const router: Router = Router();

router.post("/minutes", MinutesController.create);
router.get("/minutes", MinutesController.getAll);
router.get("/minutes/:id", MinutesController.getById);
router.put("/minutes/:id/annotate", MinutesController.annotate);
router.put("/minutes/:id/publish", MinutesController.publish);
router.delete("/minutes/:id", MinutesController.delete);

export default router;
