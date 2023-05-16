import { Router } from 'express';
import { createBook, listBooks, listBooksByAuthor, listCheapestBooksforEachAuthor } from '../controllers/book.controllers';

const router = Router();

router.post('/', createBook);

router.get('/:storeId', listBooks);

router.get('/author/:authorId', listBooksByAuthor);

router.get('/min/price', listCheapestBooksforEachAuthor);

export default router;