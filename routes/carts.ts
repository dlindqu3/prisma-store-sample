import { Router } from 'express'; 
import { createCart, getCarts, getCartByUserId, getCart, updateCart, deleteCart } from '../controllers/carts';
const router = Router(); 


// whole route: /api/carts...
router.post('/create', createCart); 
router.get('/all', getCarts);
router.get('/by-user', getCartByUserId);
router.get('/', getCart); 
router.patch('/:cartId', updateCart); // patch is a partial update 
router.delete('/:cartId', deleteCart);

export default router; 