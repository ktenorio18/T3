const {Router} =require('express');
const router=Router();

const {getEstudiante}=require('../controllers/index.controller');
const {getCitas}=require('../controllers/index.controller');
const {agregarEstudiante}=require('../controllers/index.controller');
const {agregarCarrera}=require('../controllers/index.controller');
const {agregarCita}=require('../controllers/index.controller');
const {updateCita}=require('../controllers/index.controller');
const {deleteCita}=require('../controllers/index.controller');

router.get('/estudiante',getEstudiante);
router.get('/cita',getCitas);

router.post('/estudiante', agregarEstudiante);
router.post('/carrera', agregarCarrera);
router.post('/cita', agregarCita);

router.put('/cita/:id',updateCita);

router.delete('/cita/:id',deleteCita);

module.exports =router;