const FacebookCatalog = require('../../models/facebook_catalog');

const cities = [
  {
    "key": "83693",
    "name": "Buenos Aires",
    "type": "city",
    "country_code": "AR",
    "country_name": "Argentina",
    "region": "Ciudad Autónoma de Buenos Aires",
    "region_id": 103,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "259014",
    "name": "Manaos",
    "type": "city",
    "country_code": "BR",
    "country_name": "Brasil",
    "region": "Amazonas",
    "region_id": 441,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "269969",
    "name": "São Paulo",
    "type": "city",
    "country_code": "BR",
    "country_name": "Brasil",
    "region": "São Paulo (state)",
    "region_id": 460,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "245039",
    "name": "Boa Vista",
    "type": "city",
    "country_code": "BR",
    "country_name": "Brasil",
    "region": "Roraima",
    "region_id": 458,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "234370",
    "name": "La Paz",
    "type": "city",
    "country_code": "BO",
    "country_name": "Bolivia",
    "region": "La Paz Department",
    "region_id": 432,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "328660",
    "name": "Santiago de Chile",
    "type": "city",
    "country_code": "CL",
    "country_name": "Chile",
    "region": "Santiago Metropolitan Region",
    "region_id": 673,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "458130",
    "name": "Bogotá",
    "type": "city",
    "country_code": "CO",
    "country_name": "Colombia",
    "region": "Distrito Especial",
    "region_id": 747,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "461869",
    "name": "Cúcuta",
    "type": "city",
    "country_code": "CO",
    "country_name": "Colombia",
    "region": "Norte de Santander",
    "region_id": 734,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "484027",
    "name": "San José",
    "type": "city",
    "country_code": "CR",
    "country_name": "Costa Rica",
    "region": "San José Province",
    "region_id": 758,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "627482",
    "name": "Santo Domingo",
    "type": "city",
    "country_code": "DO",
    "country_name": "República Dominicana",
    "region": "Distrito Nacional",
    "region_id": 874,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "644431",
    "name": "Quito",
    "type": "city",
    "country_code": "EC",
    "country_name": "Ecuador",
    "region": "Pichincha Province",
    "region_id": 964,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "2201941",
    "name": "San Salvador",
    "type": "city",
    "country_code": "SV",
    "country_name": "El Salvador",
    "region": "San Salvador Department",
    "region_id": 3489,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "882407",
    "name": "Ciudad de Guatemala",
    "type": "city",
    "country_code": "GT",
    "country_name": "Guatemala",
    "region": "Guatemala Department",
    "region_id": 1538,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "905082",
    "name": "Tegucigalpa",
    "type": "city",
    "country_code": "HN",
    "country_name": "Honduras",
    "region": "Francisco Morazán Department",
    "region_id": 1580,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "926887",
    "name": "Puerto Príncipe",
    "type": "city",
    "country_code": "HT",
    "country_name": "Haití",
    "region": "Ouest Department",
    "region_id": 1618,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "2673660",
    "name": "Ciudad de México",
    "type": "city",
    "country_code": "MX",
    "country_name": "México",
    "region": "Distrito Federal",
    "region_id": 2513,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "1646894",
    "name": "Managua",
    "type": "city",
    "country_code": "NI",
    "country_name": "Nicaragua",
    "region": "Managua Department",
    "region_id": 2653,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "1681417",
    "name": "Ciudad de Panamá",
    "type": "city",
    "country_code": "PA",
    "country_name": "Panamá",
    "region": "Panamá Province",
    "region_id": 2754,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "1696855",
    "name": "Lima",
    "type": "city",
    "country_code": "PE",
    "country_name": "Perú",
    "region": "Lima Region",
    "region_id": 2771,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "2515532",
    "name": "San Juan (Puerto Rico)",
    "type": "city",
    "country_code": "PR",
    "country_name": "Puerto Rico",
    "region": "San Juan",
    "region_id": 4281,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "1903658",
    "name": "Asunción",
    "type": "city",
    "country_code": "PY",
    "country_name": "Paraguay",
    "region": "Asunción",
    "region_id": 4286,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "2340825",
    "name": "Puerto España",
    "type": "city",
    "country_code": "TT",
    "country_name": "Trinidad y Tobago",
    "region": "Port of Spain",
    "region_id": 3741,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "2558673",
    "name": "Caracas",
    "type": "city",
    "country_code": "VE",
    "country_name": "Venezuela",
    "region": "Capital District",
    "region_id": 3956,
    "supports_region": true,
    "supports_city": true
  },
  {
    "key": "2549997",
    "name": "Montevideo",
    "type": "city",
    "country_code": "UY",
    "country_name": "Uruguay",
    "region": "Montevideo Department",
    "region_id": 3903,
    "supports_region": true,
    "supports_city": true
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
