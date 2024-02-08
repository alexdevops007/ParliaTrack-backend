import { Request, Response } from "express";
import Debate, { IDebate } from "../models/DebateModel";

export class DebateController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const debateData: IDebate = req.body;
      const newDebate = new Debate(debateData);
      await newDebate.save();
      res.status(201).json(newDebate);
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const debateList: IDebate[] = await Debate.find();
      res.status(200).json(debateList);
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const debateId: string = req.params.id;
      const debate: IDebate | null = await Debate.findById(debateId);
      if (debate) {
        res.status(200).json(debate);
      } else {
        res.status(404).send("Debate not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async addNote(req: Request, res: Response): Promise<void> {
    try {
      const debateId: string = req.params.id;
      const newNote: string = req.body.note;
      const updatedDebate: IDebate | null = await Debate.findByIdAndUpdate(
        debateId,
        { $push: { notes: newNote } },
        { new: true }
      );
      if (updatedDebate) {
        res.status(200).json(updatedDebate);
      } else {
        res.status(404).send("Debate not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async markKeyMoment(req: Request, res: Response): Promise<void> {
    try {
      const debateId: string = req.params.id;
      const newKeyMoment: string = req.body.keyMoment;
      const updatedDebate: IDebate | null = await Debate.findByIdAndUpdate(
        debateId,
        { $push: { keyMoments: newKeyMoment } },
        { new: true }
      );
      if (updatedDebate) {
        res.status(200).json(updatedDebate);
      } else {
        res.status(404).send("Debate not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const debateId: string = req.params.id;
      const deletedDebate: IDebate | null = await Debate.findByIdAndDelete(
        debateId
      );
      if (deletedDebate) {
        res.status(200).json(deletedDebate);
      } else {
        res.status(404).send("Debate not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }
}

export default new DebateController();
