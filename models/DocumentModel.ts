import mongoose, { Document, Schema } from "mongoose";

export interface IDocument extends Document {
  title: string;
  description: string;
  filePath: string;
}

const DocumentSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  filePath: { type: String, required: true },
});

export default mongoose.model<IDocument>("Document", DocumentSchema);
