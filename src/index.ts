import express from 'express'
import bodyParser from 'body-parser'
import UsersRouter from './routes/users'
import RolesRouter from './routes/roles'
import ProductsRouter from './routes/products'
import OrdersRouter from './routes/orders'
import PermissionsRouter from './routes/permissions'
import AuthRouter from './routes/auth'
import { authenticate } from './middlewares/authentication'
import cors from 'cors'

const port = 8888;

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(authenticate)

app.use('/users', UsersRouter)
app.use('/roles', RolesRouter)
app.use('/auth', AuthRouter)
app.use('/products', ProductsRouter)
app.use('/orders', OrdersRouter)
app.use('/permissions', PermissionsRouter)


app.get('/', (req, res) => {
  res.send('Hello World!123');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


