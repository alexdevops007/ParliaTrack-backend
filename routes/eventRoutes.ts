// src/routes/eventRoutes.ts
import { Router } from "express";
import EventController from "../controllers/EventController";

const router: Router = Router();

router.post("/events", EventController.create);
router.get("/events", EventController.getAll);
router.get("/events/:id", EventController.getById);
router.put("/events/:id", EventController.update);
router.delete("/events/:id", EventController.delete);

export default router;
