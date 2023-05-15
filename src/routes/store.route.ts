import { Router } from 'express';
import { createStore, sellBook } from '../controllers/store.controller';

const router = Router();

router.post('/', createStore);

router.post('/sell/book', sellBook);

export default router;