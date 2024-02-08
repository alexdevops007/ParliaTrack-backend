import mongoose, { Document, Schema } from "mongoose";

export interface IOrderOfBusiness extends Document {
  title: string;
  description: string;
}

const OrderOfBusinessSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<IOrderOfBusiness>(
  "OrderOfBusiness",
  OrderOfBusinessSchema
);
