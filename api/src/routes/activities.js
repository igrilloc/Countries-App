const router = require('express').Router();
const { Country, Activities, countries_activities } = require('../db');


router.post("/", async (req, res) => {
  const { name, difficulty, duration, countries, season } = req.body;

    try { // Como countries es una prop de la act, la recorro para crear la act por pais
        for(let c = 0; c < countries.length; c++) {
            const [activity, created] = await Activities.findOrCreate(
                {
                    where: { name: name },
                    defaults: {
                        name: name,
                        difficulty: difficulty,
                        duration: duration,
                        season: season,
                    },
                }
                
            );
        
            const country = await Country.findAll(
                { // Busco en mi tabla los paises
                    where: { name: countries[c] },
                }
            );

            // console.log("Países del findAll()", country);
            activity.addCountry(country);
        }

        res.status(201).json("Created");

    } catch(error) {
        console.log(error);

        res.status(404).json("Not Found");
    }
});


router.get('/', async (req, res) => {
    
    try { 
        const activity = await Activities.findAll(
            {
                include: Country,
            }
        );

        res.json(activity);

    } catch (error) {
        console.log(error);
    }

});


module.exports = router;

