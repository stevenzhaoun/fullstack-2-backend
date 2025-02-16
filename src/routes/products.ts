import { Router } from 'express';
import { createProduct, getProductById, listProducts } from '../controllers/products'
import { authorize } from '../middlewares/authorization';
import PERMISSIONS from '../constants';

const router = Router();

router.post('/', authorize([PERMISSIONS.PRODUCTS.EDIT]), createProduct)

router.get('/', authorize([PERMISSIONS.PRODUCTS.VIEW]), listProducts);

router.get('/:id', authorize([PERMISSIONS.PRODUCTS.VIEW]), getProductById)

export default router;