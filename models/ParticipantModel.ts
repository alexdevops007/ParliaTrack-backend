import mongoose, { Document, Schema } from "mongoose";

export interface IParticipant extends Document {
  name: string;
  position: string;
  party: string;
  bio: string;
}

const ParticipantSchema: Schema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  party: { type: String, required: true },
  bio: { type: String, required: true },
});

export default mongoose.model<IParticipant>("Participant", ParticipantSchema);
