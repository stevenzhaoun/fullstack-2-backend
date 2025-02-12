import express from 'express'
import UsersRouter from './routes/users'

const port = 8888;

const app = express();

app.use('/users', UsersRouter)

app.get('/', (req, res) => {
  res.send('Hello World!123');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


