import { Router } from 'express'; 
import { createUser, getUsers, getUser } from '../controllers/users';
const router = Router(); 


// whole route: /api/users...
router.post('/create', createUser); 
router.get('/all', getUsers);
router.get('/:userId', getUser); 


export default router; 