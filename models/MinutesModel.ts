import mongoose, { Document, Schema } from "mongoose";

export interface IMinutes extends Document {
  meetingTitle: string;
  minutesText: string;
  annotations: string[];
  isPublished: boolean;
}

const MinutesSchema: Schema = new Schema({
  meetingTitle: { type: String, required: true },
  minutesText: { type: String, required: true },
  annotations: { type: [String], default: [] },
  isPublished: { type: Boolean, default: false },
});

export default mongoose.model<IMinutes>("Minutes", MinutesSchema);
