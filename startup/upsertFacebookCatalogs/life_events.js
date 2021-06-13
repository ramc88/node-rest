const FacebookCatalog = require('../../models/facebook_catalog');

var life_events = [
  {
    "id": "6002714398172",
    "name": "Recién casados (1 año)",
    "type": "life_events",
    "path": [
        "Recién casados (1 año)"
    ],
    "description": "Personas que hace menos de un año que están casadas.",
    "audience_size": 19206019,
    "real_time_cluster": false
},
{
    "id": "6002714398772",
    "name": "Recién comprometidos (6 meses)",
    "type": "life_events",
    "path": [
        "Recién comprometidos (6 meses)"
    ],
    "description": "Personas que hace menos de 6 meses que están comprometidas",
    "audience_size": 3907341,
    "real_time_cluster": false
},
{
    "id": "6002737124172",
    "name": "Cumpleaños próximo",
    "type": "life_events",
    "path": [
        "Cumpleaños",
        "Cumpleaños próximo"
    ],
    "description": "Personas que cumplirán años en la próxima semana",
    "audience_size": 88882132,
    "real_time_cluster": true
},
{
    "id": "6003054185372",
    "name": "Mudanza reciente",
    "type": "life_events",
    "path": [
        "Mudanza reciente"
    ],
    "description": "Personas que actualizaron su perfil con una ciudad actual nueva en los últimos seis meses",
    "audience_size": 786829,
    "real_time_cluster": false
},
{
    "id": "6003053984972",
    "name": "Relación a distancia",
    "type": "life_events",
    "path": [
        "Relación a distancia"
    ],
    "description": "Personas que mantienen una relación a distancia",
    "audience_size": 9124432,
    "real_time_cluster": false
},
{
    "id": "6003053860372",
    "name": "Lejos de la ciudad de origen",
    "type": "life_events",
    "path": [
        "Lejos de la ciudad de origen"
    ],
    "description": "Personas que están lejos de su ciudad de origen",
    "audience_size": 152466727,
    "real_time_cluster": false
},
{
    "id": "6003053857372",
    "name": "Lejos de la familia",
    "type": "life_events",
    "path": [
        "Lejos de la familia"
    ],
    "description": "Personas que están lejos de la familia",
    "audience_size": 152466727,
    "real_time_cluster": false
},
{
    "id": "6003050226972",
    "name": "Recién casados (6 meses)",
    "type": "life_events",
    "path": [
        "Recién casados (6 meses)"
    ],
    "description": "Personas que hace menos de 6 meses que están casadas",
    "audience_size": 10637671,
    "real_time_cluster": false
},
{
    "id": "6003050210972",
    "name": "Recién comprometidos (1 año)",
    "type": "life_events",
    "path": [
        "Recién comprometidos (1 año)"
    ],
    "description": "Personas que hace menos de un año que están comprometidas",
    "audience_size": 6249979,
    "real_time_cluster": false
},
{
    "id": "6005232221572",
    "name": "Nueva relación",
    "type": "life_events",
    "path": [
        "Nueva relación"
    ],
    "description": "Personas que actualizaron su perfil con una relación nueva en los últimos seis meses",
    "audience_size": 3671052,
    "real_time_cluster": false
},
{
    "id": "6005149512172",
    "name": "Nuevo empleo",
    "type": "life_events",
    "path": [
        "Nuevo empleo"
    ],
    "description": "Personas que actualizaron su perfil con un puesto de trabajo nuevo en los últimos seis meses",
    "audience_size": 195088,
    "real_time_cluster": false
},
{
    "id": "6012631862383",
    "name": "Recién comprometidos (3 meses)",
    "type": "life_events",
    "path": [
        "Recién comprometidos (3 meses)"
    ],
    "description": "Personas que hace menos de 3 meses que están comprometidas",
    "audience_size": 2094898,
    "real_time_cluster": false
},
{
    "id": "6013133420583",
    "name": "Recién casados (3 meses)",
    "type": "life_events",
    "path": [
        "Recién casados (3 meses)"
    ],
    "description": "Personas que hace menos de 3 meses que están casadas",
    "audience_size": 5758367,
    "real_time_cluster": false
},
{
    "id": "6017476616183",
    "name": "Aniversario dentro de 30 días",
    "type": "life_events",
    "path": [
        "Aniversario",
        "Aniversario dentro de 30 días"
    ],
    "description": "Personas cuyo aniversario (matrimonio, pareja de hecho, etc.) se celebra en los próximos 30 días",
    "audience_size": 6585075,
    "real_time_cluster": false
},
{
    "id": "6018399723983",
    "name": "Aniversario dentro de 31 a 60 días",
    "type": "life_events",
    "path": [
        "Aniversario",
        "Aniversario dentro de 31 a 60 días"
    ],
    "description": "Personas cuyo aniversario (matrimonio, pareja de hecho, etc.) se celebra en los próximos 31 a 60 días",
    "audience_size": 8622980,
    "real_time_cluster": false
},
{
    "id": "6048267235783",
    "name": "Cumplen años en el mes de enero",
    "type": "life_events",
    "path": [
        "Cumpleaños",
        "Mes de cumpleaños",
        "Cumplen años en el mes de enero"
    ],
    "description": "Personas que cumplen años en el mes de enero",
    "audience_size": 268858420,
    "real_time_cluster": false
},
{
    "id": "6049083267183",
    "name": "Cumplen años en el mes de febrero",
    "type": "life_events",
    "path": [
        "Cumpleaños",
        "Mes de cumpleaños",
        "Cumplen años en el mes de febrero"
    ],
    "description": "Personas que cumplen años en el mes de febrero",
    "audience_size": 172901839,
    "real_time_cluster": false
},
{
    "id": "6048026294583",
    "name": "Cumplen años en el mes de marzo",
    "type": "life_events",
    "path": [
        "Cumpleaños",
        "Mes de cumpleaños",
        "Cumplen años en el mes de marzo"
    ],
    "description": "Personas que cumplen años en el mes de marzo",
    "audience_size": 183295943,
    "real_time_cluster": false
},
{
    "id": "6048026275783",
    "name": "Cumplen años en el mes de abril",
    "type": "life_events",
    "path": [
        "Cumpleaños",
        "Mes de cumpleaños",
        "Cumplen años en el mes de abril"
    ],
    "description": "Personas que cumplen años en el mes de abril",
    "audience_size": 182128454,
    "real_time_cluster": false
},
{
    "id": "6048026061783",
    "name": "Cumplen años en el mes de mayo",
    "type": "life_events",
    "path": [
        "Cumpleaños",
        "Mes de cumpleaños",
        "Cumplen años en el mes de mayo"
    ],
    "description": "Personas que cumplen años en el mes de mayo",
    "audience_size": 210623109,
    "real_time_cluster": false
},
{
    "id": "6048026229983",
    "name": "Cumplen años en el mes de junio",
    "type": "life_events",
    "path": [
        "Cumpleaños",
        "Mes de cumpleaños",
        "Cumplen años en el mes de junio"
    ],
    "description": "Personas que cumplen años en el mes de junio",
    "audience_size": 176930434,
    "real_time_cluster": false
},
{
    "id": "6048808449583",
    "name": "Cumplen años en el mes de julio",
    "type": "life_events",
    "path": [
        "Cumpleaños",
        "Mes de cumpleaños",
        "Cumplen años en el mes de julio"
    ],
    "description": "Personas que cumplen años en el mes de julio",
    "audience_size": 172810695,
    "real_time_cluster": false
},
{
    "id": "6048810966183",
    "name": "Cumplen años en el mes de agosto",
    "type": "life_events",
    "path": [
        "Cumpleaños",
        "Mes de cumpleaños",
        "Cumplen años en el mes de agosto"
    ],
    "description": "Personas que cumplen años en el mes de agosto",
    "audience_size": 177944692,
    "real_time_cluster": false
},
{
    "id": "6048810961183",
    "name": "Cumplen años en el mes de septiembre",
    "type": "life_events",
    "path": [
        "Cumpleaños",
        "Mes de cumpleaños",
        "Cumplen años en el mes de septiembre"
    ],
    "description": "Personas que cumplen años en el mes de septiembre",
    "audience_size": 165556908,
    "real_time_cluster": false
},
{
    "id": "6048810950583",
    "name": "Cumplen años en el mes de octubre",
    "type": "life_events",
    "path": [
        "Cumpleaños",
        "Mes de cumpleaños",
        "Cumplen años en el mes de octubre"
    ],
    "description": "Personas que cumplen años en el mes de octubre",
    "audience_size": 173614995,
    "real_time_cluster": false
},
{
    "id": "6048810938183",
    "name": "Cumplen años en el mes de noviembre",
    "type": "life_events",
    "path": [
        "Cumpleaños",
        "Mes de cumpleaños",
        "Cumplen años en el mes de noviembre"
    ],
    "description": "Personas que cumplen años en el mes de noviembre",
    "audience_size": 159983478,
    "real_time_cluster": false
},
{
    "id": "6048810914583",
    "name": "Cumplen años en el mes de diciembre",
    "type": "life_events",
    "path": [
        "Cumpleaños",
        "Mes de cumpleaños",
        "Cumplen años en el mes de diciembre"
    ],
    "description": "Personas que cumplen años en el mes de diciembre",
    "audience_size": 202736145,
    "real_time_cluster": false
},
{
    "id": "6203618994783",
    "name": "Amigos de personas recién comprometidas",
    "type": "life_events",
    "path": [
        "Amigos de",
        "Amigos de personas recién comprometidas"
    ],
    "description": "Amigos de personas que se comprometieron en los últimos 30 días",
    "audience_size": 402247823,
    "real_time_cluster": false
},
{
    "id": "6203619351583",
    "name": "Amigos de recién casados",
    "type": "life_events",
    "path": [
        "Amigos de",
        "Amigos de recién casados"
    ],
    "description": "Amigos de personas que se casaron en los últimos 30 días",
    "audience_size": 755150104,
    "real_time_cluster": false
},
{
    "id": "6203619820983",
    "name": "Amigos de recién mudados",
    "type": "life_events",
    "path": [
        "Amigos de",
        "Amigos de recién mudados"
    ],
    "description": "Amigos de personas que se mudaron en los últimos 30 días",
    "audience_size": 1327295922,
    "real_time_cluster": false
},
{
    "id": "6203620854183",
    "name": "Amigos de personas que cumplen años dentro de un mes",
    "type": "life_events",
    "path": [
        "Amigos de",
        "Amigos de personas que cumplen años dentro de un mes"
    ],
    "description": "Amigos de personas que cumplen años en 7 a 30 días",
    "audience_size": 2045511782,
    "real_time_cluster": false
},
{
    "id": "6203621025983",
    "name": "Amigos de mujeres que cumplen años en 7 a 30 días",
    "type": "life_events",
    "path": [
        "Amigos de",
        "Amigos de mujeres que cumplen años en 7 a 30 días"
    ],
    "description": "Amigos de mujeres que cumplen años en 7 a 30 días",
    "audience_size": 1786013290,
    "real_time_cluster": false
},
{
    "id": "6203621119983",
    "name": "Amigos de hombres que cumplen años en 7 a 30 días",
    "type": "life_events",
    "path": [
        "Amigos de",
        "Amigos de hombres que cumplen años en 7 a 30 días"
    ],
    "description": "Amigos de hombres que cumplen años en 7 a 30 días",
    "audience_size": 1905362394,
    "real_time_cluster": false
},
{
    "id": "6203621218383",
    "name": "Amigos de personas que cumplen años dentro de una semana",
    "type": "life_events",
    "path": [
        "Amigos de",
        "Amigos de personas que cumplen años dentro de una semana"
    ],
    "description": "Amigos de personas que cumplen años en 0 a 7 días",
    "audience_size": 1803210459,
    "real_time_cluster": false
},
{
    "id": "6203621325983",
    "name": "Amigos de mujeres que cumplen años en 0 a 7 días",
    "type": "life_events",
    "path": [
        "Amigos de",
        "Amigos de mujeres que cumplen años en 0 a 7 días"
    ],
    "description": "Amigos de mujeres que cumplen años en 0 a 7 días",
    "audience_size": 1413020999,
    "real_time_cluster": false
},
{
    "id": "6203621472783",
    "name": "Amigos de hombres que cumplen años en 0 a 7 días",
    "type": "life_events",
    "path": [
        "Amigos de",
        "Amigos de hombres que cumplen años en 0 a 7 días"
    ],
    "description": "Amigos de hombres que cumplen años en 0 a 7 días",
    "audience_size": 1569408427,
    "real_time_cluster": false
}
]

function upsertLifeEvents() {
  let catalog = {
    type: "life_events",
    catalog : life_events,
  }

  FacebookCatalog
    .findOneAndUpdate({ type: "life_events" }, catalog, { upsert: true, new: true })
    .exec((err, result) => {
      if (err) {
        console.log(err);
      }
      else{
        console.log('Catalogo eventos de vida importado');
      }
      
    });
}

module.exports = {
  upsertLifeEvents,
}
