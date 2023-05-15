import { Router } from 'express';
import { createSeeds } from '../controllers/seed.controller';

const router = Router();

router.post('/', createSeeds);

export default router;