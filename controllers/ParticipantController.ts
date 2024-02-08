import { Request, Response } from "express";
import Participant, { IParticipant } from "../models/ParticipantModel";

export class ParticipantController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const participantData: IParticipant = req.body;
      const newParticipant = new Participant(participantData);
      await newParticipant.save();
      res.status(201).json(newParticipant);
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const participantList: IParticipant[] = await Participant.find();
      res.status(200).json(participantList);
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const participantId: string = req.params.id;
      const participant: IParticipant | null = await Participant.findById(
        participantId
      );
      if (participant) {
        res.status(200).json(participant);
      } else {
        res.status(404).send("Participant not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const participantId: string = req.params.id;
      const updatedParticipantData: IParticipant = req.body;
      const updatedParticipant: IParticipant | null =
        await Participant.findByIdAndUpdate(
          participantId,
          updatedParticipantData,
          { new: true }
        );
      if (updatedParticipant) {
        res.status(200).json(updatedParticipant);
      } else {
        res.status(404).send("Participant not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const participantId: string = req.params.id;
      const deletedParticipant: IParticipant | null =
        await Participant.findByIdAndDelete(participantId);
      if (deletedParticipant) {
        res.status(200).json(deletedParticipant);
      } else {
        res.status(404).send("Participant not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }
}

export default new ParticipantController();
