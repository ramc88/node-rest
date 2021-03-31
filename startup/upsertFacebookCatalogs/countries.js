const FacebookCatalog = require('../../models/facebook_catalog');

const countries = [
  {
      "key": "AD",
      "name": "Andorra",
      "type": "country",
      "country_code": "AD",
      "supports_region": true,
      "supports_city": false
  },
  {
      "key": "AE",
      "name": "Emiratos Árabes Unidos",
      "type": "country",
      "country_code": "AE",
      "supports_region": true,
      "supports_city": true
  },
  {
      "key": "AF",
      "name": "Afganistán",
      "type": "country",
      "country_code": "AF",
      "supports_region": true,
      "supports_city": false
  },
  {
      "key": "AG",
      "name": "Antigua",
      "type": "country",
      "country_code": "AG",
      "supports_region": true,
      "supports_city": false
  },
  {
      "key": "AI",
      "name": "Anguila",
      "type": "country",
      "country_code": "AI",
      "supports_region": true,
      "supports_city": false
  },
  {
      "key": "AL",
      "name": "Albania",
      "type": "country",
      "country_code": "AL",
      "supports_region": true,
      "supports_city": false
  },
  {
      "key": "AM",
      "name": "Armenia",
      "type": "country",
      "country_code": "AM",
      "supports_region": true,
      "supports_city": false
  },
  {
      "key": "AN",
      "name": "Antillas Holandesas",
      "type": "country",
      "country_code": "AN",
      "supports_region": false,
      "supports_city": false
  },
  {
      "key": "AO",
      "name": "Angola",
      "type": "country",
      "country_code": "AO",
      "supports_region": true,
      "supports_city": false
  },
  {
      "key": "AQ",
      "name": "Antártida",
      "type": "country",
      "country_code": "AQ",
      "supports_region": false,
      "supports_city": false
  },
  {
      "key": "AR",
      "name": "Argentina",
      "type": "country",
      "country_code": "AR",
      "supports_region": true,
      "supports_city": true
  },
  {
      "key": "AS",
      "name": "Samoa Americana",
      "type": "country",
      "country_code": "AS",
      "supports_region": true,
      "supports_city": false
  },
  {
      "key": "AT",
      "name": "Austria",
      "type": "country",
      "country_code": "AT",
      "supports_region": true,
      "supports_city": true
  },
  {
      "key": "AU",
      "name": "Australia",
      "type": "country",
      "country_code": "AU",
      "supports_region": true,
      "supports_city": true
  },
  {
      "key": "AW",
      "name": "Aruba",
      "type": "country",
      "country_code": "AW",
      "supports_region": false,
      "supports_city": false
  },
  {
      "key": "AX",
      "name": "Islas de Åland",
      "type": "country",
      "country_code": "AX",
      "supports_region": false,
      "supports_city": false
  },
  {
      "key": "AZ",
      "name": "Azerbaiyán",
      "type": "country",
      "country_code": "AZ",
      "supports_region": true,
      "supports_city": false
  },
  {
      "key": "BA",
      "name": "Bosnia-Herzegovina",
      "type": "country",
      "country_code": "BA",
      "supports_region": false,
      "supports_city": false
  },
  {
      "key": "BB",
      "name": "Barbados",
      "type": "country",
      "country_code": "BB",
      "supports_region": true,
      "supports_city": false
  },
  {
      "key": "BD",
      "name": "Bangladesh",
      "type": "country",
      "country_code": "BD",
      "supports_region": true,
      "supports_city": false
  },
  {
      "key": "BE",
      "name": "Bélgica",
      "type": "country",
      "country_code": "BE",
      "supports_region": true,
      "supports_city": true
  },
  {
      "key": "BF",
      "name": "Burkina Faso",
      "type": "country",
      "country_code": "BF",
      "supports_region": false,
      "supports_city": false
  },
  {
      "key": "BG",
      "name": "Bulgaria",
      "type": "country",
      "country_code": "BG",
      "supports_region": true,
      "supports_city": true
  },
  {
      "key": "BH",
      "name": "Baréin",
      "type": "country",
      "country_code": "BH",
      "supports_region": true,
      "supports_city": false
  },
  {
      "key": "BI",
      "name": "Burundi",
      "type": "country",
      "country_code": "BI",
      "supports_region": true,
      "supports_city": false
  },
  {
    "key": "BJ",
    "name": "Benín",
    "type": "country",
    "country_code": "BJ",
    "supports_region": true,
    "supports_city": false
},
{
    "key": "BL",
    "name": "San Bartolomé",
    "type": "country",
    "country_code": "BL",
    "supports_region": false,
    "supports_city": false
},
{
    "key": "BM",
    "name": "Bermudas",
    "type": "country",
    "country_code": "BM",
    "supports_region": true,
    "supports_city": false
},
{
    "key": "BN",
    "name": "Brunéi",
    "type": "country",
    "country_code": "BN",
    "supports_region": true,
    "supports_city": false
},
{
    "key": "BO",
    "name": "Bolivia",
    "type": "country",
    "country_code": "BO",
    "supports_region": true,
    "supports_city": true
},
{
    "key": "BQ",
    "name": "Bonaire, San Eustaquio y Saba",
    "type": "country",
    "country_code": "BQ",
    "supports_region": false,
    "supports_city": false
},
{
    "key": "BR",
    "name": "Brasil",
    "type": "country",
    "country_code": "BR",
    "supports_region": true,
    "supports_city": true
},
{
    "key": "BS",
    "name": "Bahamas",
    "type": "country",
    "country_code": "BS",
    "supports_region": false,
    "supports_city": false
},
{
    "key": "BT",
    "name": "Bután",
    "type": "country",
    "country_code": "BT",
    "supports_region": true,
    "supports_city": false
},
{
    "key": "BV",
    "name": "Isla Bouvet",
    "type": "country",
    "country_code": "BV",
    "supports_region": false,
    "supports_city": false
},
{
    "key": "BW",
    "name": "Botsuana",
    "type": "country",
    "country_code": "BW",
    "supports_region": true,
    "supports_city": false
},
{
    "key": "BY",
    "name": "Bielorrusia",
    "type": "country",
    "country_code": "BY",
    "supports_region": true,
    "supports_city": false
},
{
    "key": "BZ",
    "name": "Belice",
    "type": "country",
    "country_code": "BZ",
    "supports_region": true,
    "supports_city": false
},
{
    "key": "CA",
    "name": "Canadá",
    "type": "country",
    "country_code": "CA",
    "supports_region": true,
    "supports_city": true
},
{
    "key": "CC",
    "name": "Islas Cocos (Keeling)",
    "type": "country",
    "country_code": "CC",
    "supports_region": false,
    "supports_city": false
},
{
    "key": "CD",
    "name": "República Democrática del Congo",
    "type": "country",
    "country_code": "CD",
    "supports_region": false,
    "supports_city": false
},
{
    "key": "CF",
    "name": "República Centroafricana",
    "type": "country",
    "country_code": "CF",
    "supports_region": false,
    "supports_city": false
},
{
    "key": "CG",
    "name": "República del Congo",
    "type": "country",
    "country_code": "CG",
    "supports_region": true,
    "supports_city": false
},
{
    "key": "CH",
    "name": "Suiza",
    "type": "country",
    "country_code": "CH",
    "supports_region": true,
    "supports_city": true
},
{
    "key": "CI",
    "name": "Costa de Marfil",
    "type": "country",
    "country_code": "CI",
    "supports_region": true,
    "supports_city": false
},
{
    "key": "CK",
    "name": "Islas Cook",
    "type": "country",
    "country_code": "CK",
    "supports_region": true,
    "supports_city": false
},
{
    "key": "CL",
    "name": "Chile",
    "type": "country",
    "country_code": "CL",
    "supports_region": true,
    "supports_city": true
},
{
    "key": "CM",
    "name": "Camerún",
    "type": "country",
    "country_code": "CM",
    "supports_region": true,
    "supports_city": false
},
{
    "key": "CN",
    "name": "China",
    "type": "country",
    "country_code": "CN",
    "supports_region": false,
    "supports_city": false
},
{
    "key": "CO",
    "name": "Colombia",
    "type": "country",
    "country_code": "CO",
    "supports_region": true,
    "supports_city": true
},
{
  "key": "CR",
  "name": "Costa Rica",
  "type": "country",
  "country_code": "CR",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "CV",
  "name": "Cabo Verde",
  "type": "country",
  "country_code": "CV",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "CW",
  "name": "Curazao",
  "type": "country",
  "country_code": "CW",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "CX",
  "name": "Isla de Navidad",
  "type": "country",
  "country_code": "CX",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "CY",
  "name": "Chipre",
  "type": "country",
  "country_code": "CY",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "CZ",
  "name": "República Checa",
  "type": "country",
  "country_code": "CZ",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "DE",
  "name": "Alemania",
  "type": "country",
  "country_code": "DE",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "DJ",
  "name": "Yibuti",
  "type": "country",
  "country_code": "DJ",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "DK",
  "name": "Dinamarca",
  "type": "country",
  "country_code": "DK",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "DM",
  "name": "Dominica",
  "type": "country",
  "country_code": "DM",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "DO",
  "name": "República Dominicana",
  "type": "country",
  "country_code": "DO",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "DZ",
  "name": "Argelia",
  "type": "country",
  "country_code": "DZ",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "EC",
  "name": "Ecuador",
  "type": "country",
  "country_code": "EC",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "EE",
  "name": "Estonia",
  "type": "country",
  "country_code": "EE",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "EG",
  "name": "Egipto",
  "type": "country",
  "country_code": "EG",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "EH",
  "name": "Sahara Occidental",
  "type": "country",
  "country_code": "EH",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "ER",
  "name": "Eritrea",
  "type": "country",
  "country_code": "ER",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "ES",
  "name": "España",
  "type": "country",
  "country_code": "ES",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "ET",
  "name": "Etiopía",
  "type": "country",
  "country_code": "ET",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "FI",
  "name": "Finlandia",
  "type": "country",
  "country_code": "FI",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "FJ",
  "name": "Fiyi",
  "type": "country",
  "country_code": "FJ",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "FK",
  "name": "Islas Malvinas",
  "type": "country",
  "country_code": "FK",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "FM",
  "name": "Estados Federados de Micronesia",
  "type": "country",
  "country_code": "FM",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "FO",
  "name": "Islas Feroe",
  "type": "country",
  "country_code": "FO",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "FR",
  "name": "Francia",
  "type": "country",
  "country_code": "FR",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "GA",
  "name": "Gabón",
  "type": "country",
  "country_code": "GA",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "GB",
  "name": "Reino Unido",
  "type": "country",
  "country_code": "GB",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "GD",
  "name": "Granada",
  "type": "country",
  "country_code": "GD",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "GE",
  "name": "Georgia",
  "type": "country",
  "country_code": "GE",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "GF",
  "name": "Guayana Francesa",
  "type": "country",
  "country_code": "GF",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "GG",
  "name": "Guernsey",
  "type": "country",
  "country_code": "GG",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "GH",
  "name": "Ghana",
  "type": "country",
  "country_code": "GH",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "GI",
  "name": "Gibraltar",
  "type": "country",
  "country_code": "GI",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "GL",
  "name": "Groenlandia",
  "type": "country",
  "country_code": "GL",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "GM",
  "name": "Gambia",
  "type": "country",
  "country_code": "GM",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "GN",
  "name": "Guinea",
  "type": "country",
  "country_code": "GN",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "GP",
  "name": "Guadalupe",
  "type": "country",
  "country_code": "GP",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "GQ",
  "name": "Guinea Ecuatorial",
  "type": "country",
  "country_code": "GQ",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "GR",
  "name": "Grecia",
  "type": "country",
  "country_code": "GR",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "GS",
  "name": "Islas Georgia del Sur y Sandwich del Sur",
  "type": "country",
  "country_code": "GS",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "GT",
  "name": "Guatemala",
  "type": "country",
  "country_code": "GT",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "GU",
  "name": "Guam",
  "type": "country",
  "country_code": "GU",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "GW",
  "name": "Guinea-Bisáu",
  "type": "country",
  "country_code": "GW",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "GY",
  "name": "Guyana",
  "type": "country",
  "country_code": "GY",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "HK",
  "name": "Hong Kong",
  "type": "country",
  "country_code": "HK",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "HM",
  "name": "Islas Heard y McDonald",
  "type": "country",
  "country_code": "HM",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "HN",
  "name": "Honduras",
  "type": "country",
  "country_code": "HN",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "HR",
  "name": "Croacia",
  "type": "country",
  "country_code": "HR",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "HT",
  "name": "Haití",
  "type": "country",
  "country_code": "HT",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "HU",
  "name": "Hungría",
  "type": "country",
  "country_code": "HU",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "ID",
  "name": "Indonesia",
  "type": "country",
  "country_code": "ID",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "IE",
  "name": "Irlanda",
  "type": "country",
  "country_code": "IE",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "IL",
  "name": "Israel",
  "type": "country",
  "country_code": "IL",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "IM",
  "name": "Isla de Man",
  "type": "country",
  "country_code": "IM",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "IN",
  "name": "India",
  "type": "country",
  "country_code": "IN",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "IO",
  "name": "Territorio Británico del Océano Índico",
  "type": "country",
  "country_code": "IO",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "IQ",
  "name": "Iraq",
  "type": "country",
  "country_code": "IQ",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "IS",
  "name": "Islandia",
  "type": "country",
  "country_code": "IS",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "IT",
  "name": "Italia",
  "type": "country",
  "country_code": "IT",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "JE",
  "name": "Jersey",
  "type": "country",
  "country_code": "JE",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "JM",
  "name": "Jamaica",
  "type": "country",
  "country_code": "JM",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "JO",
  "name": "Jordania",
  "type": "country",
  "country_code": "JO",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "JP",
  "name": "Japón",
  "type": "country",
  "country_code": "JP",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "KE",
  "name": "Kenia",
  "type": "country",
  "country_code": "KE",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "KG",
  "name": "Kirguistán",
  "type": "country",
  "country_code": "KG",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "KH",
  "name": "Camboya",
  "type": "country",
  "country_code": "KH",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "KI",
  "name": "Kiribati",
  "type": "country",
  "country_code": "KI",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "KM",
  "name": "Comoras",
  "type": "country",
  "country_code": "KM",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "KN",
  "name": "San Cristóbal y Nieves",
  "type": "country",
  "country_code": "KN",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "KR",
  "name": "Corea del Sur",
  "type": "country",
  "country_code": "KR",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "KW",
  "name": "Kuwait",
  "type": "country",
  "country_code": "KW",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "KY",
  "name": "Islas Caimán",
  "type": "country",
  "country_code": "KY",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "KZ",
  "name": "Kazajistán",
  "type": "country",
  "country_code": "KZ",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "LA",
  "name": "Laos",
  "type": "country",
  "country_code": "LA",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "LB",
  "name": "Líbano",
  "type": "country",
  "country_code": "LB",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "LC",
  "name": "Santa Lucía",
  "type": "country",
  "country_code": "LC",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "LI",
  "name": "Liechtenstein",
  "type": "country",
  "country_code": "LI",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "LK",
  "name": "Sri Lanka",
  "type": "country",
  "country_code": "LK",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "LR",
  "name": "Liberia",
  "type": "country",
  "country_code": "LR",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "LS",
  "name": "Lesoto",
  "type": "country",
  "country_code": "LS",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "LT",
  "name": "Lituania",
  "type": "country",
  "country_code": "LT",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "LU",
  "name": "Luxemburgo",
  "type": "country",
  "country_code": "LU",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "LV",
  "name": "Letonia",
  "type": "country",
  "country_code": "LV",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "LY",
  "name": "Libia",
  "type": "country",
  "country_code": "LY",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "MA",
  "name": "Marruecos",
  "type": "country",
  "country_code": "MA",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "MC",
  "name": "Mónaco",
  "type": "country",
  "country_code": "MC",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "MD",
  "name": "Moldavia",
  "type": "country",
  "country_code": "MD",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "ME",
  "name": "Montenegro",
  "type": "country",
  "country_code": "ME",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "MF",
  "name": "San Martín",
  "type": "country",
  "country_code": "MF",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "MG",
  "name": "Madagascar",
  "type": "country",
  "country_code": "MG",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "MH",
  "name": "Islas Marshall",
  "type": "country",
  "country_code": "MH",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "MK",
  "name": "Macedonia",
  "type": "country",
  "country_code": "MK",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "ML",
  "name": "Mali",
  "type": "country",
  "country_code": "ML",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "MM",
  "name": "Myanmar",
  "type": "country",
  "country_code": "MM",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "MN",
  "name": "Mongolia",
  "type": "country",
  "country_code": "MN",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "MO",
  "name": "Macao",
  "type": "country",
  "country_code": "MO",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "MP",
  "name": "Islas Marianas del Norte",
  "type": "country",
  "country_code": "MP",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "MQ",
  "name": "Martinica",
  "type": "country",
  "country_code": "MQ",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "MR",
  "name": "Mauritania",
  "type": "country",
  "country_code": "MR",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "MS",
  "name": "Montserrat",
  "type": "country",
  "country_code": "MS",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "MT",
  "name": "Malta",
  "type": "country",
  "country_code": "MT",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "MU",
  "name": "Mauricio",
  "type": "country",
  "country_code": "MU",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "MV",
  "name": "Maldivas",
  "type": "country",
  "country_code": "MV",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "MW",
  "name": "Malaui",
  "type": "country",
  "country_code": "MW",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "MX",
  "name": "México",
  "type": "country",
  "country_code": "MX",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "MY",
  "name": "Malasia",
  "type": "country",
  "country_code": "MY",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "MZ",
  "name": "Mozambique",
  "type": "country",
  "country_code": "MZ",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "NA",
  "name": "Namibia",
  "type": "country",
  "country_code": "NA",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "NC",
  "name": "Nueva Caledonia",
  "type": "country",
  "country_code": "NC",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "NE",
  "name": "Níger",
  "type": "country",
  "country_code": "NE",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "NF",
  "name": "Isla Norfolk",
  "type": "country",
  "country_code": "NF",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "NG",
  "name": "Nigeria",
  "type": "country",
  "country_code": "NG",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "NI",
  "name": "Nicaragua",
  "type": "country",
  "country_code": "NI",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "NL",
  "name": "Países Bajos",
  "type": "country",
  "country_code": "NL",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "NO",
  "name": "Noruega",
  "type": "country",
  "country_code": "NO",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "NP",
  "name": "Nepal",
  "type": "country",
  "country_code": "NP",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "NR",
  "name": "Nauru",
  "type": "country",
  "country_code": "NR",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "NU",
  "name": "Niue",
  "type": "country",
  "country_code": "NU",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "NZ",
  "name": "Nueva Zelanda",
  "type": "country",
  "country_code": "NZ",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "OM",
  "name": "Omán",
  "type": "country",
  "country_code": "OM",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "PA",
  "name": "Panamá",
  "type": "country",
  "country_code": "PA",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "PE",
  "name": "Perú",
  "type": "country",
  "country_code": "PE",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "PF",
  "name": "Polinesia Francesa",
  "type": "country",
  "country_code": "PF",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "PG",
  "name": "Papúa Nueva Guinea",
  "type": "country",
  "country_code": "PG",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "PH",
  "name": "Filipinas",
  "type": "country",
  "country_code": "PH",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "PK",
  "name": "Pakistán",
  "type": "country",
  "country_code": "PK",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "PL",
  "name": "Polonia",
  "type": "country",
  "country_code": "PL",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "PM",
  "name": "San Pedro y Miquelón",
  "type": "country",
  "country_code": "PM",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "PN",
  "name": "Islas Pitcairn",
  "type": "country",
  "country_code": "PN",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "PR",
  "name": "Puerto Rico",
  "type": "country",
  "country_code": "PR",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "PS",
  "name": "Palestina",
  "type": "country",
  "country_code": "PS",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "PT",
  "name": "Portugal",
  "type": "country",
  "country_code": "PT",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "PW",
  "name": "Palaos",
  "type": "country",
  "country_code": "PW",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "PY",
  "name": "Paraguay",
  "type": "country",
  "country_code": "PY",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "QA",
  "name": "Qatar",
  "type": "country",
  "country_code": "QA",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "RE",
  "name": "Reunión",
  "type": "country",
  "country_code": "RE",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "RO",
  "name": "Rumania",
  "type": "country",
  "country_code": "RO",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "RS",
  "name": "Serbia",
  "type": "country",
  "country_code": "RS",
  "supports_region": false,
  "supports_city": true
},
{
  "key": "RU",
  "name": "Rusia",
  "type": "country",
  "country_code": "RU",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "RW",
  "name": "Ruanda",
  "type": "country",
  "country_code": "RW",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "SA",
  "name": "Arabia Saudita",
  "type": "country",
  "country_code": "SA",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "SB",
  "name": "Islas Salomón",
  "type": "country",
  "country_code": "SB",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "SC",
  "name": "Seychelles",
  "type": "country",
  "country_code": "SC",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "SE",
  "name": "Suecia",
  "type": "country",
  "country_code": "SE",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "SG",
  "name": "Singapur",
  "type": "country",
  "country_code": "SG",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "SH",
  "name": "Santa Elena",
  "type": "country",
  "country_code": "SH",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "SI",
  "name": "Eslovenia",
  "type": "country",
  "country_code": "SI",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "SJ",
  "name": "Svalbard y Jan Mayen",
  "type": "country",
  "country_code": "SJ",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "SK",
  "name": "Eslovaquia",
  "type": "country",
  "country_code": "SK",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "SL",
  "name": "Sierra Leona",
  "type": "country",
  "country_code": "SL",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "SM",
  "name": "San Marino",
  "type": "country",
  "country_code": "SM",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "SN",
  "name": "Senegal",
  "type": "country",
  "country_code": "SN",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "SO",
  "name": "Somalia",
  "type": "country",
  "country_code": "SO",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "SR",
  "name": "Surinam",
  "type": "country",
  "country_code": "SR",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "SS",
  "name": "Sudán del Sur",
  "type": "country",
  "country_code": "SS",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "ST",
  "name": "Santo Tomé y Príncipe",
  "type": "country",
  "country_code": "ST",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "SV",
  "name": "El Salvador",
  "type": "country",
  "country_code": "SV",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "SX",
  "name": "Sint Maarten",
  "type": "country",
  "country_code": "SX",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "SZ",
  "name": "Suazilandia",
  "type": "country",
  "country_code": "SZ",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "TC",
  "name": "Islas Turcas y Caicos",
  "type": "country",
  "country_code": "TC",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "TD",
  "name": "Chad",
  "type": "country",
  "country_code": "TD",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "TF",
  "name": "Territorios meridionales franceses",
  "type": "country",
  "country_code": "TF",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "TG",
  "name": "Togo",
  "type": "country",
  "country_code": "TG",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "TH",
  "name": "Tailandia",
  "type": "country",
  "country_code": "TH",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "TJ",
  "name": "Tayikistán",
  "type": "country",
  "country_code": "TJ",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "TK",
  "name": "Tokelau",
  "type": "country",
  "country_code": "TK",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "TL",
  "name": "Timor Oriental",
  "type": "country",
  "country_code": "TL",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "TM",
  "name": "Turkmenistán",
  "type": "country",
  "country_code": "TM",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "TN",
  "name": "Túnez",
  "type": "country",
  "country_code": "TN",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "TO",
  "name": "Tonga",
  "type": "country",
  "country_code": "TO",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "TR",
  "name": "Turquía",
  "type": "country",
  "country_code": "TR",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "TT",
  "name": "Trinidad y Tobago",
  "type": "country",
  "country_code": "TT",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "TV",
  "name": "Tuvalu",
  "type": "country",
  "country_code": "TV",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "TW",
  "name": "Taiwán",
  "type": "country",
  "country_code": "TW",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "TZ",
  "name": "Tanzania",
  "type": "country",
  "country_code": "TZ",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "UA",
  "name": "Ucrania",
  "type": "country",
  "country_code": "UA",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "UG",
  "name": "Uganda",
  "type": "country",
  "country_code": "UG",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "UM",
  "name": "Islas Ultramarinas Menores de los Estados Unidos",
  "type": "country",
  "country_code": "UM",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "US",
  "name": "Estados Unidos",
  "type": "country",
  "country_code": "US",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "UY",
  "name": "Uruguay",
  "type": "country",
  "country_code": "UY",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "UZ",
  "name": "Uzbekistán",
  "type": "country",
  "country_code": "UZ",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "VA",
  "name": "Ciudad del Vaticano",
  "type": "country",
  "country_code": "VA",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "VC",
  "name": "San Vicente y las Granadinas",
  "type": "country",
  "country_code": "VC",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "VE",
  "name": "Venezuela",
  "type": "country",
  "country_code": "VE",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "VG",
  "name": "Islas Vírgenes Británicas",
  "type": "country",
  "country_code": "VG",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "VI",
  "name": "Islas Vírgenes de los Estados Unidos",
  "type": "country",
  "country_code": "VI",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "VN",
  "name": "Vietnam",
  "type": "country",
  "country_code": "VN",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "VU",
  "name": "Vanuatu",
  "type": "country",
  "country_code": "VU",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "WF",
  "name": "Wallis y Futuna",
  "type": "country",
  "country_code": "WF",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "WS",
  "name": "Samoa",
  "type": "country",
  "country_code": "WS",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "XK",
  "name": "Kosovo",
  "type": "country",
  "country_code": "XK",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "YE",
  "name": "Yemen",
  "type": "country",
  "country_code": "YE",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "YT",
  "name": "Mayotte",
  "type": "country",
  "country_code": "YT",
  "supports_region": false,
  "supports_city": false
},
{
  "key": "ZA",
  "name": "Sudáfrica",
  "type": "country",
  "country_code": "ZA",
  "supports_region": true,
  "supports_city": true
},
{
  "key": "ZM",
  "name": "Zambia",
  "type": "country",
  "country_code": "ZM",
  "supports_region": true,
  "supports_city": false
},
{
  "key": "ZW",
  "name": "Zimbabue",
  "type": "country",
  "country_code": "ZW",
  "supports_region": true,
  "supports_city": false
},
]

function upsertCountries(cb) {
  let catalog = {
    type: "country",
    catalog : countries,
  }

  FacebookCatalog
    .findOneAndUpdate({ type: "country" }, catalog, { upsert: true, new: true })
    .exec((err, result) => {
      if (err) {
        console.log(err);
      }
      else{
        console.log('Catalogo países importado');
      }
      
    });
}

module.exports = {
  upsertCountries,
}

