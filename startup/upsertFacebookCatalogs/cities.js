const FacebookCatalog = require('../../models/facebook_catalog');

const cities = [
  {
      "key": "AD",
      "name": "Andorra",
      "type": "country",
      "country_code": "AD",
      "supports_region": true,
      "supports_city": false
  },
]


function upsertCities(cb) {
  let catalog = {
    type: "city",
    catalog : cities,
  }

  FacebookCatalog
    .findOneAndUpdate({ type: "city" }, catalog, { upsert: true, new: true })
    .exec((err, result) => {
      if (err) {
        console.log(err);
      }
      else{
        console.log('Catalogo ciudades importado');
      }
      
    });
}

module.exports = {
  upsertCities,
}
