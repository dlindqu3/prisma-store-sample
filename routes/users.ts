import { Router } from 'express'; 
import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/users';
const router = Router(); 


// whole route: /api/users...
router.post('/create', createUser); 
router.get('/all', getUsers);
router.get('/', getUser); 
router.patch('/:userId', updateUser); // patch is a partial update 
router.delete('/:userId', deleteUser);

export default router; 