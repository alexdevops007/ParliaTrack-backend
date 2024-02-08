import { Router } from "express";
import DebateController from "../controllers/DebateController";

const router: Router = Router();

router.post("/", DebateController.create);
router.get("/", DebateController.getAll);
router.get("/:id", DebateController.getById);
router.put("/:id/add-note", DebateController.addNote);
router.put("/:id/mark-key-moment", DebateController.markKeyMoment);
router.delete("/:id", DebateController.delete);

export default router;
