import { Router } from 'express';
import { createOrder, listOrders, getOrderById } from '../controllers/orders'
import { authorize } from '../middlewares/authorization';
import PERMISSIONS from '../constants';

const router = Router();

router.post('/', authorize([PERMISSIONS.ORDERS.EDIT]), createOrder)
router.get('/', authorize([PERMISSIONS.ORDERS.VIEW]), listOrders)
router.get('/:id', authorize([PERMISSIONS.ORDERS.VIEW]), getOrderById)

export default router;