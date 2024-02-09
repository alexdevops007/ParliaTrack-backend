import { Router } from "express";
import DebateController from "../controllers/DebateController";

const router: Router = Router();

router.post("/debates", DebateController.create);
router.get("/debates", DebateController.getAll);
router.get("/debates/:id", DebateController.getById);
router.put("/debates/:id/add-note", DebateController.addNote);
router.put("/debates/:id/mark-key-moment", DebateController.markKeyMoment);
router.delete("/debates/:id", DebateController.delete);

export default router;
