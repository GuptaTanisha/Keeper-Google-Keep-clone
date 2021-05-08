import {getNotes,createNote,deleteNote} from '../controllers/notes.js';
import express from 'express';

const router = express.Router();
router.get('/',getNotes);
router.delete('/:id',deleteNote);
router.post('/',createNote);

export default router;