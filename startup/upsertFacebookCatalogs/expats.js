const FacebookCatalog = require('../../models/facebook_catalog');

var expats = [
        
  {
      "id": "6015559470583",
      "name": "Vive en el extranjero",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vive en el extranjero"
      ],
      "description": "Personas que viven fuera de su país de origen",
      "audience_size": 153294142,
      "real_time_cluster": false
  },
  {
      "id": "6016916298983",
      "name": "Vivieron en India (anteriormente expatriados - India)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en India (anteriormente expatriados - India)"
      ],
      "description": "Personas que vivían en la India y ahora viven en el extranjero",
      "audience_size": 9251374,
      "real_time_cluster": false
  },
  
  {
      "id": "6018796980983",
      "name": "Vivieron en Kenia (anteriormente expatriados - Kenia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Kenia (anteriormente expatriados - Kenia)"
      ],
      "description": "Personas que vivían en Kenia y ahora viven en el extranjero",
      "audience_size": 666249,
      "real_time_cluster": false
  },
  {
      "id": "6018797004183",
      "name": "Vivieron en Nigeria (anteriormente expatriados - Nigeria)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Nigeria (anteriormente expatriados - Nigeria)"
      ],
      "description": "Personas que vivían en Nigeria y ahora viven en el extranjero",
      "audience_size": 1461164,
      "real_time_cluster": false
  },
  {
      "id": "6018797036783",
      "name": "Vivieron en Camerún (anteriormente expatriados - Camerún)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Camerún (anteriormente expatriados - Camerún)"
      ],
      "description": "Personas que vivían en Camerún y ahora viven en el extranjero",
      "audience_size": 372238,
      "real_time_cluster": false
  },
  {
      "id": "6018797091183",
      "name": "Vivieron en Filipinas (anteriormente expatriados - Filipinas)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Filipinas (anteriormente expatriados - Filipinas)"
      ],
      "description": "Personas que vivían en Filipinas y ahora viven en el extranjero",
      "audience_size": 7124430,
      "real_time_cluster": false
  },
  {
      "id": "6018797127383",
      "name": "Vivieron en Cuba (anteriormente expatriados - Cuba)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Cuba (anteriormente expatriados - Cuba)"
      ],
      "description": "Personas que vivían en Cuba y ahora viven en el extranjero",
      "audience_size": 1152196,
      "real_time_cluster": false
  },
  {
      "id": "6018797165983",
      "name": "Vivieron en Etiopía (anteriormente expatriados - Etiopía)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Etiopía (anteriormente expatriados - Etiopía)"
      ],
      "description": "Personas que vivían en Etiopía y ahora viven en el extranjero",
      "audience_size": 830323,
      "real_time_cluster": false
  },
  {
      "id": "6018797373783",
      "name": "Vivieron en Haití (anteriormente expatriados - Haití)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Haití (anteriormente expatriados - Haití)"
      ],
      "description": "Personas que vivían en Haití y ahora viven en el extranjero",
      "audience_size": 951044,
      "real_time_cluster": false
  },
  {
      "id": "6019366943583",
      "name": "Vivieron en España (anteriormente expatriados - España)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en España (anteriormente expatriados - España)"
      ],
      "description": "Personas que vivían en España y ahora viven en el extranjero",
      "audience_size": 1495858,
      "real_time_cluster": false
  },
  {
      "id": "6019367014383",
      "name": "Vivieron en Francia (anteriormente expatriados - Francia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Francia (anteriormente expatriados - Francia)"
      ],
      "description": "Personas que vivían en Francia y ahora viven en el extranjero",
      "audience_size": 2667048,
      "real_time_cluster": false
  },
  {
      "id": "6019367052983",
      "name": "Vivieron en Alemania (anteriormente expatriados - Alemania)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Alemania (anteriormente expatriados - Alemania)"
      ],
      "description": "Personas que vivían en Alemania y ahora viven en el extranjero",
      "audience_size": 1247940,
      "real_time_cluster": false
  },
  {
      "id": "6019377644783",
      "name": "Vivieron en Suiza (anteriormente expatriados - Suiza)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Suiza (anteriormente expatriados - Suiza)"
      ],
      "description": "Personas que vivían en Suiza y ahora viven en el extranjero",
      "audience_size": 250069,
      "real_time_cluster": false
  },
  {
      "id": "6019396649183",
      "name": "Vivieron en Estados Unidos (anteriormente expatriados - Estados Unidos)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Estados Unidos (anteriormente expatriados - Estados Unidos)"
      ],
      "description": "Personas que vivían en los Estados Unidos y ahora viven en el extranjero",
      "audience_size": 10014297,
      "real_time_cluster": false
  },
  {
      "id": "6019396657183",
      "name": "Vivieron en Polonia (anteriormente expatriados - Polonia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Polonia (anteriormente expatriados - Polonia)"
      ],
      "description": "Personas que vivían en Polonia y ahora viven en el extranjero",
      "audience_size": 1503835,
      "real_time_cluster": false
  },
  {
      "id": "6019396654583",
      "name": "Vivieron en Italia (anteriormente expatriados - Italia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Italia (anteriormente expatriados - Italia)"
      ],
      "description": "Personas que vivían en Italia y ahora viven en el extranjero",
      "audience_size": 1652225,
      "real_time_cluster": false
  },
  {
      "id": "6019396650783",
      "name": "Vivieron en Irlanda (anteriormente expatriados - Irlanda)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Irlanda (anteriormente expatriados - Irlanda)"
      ],
      "description": "Personas que vivían en Irlanda y ahora viven en el extranjero",
      "audience_size": 293576,
      "real_time_cluster": false
  },
  {
      "id": "6019396638383",
      "name": "Vivieron en Hungría (anteriormente expatriados - Hungría)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Hungría (anteriormente expatriados - Hungría)"
      ],
      "description": "Personas que vivían en Hungría y ahora viven en el extranjero",
      "audience_size": 318965,
      "real_time_cluster": false
  },
  {
      "id": "6019396764183",
      "name": "Vivieron en Canadá (anteriormente expatriados - Canadá)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Canadá (anteriormente expatriados - Canadá)"
      ],
      "description": "Personas que vivían en Canadá y ahora viven en el extranjero",
      "audience_size": 915018,
      "real_time_cluster": false
  },
  {
      "id": "6019452369983",
      "name": "Vivieron en China (anteriormente expatriados - China)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en China (anteriormente expatriados - China)"
      ],
      "description": "Personas que vivían en China y ahora viven en el extranjero",
      "audience_size": 1893756,
      "real_time_cluster": false
  },
  {
      "id": "6019520122583",
      "name": "Vivieron en Puerto Rico (anteriormente expatriados - Puerto Rico)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Puerto Rico (anteriormente expatriados - Puerto Rico)"
      ],
      "description": "Personas que vivían en Puerto Rico y ahora viven en el extranjero",
      "audience_size": 1156889,
      "real_time_cluster": false
  },
  {
      "id": "6019564340583",
      "name": "Vivieron en Brasil (anteriormente expatriados - Brasil)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Brasil (anteriormente expatriados - Brasil)"
      ],
      "description": "Personas que vivían en Brasil y ahora viven en el extranjero",
      "audience_size": 2863058,
      "real_time_cluster": false
  },
  {
      "id": "6019564344583",
      "name": "Vivieron en Indonesia (anteriormente expatriados - Indonesia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Indonesia (anteriormente expatriados - Indonesia)"
      ],
      "description": "Personas que vivían en Indonesia y ahora viven en el extranjero",
      "audience_size": 2740786,
      "real_time_cluster": false
  },
  {
      "id": "6019564383383",
      "name": "Vivieron en Sudáfrica (anteriormente expatriados - Sudáfrica)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Sudáfrica (anteriormente expatriados - Sudáfrica)"
      ],
      "description": "Personas que vivían en Sudáfrica y ahora viven en el extranjero",
      "audience_size": 836374,
      "real_time_cluster": false
  },
  {
      "id": "6019673233983",
      "name": "Vivieron en Zimbabue (anteriormente expatriados - Zimbabue)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Zimbabue (anteriormente expatriados - Zimbabue)"
      ],
      "description": "Personas que vivían en Zimbabue y ahora viven en el extranjero",
      "audience_size": 942554,
      "real_time_cluster": false
  },
  {
      "id": "6019673448383",
      "name": "Vivieron en Ghana (anteriormente expatriados - Ghana)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Ghana (anteriormente expatriados - Ghana)"
      ],
      "description": "Personas que vivían en Ghana y ahora viven en el extranjero",
      "audience_size": 549655,
      "real_time_cluster": false
  },
  {
      "id": "6019673501783",
      "name": "Vivieron en Uganda (anteriormente expatriados - Uganda)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Uganda (anteriormente expatriados - Uganda)"
      ],
      "description": "Personas que vivían en Uganda y ahora viven en el extranjero",
      "audience_size": 352551,
      "real_time_cluster": false
  },
  {
      "id": "6019673525983",
      "name": "Vivieron en Colombia (anteriormente expatriados - Colombia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Colombia (anteriormente expatriados - Colombia)"
      ],
      "description": "Personas que vivían en Colombia y ahora viven en el extranjero",
      "audience_size": 2047799,
      "real_time_cluster": false
  },
  {
      "id": "6019673762183",
      "name": "Vivieron en la República Dominicana (anteriormente expatriados - República Dominicana)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en la República Dominicana (anteriormente expatriados - República Dominicana)"
      ],
      "description": "Personas que vivían en la República Dominicana y ahora viven en el extranjero",
      "audience_size": 1216468,
      "real_time_cluster": false
  },
  {
      "id": "6019673777983",
      "name": "Vivieron en El Salvador (anteriormente expatriados - El Salvador)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en El Salvador (anteriormente expatriados - El Salvador)"
      ],
      "description": "Personas que vivían en El Salvador y ahora viven en el extranjero",
      "audience_size": 1258203,
      "real_time_cluster": false
  },
  {
      "id": "6019673808383",
      "name": "Vivieron en Guatemala (anteriormente expatriados - Guatemala)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Guatemala (anteriormente expatriados - Guatemala)"
      ],
      "description": "Personas que vivían en Guatemala y ahora viven en el extranjero",
      "audience_size": 1305154,
      "real_time_cluster": false
  },
  {
      "id": "6021354152983",
      "name": "Vivieron en Reino Unido (anteriormente expatriados - Reino Unido)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Reino Unido (anteriormente expatriados - Reino Unido)"
      ],
      "description": "Personas que vivían en el Reino Unido y ahora viven en el extranjero",
      "audience_size": 3065945,
      "real_time_cluster": false
  },
  {
      "id": "6021354857783",
      "name": "Vivieron en Australia (anteriormente expatriados - Australia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Australia (anteriormente expatriados - Australia)"
      ],
      "description": "Personas que vivían en Australia y ahora viven en el extranjero",
      "audience_size": 867990,
      "real_time_cluster": false
  },
  {
      "id": "6021354882783",
      "name": "Vivieron en Portugal (anteriormente expatriados - Portugal)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Portugal (anteriormente expatriados - Portugal)"
      ],
      "description": "Personas que vivían en Portugal y ahora viven en el extranjero",
      "audience_size": 1034017,
      "real_time_cluster": false
  },
  {
      "id": "6023287351383",
      "name": "Vivieron en Estonia (anteriormente expatriados - Estonia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Estonia (anteriormente expatriados - Estonia)"
      ],
      "description": "Personas que vivían en Estonia y ahora viven en el extranjero",
      "audience_size": 62912,
      "real_time_cluster": false
  },
  {
      "id": "6023287459983",
      "name": "Vivieron en Noruega (anteriormente expatriados - Noruega)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Noruega (anteriormente expatriados - Noruega)"
      ],
      "description": "Personas que vivían en Noruega y ahora viven en el extranjero",
      "audience_size": 155447,
      "real_time_cluster": false
  },
  {
      "id": "6023287455983",
      "name": "Vivieron en Dinamarca (anteriormente expatriados - Dinamarca)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Dinamarca (anteriormente expatriados - Dinamarca)"
      ],
      "description": "Personas que vivían en Dinamarca y ahora viven en el extranjero",
      "audience_size": 105966,
      "real_time_cluster": false
  },
  {
      "id": "6023287438783",
      "name": "Vivieron en la República Checa (anteriormente expatriados - República Checa)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en la República Checa (anteriormente expatriados - República Checa)"
      ],
      "description": "Personas que vivían en la República Checa y ahora viven en el extranjero",
      "audience_size": 206116,
      "real_time_cluster": false
  },
  {
      "id": "6023287397383",
      "name": "Vivieron en Suecia (anteriormente expatriados - Suecia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Suecia (anteriormente expatriados - Suecia)"
      ],
      "description": "Personas que vivían en Suecia y ahora viven en el extranjero",
      "audience_size": 241266,
      "real_time_cluster": false
  },
  {
      "id": "6023287393783",
      "name": "Vivieron en Países Bajos (anteriormente expatriados - Países Bajos)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Países Bajos (anteriormente expatriados - Países Bajos)"
      ],
      "description": "Personas que vivían en los Países Bajos y ahora viven en el extranjero",
      "audience_size": 336428,
      "real_time_cluster": false
  },
  {
      "id": "6023356562783",
      "name": "Vivieron en Bangladesh (anteriormente expatriados - Bangladesh)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Bangladesh (anteriormente expatriados - Bangladesh)"
      ],
      "description": "Personas que vivían en Bangladesh y ahora viven en el extranjero",
      "audience_size": 3925988,
      "real_time_cluster": false
  },
  {
      "id": "6023356926183",
      "name": "Vivieron en Tanzania (anteriormente expatriados - Tanzania)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Tanzania (anteriormente expatriados - Tanzania)"
      ],
      "description": "Personas que vivían en Tanzania y ahora viven en el extranjero",
      "audience_size": 326212,
      "real_time_cluster": false
  },
  {
      "id": "6023356955383",
      "name": "Vivieron en Nepal (anteriormente expatriados - Nepal)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Nepal (anteriormente expatriados - Nepal)"
      ],
      "description": "Personas que vivían en Nepal y ahora viven en el extranjero",
      "audience_size": 2017188,
      "real_time_cluster": false
  },
  {
      "id": "6023356956983",
      "name": "Vivieron en Jamaica (anteriormente expatriados - Jamaica)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Jamaica (anteriormente expatriados - Jamaica)"
      ],
      "description": "Personas que vivían en Jamaica y ahora viven en el extranjero",
      "audience_size": 631660,
      "real_time_cluster": false
  },
  {
      "id": "6023356966183",
      "name": "Vivieron en Tailandia (anteriormente expatriados - Tailandia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Tailandia (anteriormente expatriados - Tailandia)"
      ],
      "description": "Personas que vivían en Tailandia y ahora viven en el extranjero",
      "audience_size": 1657704,
      "real_time_cluster": false
  },
  {
      "id": "6023356986383",
      "name": "Vivieron en Sierra Leona (anteriormente expatriados - Sierra Leona)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Sierra Leona (anteriormente expatriados - Sierra Leona)"
      ],
      "description": "Personas que vivían en Sierra Leona y ahora viven en el extranjero",
      "audience_size": 126820,
      "real_time_cluster": false
  },
  {
      "id": "6023357000583",
      "name": "Vivieron en Senegal (anteriormente expatriados - Senegal)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Senegal (anteriormente expatriados - Senegal)"
      ],
      "description": "Personas que vivían en Senegal y ahora viven en el extranjero",
      "audience_size": 401338,
      "real_time_cluster": false
  },
  {
      "id": "6023422105983",
      "name": "Vivieron en Costa de Marfil (anteriormente expatriados - Costa de Marfil)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Costa de Marfil (anteriormente expatriados - Costa de Marfil)"
      ],
      "description": "Personas que vivían en Costa de Marfil y ahora viven en el extranjero",
      "audience_size": 415617,
      "real_time_cluster": false
  },
  {
      "id": "6023516315983",
      "name": "Vivieron en Sri Lanka (anteriormente expatriados - Sri Lanka)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Sri Lanka (anteriormente expatriados - Sri Lanka)"
      ],
      "description": "Personas que vivían en Sri Lanka y ahora viven en el extranjero",
      "audience_size": 747857,
      "real_time_cluster": false
  },
  {
      "id": "6023516338783",
      "name": "Vivieron en Marruecos (anteriormente expatriados - Marruecos)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Marruecos (anteriormente expatriados - Marruecos)"
      ],
      "description": "Personas que vivían en Marruecos y ahora viven en el extranjero",
      "audience_size": 1461320,
      "real_time_cluster": false
  },
  {
      "id": "6023516430783",
      "name": "Vivieron en Emiratos Árabes Unidos (anteriormente expatriados - Emiratos Árabes Unidos)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Emiratos Árabes Unidos (anteriormente expatriados - Emiratos Árabes Unidos)"
      ],
      "description": "Personas que vivían en los Emiratos Árabes Unidos y ahora viven en el extranjero",
      "audience_size": 1190891,
      "real_time_cluster": false
  },
  {
      "id": "6023516368383",
      "name": "Vivieron en Nueva Zelanda (anteriormente expatriados - Nueva Zelanda)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Nueva Zelanda (anteriormente expatriados - Nueva Zelanda)"
      ],
      "description": "Personas que vivían en Nueva Zelanda y ahora viven en el extranjero",
      "audience_size": 398316,
      "real_time_cluster": false
  },
  {
      "id": "6023516373983",
      "name": "Vivieron en la República Democrática del Congo (anteriormente expatriados - República Democrática del Congo)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en la República Democrática del Congo (anteriormente expatriados - República Democrática del Congo)"
      ],
      "description": "Personas que vivían en la República Democrática del Congo y ahora viven en el extranjero",
      "audience_size": 1389738,
      "real_time_cluster": false
  },
  {
      "id": "6023516403783",
      "name": "Vivieron en Singapur (anteriormente expatriados - Singapur)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Singapur (anteriormente expatriados - Singapur)"
      ],
      "description": "Personas que vivían en Singapur y ahora viven en el extranjero",
      "audience_size": 269263,
      "real_time_cluster": false
  },
  {
      "id": "6023620475783",
      "name": "Vivieron en Estados Unidos (anteriormente expatriados - Estados Unidos)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Estados Unidos (anteriormente expatriados - Estados Unidos)"
      ],
      "description": "Personas que vivían en los Estados Unidos y ahora viven en el extranjero",
      "audience_size": 8084371,
      "real_time_cluster": false
  },
  {
      "id": "6023675997383",
      "name": "Vivieron en Austria (anteriormente expatriados - Austria)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Austria (anteriormente expatriados - Austria)"
      ],
      "description": "Personas que vivían en Austria y ahora viven en el extranjero",
      "audience_size": 145616,
      "real_time_cluster": false
  },
  {
      "id": "6023676002183",
      "name": "Vivieron en Chipre (anteriormente expatriados - Chipre)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Chipre (anteriormente expatriados - Chipre)"
      ],
      "description": "Personas que vivían en Chipre y ahora viven en el extranjero",
      "audience_size": 84560,
      "real_time_cluster": false
  },
  {
      "id": "6068209522983",
      "name": "Vivieron en Finlandia (anteriormente expatriados - Finlandia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Finlandia (anteriormente expatriados - Finlandia)"
      ],
      "description": "Personas que vivían en Finlandia y ahora viven en el extranjero",
      "audience_size": 98937,
      "real_time_cluster": false
  },
  {
      "id": "6023676017583",
      "name": "Vivieron en Grecia (anteriormente expatriados - Grecia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Grecia (anteriormente expatriados - Grecia)"
      ],
      "description": "Personas que vivían en Grecia y ahora viven en el extranjero",
      "audience_size": 5758,
      "real_time_cluster": false
  },
  {
      "id": "6023676022783",
      "name": "Vivieron en Hong Kong (anteriormente expatriados - Hong Kong)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Hong Kong (anteriormente expatriados - Hong Kong)"
      ],
      "description": "Personas que vivían en Hong Kong y ahora viven en el extranjero",
      "audience_size": 540789,
      "real_time_cluster": false
  },
  {
      "id": "6023676028783",
      "name": "Vivieron en Japón (anteriormente expatriados - Japón)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Japón (anteriormente expatriados - Japón)"
      ],
      "description": "Personas que vivían en Japón y ahora viven en el extranjero",
      "audience_size": 1086103,
      "real_time_cluster": false
  },
  {
      "id": "6068613839383",
      "name": "Vivieron en Letonia (anteriormente expatriados - Letonia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Letonia (anteriormente expatriados - Letonia)"
      ],
      "description": "Personas que vivían en Letonia y ahora viven en el extranjero",
      "audience_size": 169490,
      "real_time_cluster": false
  },
  {
      "id": "6023676039183",
      "name": "Vivieron en Lituania (anteriormente expatriados - Lituania)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Lituania (anteriormente expatriados - Lituania)"
      ],
      "description": "Personas que vivían en Lituania y ahora viven en el extranjero",
      "audience_size": 290865,
      "real_time_cluster": false
  },
  {
      "id": "6023676044383",
      "name": "Vivieron en Luxemburgo (anteriormente expatriados - Luxemburgo)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Luxemburgo (anteriormente expatriados - Luxemburgo)"
      ],
      "description": "Personas que vivían en Luxemburgo y ahora viven en el extranjero",
      "audience_size": 30557,
      "real_time_cluster": false
  },
  {
      "id": "6023676045583",
      "name": "Vivieron en Malta (anteriormente expatriados - Malta)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Malta (anteriormente expatriados - Malta)"
      ],
      "description": "Personas que vivían en Malta y ahora viven en el extranjero",
      "audience_size": 30168,
      "real_time_cluster": false
  },
  {
      "id": "6023676048183",
      "name": "Vivieron en Mónaco (anteriormente expatriados - Mónaco)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Mónaco (anteriormente expatriados - Mónaco)"
      ],
      "description": "Personas que vivían en Mónaco y ahora viven en el extranjero",
      "audience_size": 28007,
      "real_time_cluster": false
  },
  {
      "id": "6023676055383",
      "name": "Vivieron en Eslovaquia (anteriormente expatriados - Eslovaquia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Eslovaquia (anteriormente expatriados - Eslovaquia)"
      ],
      "description": "Personas que vivían en Eslovaquia y ahora viven en el extranjero",
      "audience_size": 250953,
      "real_time_cluster": false
  },
  {
      "id": "6023676060183",
      "name": "Vivieron en Eslovenia (anteriormente expatriados - Eslovenia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Eslovenia (anteriormente expatriados - Eslovenia)"
      ],
      "description": "Personas que vivían en Eslovenia y ahora viven en el extranjero",
      "audience_size": 48841,
      "real_time_cluster": false
  },
  {
      "id": "6023676072183",
      "name": "Vivieron en México (anteriormente expatriados - México)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en México (anteriormente expatriados - México)"
      ],
      "description": "Personas que vivían en México y ahora viven en el extranjero",
      "audience_size": 9059387,
      "real_time_cluster": false
  },
  {
      "id": "6025000826583",
      "name": "Vivieron en Argentina (anteriormente expatriados - Argentina)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Argentina (anteriormente expatriados - Argentina)"
      ],
      "description": "Personas que vivían en Argentina y ahora viven en el extranjero",
      "audience_size": 1105413,
      "real_time_cluster": false
  },
  {
      "id": "6025000823583",
      "name": "Vivieron en Israel (anteriormente expatriados - Israel)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Israel (anteriormente expatriados - Israel)"
      ],
      "description": "Personas que vivían en Israel y ahora viven en el extranjero",
      "audience_size": 459265,
      "real_time_cluster": false
  },
  {
      "id": "6025000815983",
      "name": "Vivieron en Rusia (anteriormente expatriados - Rusia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Rusia (anteriormente expatriados - Rusia)"
      ],
      "description": "Personas que vivían en Rusia y ahora viven en el extranjero",
      "audience_size": 1594472,
      "real_time_cluster": false
  },
  {
      "id": "6025000813183",
      "name": "Vivieron en Arabia Saudita (anteriormente expatriados - Arabia Saudita)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Arabia Saudita (anteriormente expatriados - Arabia Saudita)"
      ],
      "description": "Personas que vivían en el Reino de Arabia Saudita y ahora viven en el extranjero",
      "audience_size": 727097,
      "real_time_cluster": false
  },
  {
      "id": "6025054896983",
      "name": "Vivieron en Chile (anteriormente expatriados - Chile)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Chile (anteriormente expatriados - Chile)"
      ],
      "description": "Personas que vivían en Chile y ahora viven en el extranjero",
      "audience_size": 446147,
      "real_time_cluster": false
  },
  {
      "id": "6025670492783",
      "name": "Vivieron en Ruanda (anteriormente expatriados - Ruanda)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Ruanda (anteriormente expatriados - Ruanda)"
      ],
      "description": "Personas que vivían en Ruanda y ahora viven en el extranjero",
      "audience_size": 116735,
      "real_time_cluster": false
  },
  {
      "id": "6025753961783",
      "name": "Familiares de personas que viven en el extranjero",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Familiares de personas que viven en el extranjero"
      ],
      "description": "Familiares de personas que ahora viven en el extranjero",
      "audience_size": 34079558,
      "real_time_cluster": false
  },
  {
      "id": "6026404871583",
      "name": "Vivieron en Venezuela (anteriormente expatriados - Venezuela)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Venezuela (anteriormente expatriados - Venezuela)"
      ],
      "description": "Personas que vivían en Venezuela y ahora viven en el extranjero",
      "audience_size": 4175627,
      "real_time_cluster": false
  },
  {
      "id": "6027147160983",
      "name": "Vivieron en Malasia (anteriormente expatriados - Malasia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Malasia (anteriormente expatriados - Malasia)"
      ],
      "description": "Personas que vivían en Malasia y ahora viven en el extranjero",
      "audience_size": 1246789,
      "real_time_cluster": false
  },
  {
      "id": "6027148962983",
      "name": "Vivieron en Rumania (anteriormente expatriados - Rumania)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Rumania (anteriormente expatriados - Rumania)"
      ],
      "description": "Personas que vivían en Rumania y ahora viven en el extranjero",
      "audience_size": 1980166,
      "real_time_cluster": false
  },
  {
      "id": "6027148973583",
      "name": "Vivieron en Corea del Sur (anteriormente expatriados - Corea del Sur)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Corea del Sur (anteriormente expatriados - Corea del Sur)"
      ],
      "description": "Personas que vivían en Corea del Sur y ahora viven en el extranjero",
      "audience_size": 3987023,
      "real_time_cluster": false
  },
  {
      "id": "6027149004983",
      "name": "Vivieron en Serbia (anteriormente expatriados - Serbia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Serbia (anteriormente expatriados - Serbia)"
      ],
      "description": "Personas que vivían en Serbia y ahora viven en el extranjero",
      "audience_size": 581328,
      "real_time_cluster": false
  },
  {
      "id": "6027149006383",
      "name": "Vivieron en Vietnam (anteriormente expatriados - Vietnam)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Vietnam (anteriormente expatriados - Vietnam)"
      ],
      "description": "Personas que vivían en Vietnam y ahora viven en el extranjero",
      "audience_size": 2780483,
      "real_time_cluster": false
  },
  {
      "id": "6027149008183",
      "name": "Vivieron en Perú (anteriormente expatriados - Perú)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Perú (anteriormente expatriados - Perú)"
      ],
      "description": "Personas que vivían en Perú y ahora viven en el extranjero",
      "audience_size": 1400320,
      "real_time_cluster": false
  },
  {
      "id": "6047219032183",
      "name": "Vivieron en Zambia (anteriormente expatriados - Zambia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Zambia (anteriormente expatriados - Zambia)"
      ],
      "description": "Personas que vivían en Zambia y ahora viven en el extranjero",
      "audience_size": 113702,
      "real_time_cluster": false
  },
  {
      "id": "6059793664583",
      "name": "Vivieron en Honduras (anteriormente expatriados - Honduras)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Honduras (anteriormente expatriados - Honduras)"
      ],
      "description": "Personas que vivían en Honduras y ahora viven en el extranjero",
      "audience_size": 1013864,
      "real_time_cluster": false
  },
  {
      "id": "6068844014183",
      "name": "Vivieron en Líbano (anteriormente expatriados - Líbano)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Líbano (anteriormente expatriados - Líbano)"
      ],
      "description": "Personas que vivían en Líbano y ahora viven en el extranjero",
      "audience_size": 626532,
      "real_time_cluster": false
  },
  {
      "id": "6068843912183",
      "name": "Vivieron en Jordania (anteriormente expatriados - Jordania)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Jordania (anteriormente expatriados - Jordania)"
      ],
      "description": "Personas que vivían en Jordania y ahora viven en el extranjero",
      "audience_size": 522182,
      "real_time_cluster": false
  },
  {
      "id": "6071248932383",
      "name": "Vivieron en Argelia (anteriormente expatriados - Argelia)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Argelia (anteriormente expatriados - Argelia)"
      ],
      "description": "Personas que vivían en Argelia y ahora viven en el extranjero",
      "audience_size": 487531,
      "real_time_cluster": false
  },
  {
      "id": "6071248894383",
      "name": "Vivieron en Nicaragua (anteriormente expatriados - Nicaragua)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Nicaragua (anteriormente expatriados - Nicaragua)"
      ],
      "description": "Personas que vivían en Nicaragua y ahora viven en el extranjero",
      "audience_size": 491887,
      "real_time_cluster": false
  },
  {
      "id": "6071248981583",
      "name": "Vivieron en Kuwait (anteriormente expatriados - Kuwait)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Kuwait (anteriormente expatriados - Kuwait)"
      ],
      "description": "Personas que vivían en Kuwait y ahora viven en el extranjero",
      "audience_size": 121992,
      "real_time_cluster": false
  },
  {
      "id": "6071249058983",
      "name": "Vivieron en Qatar (anteriormente expatriados - Qatar)",
      "type": "behaviors",
      "path": [
          "Expatriados",
          "Vivieron en Qatar (anteriormente expatriados - Qatar)"
      ],
      "description": "Personas que vivían en Qatar y ahora viven en el extranjero",
      "audience_size": 77259,
      "real_time_cluster": false
  },
]

function upsertExpats() {
  let catalog = {
    type: "expats",
    catalog : expats,
  }

  FacebookCatalog
    .findOneAndUpdate({ type: "expats" }, catalog, { upsert: true, new: true })
    .exec((err, result) => {
      if (err) {
        console.log(err);
      }
      else{
        console.log('Catalogo expatriados importado');
      }
      
    });
}

module.exports = {
  upsertExpats,
}
