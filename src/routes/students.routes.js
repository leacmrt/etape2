const express = require('express')
const router = express.Router()
const methodOverride = require('method-override');
const studentsController =   require('../controllers/students.controller');
// Retrieve all employees
router.use(methodOverride('_method'));
router.get('/', studentsController.baseRoute);

router.get('/students/', studentsController.findAll);
// Create a new employee
router.post('/students/', studentsController.create);
// Retrieve a single employee with id
router.get('/students/:id', studentsController.findById);
// Update a employee with id
router.put('/students/update/:id', studentsController.update);
// Delete a employee with id
router.delete('/students/delete/:id', studentsController.delete);
module.exports = router