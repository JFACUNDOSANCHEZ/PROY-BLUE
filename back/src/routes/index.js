const { Router } = require('express');
const { postPasseger } = require('../controllers/postPasseger');
const { getAllPasseger } = require('../controllers/getAllPasseger');
const { getForName } = require('../controllers/getForName');
const { getPass } = require('../controllers/getPassID');
const { postRegister } = require('../controllers/postRegister');
const { postPosibleUser } = require('../controllers/postPosibleUser');
const { getAllPosibleUser } = require('../controllers/getAllPosibleUser');
const { confirmarCorreo } = require('../controllers/postConfirmarCorreo');
const { getConfirmacion } = require('../controllers/getConfirmacion');
const { postLogin } = require('../controllers/postLogin');
const { deletPasseger } = require('../controllers/deletPasseger')
const { updatePasseger } = require('../controllers/putasseger');
const { getallUser } = require('../controllers/getAllUsers');
const { getUserId } = require('../controllers/getUserID');
const { putUser } = require('../controllers/putUser');


const router = Router();

router.post('/post', postPasseger);
router.get('/getDNI', getForName)
router.get('/get', async (req, res) => {
    try {
        const passegers = await getAllPasseger()
        res.status(200).json(passegers)
    } catch (error) {
        res.status(200).json({ message: error.message })
    }
});
//Passeger
router.get('/get/:id', getPass)
router.delete('/get/:id', deletPasseger)
router.put('/get/:id', updatePasseger);
router.post('/solicitud', postPosibleUser);
// USERs
router.get('/confirmar-correo', getConfirmacion);
router.post('/confirmar-correo', confirmarCorreo);
router.post('/login', postLogin);
router.get('/getPosibleUser', getAllPosibleUser)
router.post('/register', postRegister);
router.get('/user/:id', getUserId);
router.put('/user/:id', putUser);
router.get('/user', getallUser);
module.exports = router;