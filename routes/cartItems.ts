import { Router } from 'express'; 
import { createCartItem, getCartItems } from '../controllers/cartItems';
const router = Router(); 


// whole route: /api/cart-items...
router.post('/create', createCartItem); 
router.get('/all', getCartItems);
// router.get('/by-cart', getCartItemsByCartId);
// router.get('/', getCartItem); 
// router.patch('/:cartItemId', updateCartItem); // patch is a partial update 
// router.delete('/:cartItemId', deleteCartItem);

export default router; 