import { Router } from 'express';
import { CodeRoomController } from '../controllers';


const router = Router();
const controller = new CodeRoomController();

router.get('/', controller.getAll);
router.post('/', controller.create);
    
export default router;
