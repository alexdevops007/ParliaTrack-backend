import { Router } from "express";
import ParticipantController from "../controllers/ParticipantController";

const router: Router = Router();

router.post("/participants", ParticipantController.create);
router.get("/participants", ParticipantController.getAll);
router.get("/participants/:id", ParticipantController.getById);
router.put("/participants/:id", ParticipantController.update);
router.delete("/participants/:id", ParticipantController.delete);

export default router;
