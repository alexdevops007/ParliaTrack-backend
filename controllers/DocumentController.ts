// src/controllers/DocumentController.ts
import { Request, Response } from "express";
import Document, { IDocument } from "../models/DocumentModel";

export class DocumentController {
  public async upload(req: Request, res: Response): Promise<void> {
    try {
      const documentData: IDocument = req.body;
      const newDocument = new Document(documentData);
      await newDocument.save();
      res.status(201).json(newDocument);
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const documentList: IDocument[] = await Document.find();
      res.status(200).json(documentList);
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const documentId: string = req.params.id;
      const document: IDocument | null = await Document.findById(documentId);
      if (document) {
        res.status(200).json(document);
      } else {
        res.status(404).send("Document not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async download(req: Request, res: Response): Promise<void> {
    try {
      const documentId: string = req.params.id;
      const document: IDocument | null = await Document.findById(documentId);
      if (document) {
        // Implement the download logic here, e.g., send the file as a response
        res.status(200).send(`Downloading document: ${document.title}`);
      } else {
        res.status(404).send("Document not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const documentId: string = req.params.id;
      const deletedDocument: IDocument | null =
        await Document.findByIdAndDelete(documentId);
      if (deletedDocument) {
        res.status(200).json(deletedDocument);
      } else {
        res.status(404).send("Document not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }
}

export default new DocumentController();
