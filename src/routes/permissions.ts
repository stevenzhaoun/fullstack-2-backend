import { Router } from 'express';
import { createRole, listRoles } from '../controllers/roles';
import { authorize } from '../middlewares/authorization';
import { listPermissions } from '../controllers/permissions';

const router = Router();

router.get('/',  listPermissions)

export default router;