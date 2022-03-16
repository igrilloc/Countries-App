const { Router } = require('express');

// Importar todos los routers;
const countries = require('./country.js');
const activity = require('./activities.js');


const router = Router();


// Configurar los routers
router.use('/countries', countries);
router.use('/activity', activity);



module.exports = router;
