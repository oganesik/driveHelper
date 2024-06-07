import { Router } from 'express';
import { createUser, getUser } from '../controllers/userController';

const router = Router();

router.post('/auth/register', createUser);
router.get('/users/:id', getUser);

export default router;