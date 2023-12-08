const { Router } = require('express');
const {postPasseger}= require('../controllers/postPasseger');
const { getAllPasseger } = require('../controllers/getAllPasseger');
const { getForName } = require('../controllers/getForName');
const { getPass } = require('../controllers/getPass');
const { postRegister } = require('../controllers/postRegister');
const { postPosibleUser } = require('../controllers/postPosibleUser');
const { getAllPosibleUser } = require('../controllers/getAllPosibleUser');
const { confirmarCorreo } = require('../controllers/ConfirmarCorreo');
const { getConfirmacion } = require('../controllers/getConfirmacion');
const { postLogin } = require('../controllers/postLogin');
const { deletPasseger } = require('../controllers/deletPasseger')
const { updatePasseger } = require('../controllers/putasseger')


const router = Router();

router.post('/post', postPasseger );
router.get('/getDNI', getForName )
router.get('/get', async (req, res) =>{
    try{
        const passegers = await getAllPasseger()
        res.status(200).json(passegers)
    } catch (error) {
        res.status(200).json({message: error.message})
    }
} );
router.get('/get/:id', getPass )
router.delete('/get/:id', deletPasseger)
router.post('/register', postRegister );
router.post('/solicitud', postPosibleUser );
router.get('/getPosibleUser', getAllPosibleUser )
router.post('/confirmar-correo', confirmarCorreo );
router.get('/confirmar-correo', getConfirmacion );
router.post('/login', postLogin );
router.put('/get/:id', updatePasseger)
module.exports = router;