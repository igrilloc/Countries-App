const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios');


// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  
  try {
    const getApiData = await axios.get("http://restcountries.com/v3.1/all");

    getApiData.data.forEach(contry => {
      Country.findOrCreate(
        {
          where: { name: contry.name.common },
          defaults: {
            id: contry.cca3,
            name: contry.name.common,
            continents: contry.continents,
            capital: contry.capital || ['empty'],
            flags: contry.flags.svg,
            subregion: contry.subregion || 'empty',
            area: contry.area,
            population: contry.population,
          }
        }
      )
    });

  } catch (error) {
    res.status(404).json({error});
  }

  console.log('Countries loaded to the database.');

  server.listen(3001, () => {
    console.log('listening at 3001'); // eslint-disable-line no-console
  });

});
