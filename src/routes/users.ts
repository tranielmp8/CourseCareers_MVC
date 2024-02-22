import express from 'express';
import usersController from '../controllers/usersController.js';

const router = express.Router()

router.get('/', usersController.getMany);
router.get('/:id', usersController.get);

export default router