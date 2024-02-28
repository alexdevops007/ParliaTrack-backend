import app from "./app";
import "colors";

const port = 4500;

app.listen(port, () => {
  console.log(`ParliaTrack Server is running on port ${port}`.bgBlue.bold);
});
