import { Router } from 'express';
import { createUser, listUsers, getUser } from '../controllers/users'
import { authenticate } from '../middlewares/authentication';
import { authorize } from '../middlewares/authorization';
import PERMISSIONS from '../constants';

const router = Router();

router.post('/', authorize([PERMISSIONS.USERS.EDIT]), createUser)

router.get('/', authorize([PERMISSIONS.USERS.VIEW]), listUsers);

router.get('/:id', authorize([PERMISSIONS.USERS.VIEW]), getUser)

export default router;