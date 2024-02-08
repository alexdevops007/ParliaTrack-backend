import app from "./app";
import "colors";

const port = 4500;

app.listen(port, () => {
  console.log(`Server is running o port ${port}`.bgBlue.bold);
});
