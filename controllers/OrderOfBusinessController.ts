import { Request, Response } from "express";
import OrderOfBusiness, {
  IOrderOfBusiness,
} from "../models/OrderOfBusinessModel";

export class OrderOfBusinessController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const orderOfBusinessData: IOrderOfBusiness = req.body;
      const newOrderOfBusiness = new OrderOfBusiness(orderOfBusinessData);
      await newOrderOfBusiness.save();
      res.status(201).json(newOrderOfBusiness);
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const orderOfBusinessList: IOrderOfBusiness[] =
        await OrderOfBusiness.find();
      res.status(200).json(orderOfBusinessList);
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const orderOfBusinessId: string = req.params.id;
      const orderOfBusiness: IOrderOfBusiness | null =
        await OrderOfBusiness.findById(orderOfBusinessId);
      if (orderOfBusiness) {
        res.status(200).json(orderOfBusiness);
      } else {
        res.status(404).send("Order of Business not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const orderOfBusinessId: string = req.params.id;
      const updatedOrderOfBusinessData: IOrderOfBusiness = req.body;
      const updatedOrderOfBusiness: IOrderOfBusiness | null =
        await OrderOfBusiness.findByIdAndUpdate(
          orderOfBusinessId,
          updatedOrderOfBusinessData,
          { new: true }
        );
      if (updatedOrderOfBusiness) {
        res.status(200).json(updatedOrderOfBusiness);
      } else {
        res.status(404).send("Order of Business not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const orderOfBusinessId: string = req.params.id;
      const deletedOrderOfBusiness: IOrderOfBusiness | null =
        await OrderOfBusiness.findByIdAndDelete(orderOfBusinessId);
      if (deletedOrderOfBusiness) {
        res.status(200).json(deletedOrderOfBusiness);
      } else {
        res.status(404).send("Order of Business not found.");
      }
    } catch (error) {
      res.status(500).send((error as Error).message);
    }
  }
}

export default new OrderOfBusinessController();
