// src/controllers/EventController.ts
import { Request, Response } from "express";
import Event, { IEvent } from "../models/EventModel";

export class EventController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const eventData: IEvent = req.body;
      const newEvent = new Event(eventData);
      await newEvent.save();
      res.status(201).json(newEvent);
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const eventList: IEvent[] = await Event.find();
      res.status(200).json(eventList);
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const eventId: string = req.params.id;
      const event: IEvent | null = await Event.findById(eventId);
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).send("Event not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const eventId: string = req.params.id;
      const updatedEventData: IEvent = req.body;
      const updatedEvent: IEvent | null = await Event.findByIdAndUpdate(
        eventId,
        updatedEventData,
        { new: true }
      );
      if (updatedEvent) {
        res.status(200).json(updatedEvent);
      } else {
        res.status(404).send("Event not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const eventId: string = req.params.id;
      const deletedEvent: IEvent | null = await Event.findByIdAndDelete(
        eventId
      );
      if (deletedEvent) {
        res.status(200).json(deletedEvent);
      } else {
        res.status(404).send("Event not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }
}

export default new EventController();
