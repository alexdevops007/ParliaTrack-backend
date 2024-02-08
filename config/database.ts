import mongoose from "mongoose";
import "colors";

const dbUrl =
  "mongodb+srv://xandermobutu:123ParliaTrack123@parliatrack.wc1oaph.mongodb.net/ParliaTrack?retryWrites=true&w=majority";

const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(dbUrl);
    console.log(`Connected to the database`.bgGreen.bold);
  } catch (error) {
    console.error("Database connection error:", (error as Error).message);
    process.exit(1);
  }
};

export default connectDatabase;
