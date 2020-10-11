const {Router} = require('express');
const router = Router();

const {getNotes,createNotes,updateNote,deleteNote,getNote} = require('../controllers/notes.controllers'); 

router.route('/')
    .get(getNotes)
    .post(createNotes);
    
router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote);


module.exports = router;