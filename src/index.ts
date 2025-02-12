import express from 'express'

const port = 8888;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!123');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


