const FacebookCatalog = require('../../models/facebook_catalog');

var industries = [
  {
      "id": "6009003307783",
      "name": "Negocios y finanzas",
      "type": "industries",
      "path": [
          "Negocios y finanzas"
      ],
      "description": "Personas que trabajan en negocios y finanzas. Ejemplos: contador, director de cuentas, auditor, gerente de ventas, asesor financiero, gerente de finanzas, distribuidor y agente, entre otros.",
      "audience_size": 7062194,
      "real_time_cluster": false
  },
  {
      "id": "6008888954983",
      "name": "Servicios administrativos",
      "type": "industries",
      "path": [
          "Servicios administrativos"
      ],
      "description": "Personas que trabajan en la administración. Ejemplos: secretario, empleado administrativo, jefe de oficina, ayudante de oficina, agente inmobiliario, asistente personal y director de sucursal, entre otros.",
      "audience_size": 16886385,
      "real_time_cluster": false
  },
  {
      "id": "6008888998983",
      "name": "Educación y bibliotecas",
      "type": "industries",
      "path": [
          "Educación y bibliotecas"
      ],
      "description": "Personas que trabajan en educación o bibliotecas. Ejemplos: educador, instructor, maestro, profesor, profesor universitario, asistente de investigación, tutor, bibliotecario y director, entre otros.",
      "audience_size": 10674761,
      "real_time_cluster": false
  },
  {
      "id": "6009003311983",
      "name": "Gestión",
      "type": "industries",
      "path": [
          "Gestión"
      ],
      "description": "Personas que trabajan en la administración. Ejemplos: gerente, supervisor, director y presidente, entre otros.",
      "audience_size": 11357535,
      "real_time_cluster": false
  },
  {
      "id": "6008888980183",
      "name": "Ventas",
      "type": "industries",
      "path": [
          "Ventas"
      ],
      "description": "Personas que trabajan en ventas. Ejemplos: asistente de ventas, encargado de tienda, agente inmobiliario, consultor, representante de atención al cliente y cajero, entre otros.",
      "audience_size": 13468989,
      "real_time_cluster": false
  },
  {
      "id": "6008888961983",
      "name": "Servicios técnicos y de TI",
      "type": "industries",
      "path": [
          "Servicios técnicos y de TI"
      ],
      "description": "Personas que trabajan en servicios técnicos y de TI. Ejemplos: técnico de TI, desarrollador web y consultor de TI, entre otros.",
      "audience_size": 6182910,
      "real_time_cluster": false
  },
  {
      "id": "6008888972183",
      "name": "Servicios jurídicos",
      "type": "industries",
      "path": [
          "Servicios jurídicos"
      ],
      "description": "Personas que trabajan en los servicios jurídicos. Ejemplos: abogado, asesor empresarial, socio y asistente legal, entre otros.",
      "audience_size": 984357,
      "real_time_cluster": false
  },
  {
      "id": "6012901802383",
      "name": "Arte, entretenimiento, deporte y medios",
      "type": "industries",
      "path": [
          "Arte, entretenimiento, deporte y medios"
      ],
      "description": "Personas que trabajan en el arte, el entretenimiento, los deportes y los medios. Ejemplos: fotógrafo, artista, actor, actriz y cantante, entre otros.",
      "audience_size": 9951608,
      "real_time_cluster": false
  },
  {
      "id": "6012903140583",
      "name": "Producción",
      "type": "industries",
      "path": [
          "Producción"
      ],
      "description": "Personas que trabajan en la producción. Ejemplos: minero, herrero y leñador, entre otros.",
      "audience_size": 10642533,
      "real_time_cluster": false
  },
  {
      "id": "6012903320983",
      "name": "Transporte y traslado",
      "type": "industries",
      "path": [
          "Transporte y traslado"
      ],
      "description": "Personas que trabajan en el transporte y el traslado. Ejemplos: conductor, operador, capitán de barco, auxiliar de vuelo y piloto, entre otros.",
      "audience_size": 5623021,
      "real_time_cluster": false
  },
  {
      "id": "6012903126783",
      "name": "Arquitectura e ingeniería",
      "type": "industries",
      "path": [
          "Arquitectura e ingeniería"
      ],
      "description": "Personas que trabajan en la arquitectura y la ingeniería. Ejemplos: ingeniero de software, técnico, electricista y maquinista, entre otros.",
      "audience_size": 5705731,
      "real_time_cluster": false
  },
  {
      "id": "6012903127583",
      "name": "Alimentación y restaurantes",
      "type": "industries",
      "path": [
          "Alimentación y restaurantes"
      ],
      "description": "Personas que trabajan en alimentación y restaurantes. Ejemplos: cajero, mesero, camarero, chef, barista y ayudante de cocina, entre otros.",
      "audience_size": 4116961,
      "real_time_cluster": false
  },
  {
      "id": "6012903128783",
      "name": "Construcción y extracción",
      "type": "industries",
      "path": [
          "Construcción y extracción"
      ],
      "description": "Personas que trabajan en la construcción y la extracción. Ejemplos: técnico de mantenimiento, electricista, albañil, mecánico y operador de maquinaria, entre otros.",
      "audience_size": 3857721,
      "real_time_cluster": false
  },
  {
      "id": "6012903159383",
      "name": "Servicios de asistencia médica y sanitaria",
      "type": "industries",
      "path": [
          "Servicios de asistencia médica y sanitaria"
      ],
      "description": "Personas que trabajan en los servicios de asistencia médica y sanitaria. Ejemplos: físico, dentista y cardiólogo, entre otros.",
      "audience_size": 9520862,
      "real_time_cluster": false
  },
  {
      "id": "6012903160983",
      "name": "Servicios de instalación y reparación",
      "type": "industries",
      "path": [
          "Servicios de instalación y reparación"
      ],
      "description": "Personas que trabajan en servicios de instalación y reparación. Ejemplos: técnico, operador, mecánico y soldador, entre otros.",
      "audience_size": 6148244,
      "real_time_cluster": false
  },
  {
      "id": "6012903167183",
      "name": "Biología, física y ciencias sociales",
      "type": "industries",
      "path": [
          "Biología, física y ciencias sociales"
      ],
      "description": "Personas que trabajan en biología, física y ciencias sociales. Ejemplos: profesor, químico, psicólogo y geólogo, entre otros.",
      "audience_size": 4799276,
      "real_time_cluster": false
  },
  {
      "id": "6012903167783",
      "name": "Informática y matemáticas",
      "type": "industries",
      "path": [
          "Informática y matemáticas"
      ],
      "description": "Personas que trabajan en la informática y las matemáticas. Ejemplos: informático, analista y matemático, entre otros.",
      "audience_size": 6182910,
      "real_time_cluster": false
  },
  {
      "id": "6012903168383",
      "name": "Comunidad y servicios sociales",
      "type": "industries",
      "path": [
          "Comunidad y servicios sociales"
      ],
      "description": "Personas que trabajan en la comunidad y los servicios sociales. Ejemplos: sacerdote, trabajador social, consejero y político, entre otros.",
      "audience_size": 8713778,
      "real_time_cluster": false
  },
  {
      "id": "6012903299783",
      "name": "Servicios de protección",
      "type": "industries",
      "path": [
          "Servicios de protección"
      ],
      "description": "Personas que trabajan en servicios de protección. Ejemplos: guardia de seguridad, sargento, guardavidas, oficial de policía y bombero, entre otros.",
      "audience_size": 2711035,
      "real_time_cluster": false
  },
  {
      "id": "6012903299983",
      "name": "Agricultura, pesca y silvicultura",
      "type": "industries",
      "path": [
          "Agricultura, pesca y silvicultura"
      ],
      "description": "Personas que trabajan en la agricultura, la pesca y la silvicultura. Ejemplos: granjero, jinete, miembro de tripulación, piloto y empleado de mantenimiento, entre otros.",
      "audience_size": 3680112,
      "real_time_cluster": false
  },
  {
      "id": "6012903317583",
      "name": "Servicios de limpieza y mantenimiento",
      "type": "industries",
      "path": [
          "Servicios de limpieza y mantenimiento"
      ],
      "description": "Personas que trabajan en la limpieza y el mantenimiento. Ejemplos: conserje, encargado de tareas domésticas, jardinero y empleado de mantenimiento, entre otros.",
      "audience_size": 2526323,
      "real_time_cluster": false
  },
  {
      "id": "6012903320383",
      "name": "Ejército (global)",
      "type": "industries",
      "path": [
          "Ejército (global)"
      ],
      "description": "Personas que trabajan en el ejército",
      "audience_size": 952713,
      "real_time_cluster": false
  },
  {
      "id": "6016671857383",
      "name": "Veteranos (EE. UU.)",
      "type": "industries",
      "path": [
          "Veteranos (EE. UU.)"
      ],
      "description": "Personas que trabajaron anteriormente para el ejército de los EE. UU.",
      "audience_size": 1297371,
      "real_time_cluster": false
  },
  {
      "id": "6019621029983",
      "name": "Funcionarios del gobierno (global)",
      "type": "industries",
      "path": [
          "Funcionarios del gobierno (global)"
      ],
      "description": "Personas que trabajan en el Gobierno",
      "audience_size": 698966,
      "real_time_cluster": false
  }
]

function upsertIndustries() {
  let catalog = {
    type: "industries",
    catalog : industries,
  }

  FacebookCatalog
    .findOneAndUpdate({ type: "industries" }, catalog, { upsert: true, new: true })
    .exec((err, result) => {
      if (err) {
        console.log(err);
      }
      else{
        console.log('Catalogo industrias importado');
      }
      
    });
}

module.exports = {
  upsertIndustries,
}

