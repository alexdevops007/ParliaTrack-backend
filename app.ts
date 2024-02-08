import express from 'express';
import 'colors'

const app = express();
const port = 4500;

app.get('/', (req, res) => {
  res.send('Hello, ParliaTrack!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`.bgGreen.bold);
});
