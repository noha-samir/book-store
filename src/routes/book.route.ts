import { Router } from 'express';
import { createBook, listBooks, listBooksByAuthor } from '../controllers/book.controllers';

const router = Router();

router.post('/', createBook);

router.get('/:storeId', listBooks);

router.get('/author/:authorId', listBooksByAuthor);


export default router;