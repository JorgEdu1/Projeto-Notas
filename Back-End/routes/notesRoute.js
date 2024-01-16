const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

//routes
router.get('/', notesController.showNotes);
router.post('/add', notesController.createNote);
router.put('/update', notesController.updateNote);
router.get('/update/:id', notesController.showNote);
router.delete('/delete', notesController.deleteNote);

module.exports = router;
