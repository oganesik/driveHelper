import { Router } from 'express';
import { createVehicle, getAllVehicles } from '../controllers/vehicleController';

const router = Router();

router.post('/vehicles', createVehicle);
router.get('/vehicles', getAllVehicles);

export default router;