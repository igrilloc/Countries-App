const router = require('express').Router();
const { Op } = require('sequelize');
const { Country, Activities } = require('../db.js');


router.get('/', async (req, res) => {
    const { name } = req.query;

    if (name) {
        try {
            const country = await Country.findAll(
                { // Busco coincidencia por el nombre pasado por query incluyo la tabla de actividades
                    where: { name: { [Op.iLike]: `%${name}%` } },
                    include: Activities
                }
            );

            // console.log("router.get('/'): country", country);
            // Si encuentro el país lo mando, sino mensaje
            // http://localhost:3001/countries?name=argentina
            res.send(country.length > 0 ? country : "No country found");

        } catch(error) {
            res.status(400).send("Bad Request");
        }

    } else {
        try {
            const countries = await Country.findAll(
                {
                    include: Activities
                }
            ); 
            
            // console.log("router.get('/') countries:", countries)
            // Envio los países (Actua como ruta general)
            // http://localhost:3001/countries
            res.send(countries.length > 0 ? countries : "No countries");

        } catch(error) {
            res.status(400).send("Bad Request")
        }
    }
});


router.get('/:id', async (req, res) => {
    let { id } = req.params;

    // Tengo guardado los id en la bd en mayuscula
    id = id.toUpperCase();

    try {
        const country = await Country.findByPk(id, {
            include: [
                {
                    model: Activities,
                    through: { attributes: [] }
                }
            ]
        });

        // console.log("router.get('/:id'):", country);
        // Si encuentro el país por params lo mando, sino mensaje
        // http://localhost:3001/countries/arg
        res.send(country ? country : "No country");

    } catch (error) {
        res.status(400).json("Bad Request")
    }
});


module.exports = router;