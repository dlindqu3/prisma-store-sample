import { Router } from 'express'; 
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../controllers/products';
const router = Router(); 


// whole route: /api/products...
router.post('/create', createProduct); 
router.get('/all', getProducts);
router.get('/', getProduct); 
router.patch('/:productId', updateProduct); // patch is a partial update 
router.delete('/:productId', deleteProduct);

export default router; 