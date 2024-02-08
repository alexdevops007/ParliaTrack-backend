// src/routes/documentRoutes.ts
import { Router } from "express";
import DocumentController from "../controllers/DocumentController";

const router: Router = Router();

router.post("/documents/upload", DocumentController.upload);
router.get("/documents", DocumentController.getAll);
router.get("/documents/:id", DocumentController.getById);
router.get("/documents/:id/download", DocumentController.download);
router.delete("/documents/:id", DocumentController.delete);

export default router;
