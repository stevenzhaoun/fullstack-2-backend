import { Router } from 'express';
import { createUser, listUsers, getUser, updateUser } from '../controllers/users'
import { authorize } from '../middlewares/authorization';
import PERMISSIONS from '../constants';

const router = Router();

router.post('/', authorize([PERMISSIONS.USERS.EDIT]), createUser)

router.get('/', authorize([PERMISSIONS.USERS.VIEW]), listUsers);

router.get('/:id', authorize([PERMISSIONS.USERS.VIEW]), getUser)
router.put('/:id', authorize([PERMISSIONS.USERS.EDIT]), updateUser)

export default router;