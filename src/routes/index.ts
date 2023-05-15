import { Router } from 'express';
import authorRouts from '../routes/author.route';
import bookRoutes from '../routes/book.route';
import storeRoutes from '../routes/store.route';
import seedRoutes from '../routes/seed.route';


const router = Router();

/**
 * List all root paths for all routes
 * but all sub-routes will be inside separate route file
 */

router.use('/author', authorRouts);
router.use('/book', bookRoutes);
router.use('/store', storeRoutes);
router.use('/seed', seedRoutes);

export default router;
