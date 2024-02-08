import { Request, Response } from "express";
import Minutes, { IMinutes } from "../models/MinutesModel";

export class MinutesController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const minutesData: IMinutes = req.body;
      const newMinutes = new Minutes(minutesData);
      await newMinutes.save();
      res.status(201).json(newMinutes);
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const minutesList: IMinutes[] = await Minutes.find();
      res.status(200).json(minutesList);
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const minutesId: string = req.params.id;
      const minutes: IMinutes | null = await Minutes.findById(minutesId);
      if (minutes) {
        res.status(200).json(minutes);
      } else {
        res.status(404).send("Minutes not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async annotate(req: Request, res: Response): Promise<void> {
    try {
      const minutesId: string = req.params.id;
      const annotation: string = req.body.annotation;
      const updatedMinutes: IMinutes | null = await Minutes.findByIdAndUpdate(
        minutesId,
        { $push: { annotations: annotation } },
        { new: true }
      );
      if (updatedMinutes) {
        res.status(200).json(updatedMinutes);
      } else {
        res.status(404).send("Minutes not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async publish(req: Request, res: Response): Promise<void> {
    try {
      const minutesId: string = req.params.id;
      const updatedMinutes: IMinutes | null = await Minutes.findByIdAndUpdate(
        minutesId,
        { isPublished: true },
        { new: true }
      );
      if (updatedMinutes) {
        res.status(200).json(updatedMinutes);
      } else {
        res.status(404).send("Minutes not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const minutesId: string = req.params.id;
      const deletedMinutes: IMinutes | null = await Minutes.findByIdAndDelete(
        minutesId
      );
      if (deletedMinutes) {
        res.status(200).json(deletedMinutes);
      } else {
        res.status(404).send("Minutes not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }
}

export default new MinutesController();
