import { Router } from 'express';
import { createRole, listRoles } from '../controllers/roles';
import { authorize } from '../middlewares/authorization';
import PERMISSIONS from '../constants';

const router = Router();

router.get('/', authorize([PERMISSIONS.ROLES.VIEW]), listRoles)
router.post('/', authorize([PERMISSIONS.ROLES.EDIT]), createRole)

export default router;