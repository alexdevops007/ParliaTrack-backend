import mongoose, { Document, Schema } from "mongoose";

export interface IDebate extends Document {
  topic: string;
  notes: string;
  keyMoments: string[];
}

const DebateSchema: Schema = new Schema({
  topic: { type: String, required: true },
  notes: { type: String, required: true },
  keyMoments: { type: [String], default: [] },
});

export default mongoose.model<IDebate>("Debate", DebateSchema);
