#   **GESTIÓN ESCOLAR - API**

# **GET**

### **GET** DE ALUMNO, ADMINISTRATIVOS, DOCENTES, ESCUELAS Y MANTENIMIENTO. 
``` js
const conectores = require('../controllers/conexion');
const conexion = conectores.mongo;
const redis = conectores.redis();

const getAlumnos = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ALUMNO:GET:${new Date().toISOString()}`,
      `Consulta de alumnos`
    );
    redis.quit();
  });

  conexion().then(() => {
    const Alumno = require("../../models/Alumno");
    Alumno.find()
      .then((infAlumnos) => {
        res.json(infAlumnos);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getAlumno = (req, res) => {
 
  redis.connect().then(() => {
    redis.set(
      `ALUMNO:GET:${new Date().toISOString()}`,
      `Consulta de alumno ${req.params.id}`
    );
    redis.quit();
  });

  conexion().then(() => {
    const Alumno = require("../../models/Alumno");
    Alumno.findById(req.params.id)
      .then((infAlumno) => {
        res.json(infAlumno);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getAdministrativos = (req, res) => {

  redis.connect().then(() => {
    redis.set(
      `ADMINISTRATIVOS:GET:${new Date().toISOString()}`,
      `Consulta de ADMINISTRATIVOS`
    );
    redis.quit();
  });

  conexion().then(() => {
    const Administrativos = require("../../models/Administrativos");
    Administrativos.find()
      .then((infAdmis) => {
        res.json(infAdmis);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getAdministrativo = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ADMINISTRATIVOS:GET:${new Date().toISOString()}`,
      `Consulta de ADMINISTRATIVO ${req.params.id}`
    );
    redis.quit();
  });

  conexion().then(() => {
    const Administrativo = require("../../models/Administrativos");
    Administrativo.findById(req.params.id)
      .then((infAdmi) => {
        res.json(infAdmi);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getDocentes = (req, res) => {

  redis.connect().then(() => {
    redis.set(
      `DOCENTES:GET:${new Date().toISOString()}`,
      `Consulta de DOCENTES`
    );
    redis.quit();
  });

  conexion().then(() => {
    const Docentes = require("../../models/Docentes");
    Docentes.find()
      .then((infDocentes) => {
        res.json(infDocentes);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getDocente = (req, res) => {

  redis.connect().then(() => {
    redis.set(
      `DOCENTES:GET:${new Date().toISOString()}`,
      `Consulta de DOCENTE ${req.params.id}`
    );
    redis.quit();
  });

  conexion().then(() => {
    const Docente = require("../../models/Docentes");
    Docente.findById(req.params.id)
      .then((infDocente) => {
        res.json(infDocente);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getEscuelas = (req, res) => {

  redis.connect().then(() => {
    redis.set(
      `ESCUELAS:GET:${new Date().toISOString()}`,
      `Consulta de ESCUELAS`
    );
    redis.quit();
  });

  conexion().then(() => {
    const Escuelas = require("../../models/Escuelas");
    Escuelas.find()
      .then((infEscuelas) => {
        res.json(infEscuelas);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getEscuela = (req, res) => {

  redis.connect().then(() => {
    redis.set(
      `ESCUELAS:GET:${new Date().toISOString()}`,
      `Consulta de ESCUELA ${req.params.id}`
    );
    redis.quit();
  });

  conexion().then(() => {
    const Escuela = require("../../models/Escuelas");
    Escuela.findById(req.params.id)
      .then((infEscuela) => {
        res.json(infEscuela);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getMantenimientos = (req, res) => {

  redis.connect().then(() => {
    redis.set(
      `MANTENIMIENTO:GET:${new Date().toISOString()}`,
      `Consulta de MANTENIMIENTOS`
    );
    redis.quit();
  });

  conexion().then(() => {
    const Mantenimientos = require("../../models/Mantenimiento");
    Mantenimientos.find()
      .then((infMantenimientos) => {
        res.json(infMantenimientos);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getMantenimiento = (req, res) => {

  redis.connect().then(() => {
    redis.set(
      `MANTENIMIENTO:GET:${new Date().toISOString()}`,
      `Consulta de MANTENIMIENTO ${req.params.id}`
    );
    redis.quit();
  });

  conexion().then(() => {
    const Mantenimiento = require("../../models/Mantenimiento");
    Mantenimiento.findById(req.params.id)
      .then((infMantenimiento) => {
        res.json(infMantenimiento);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

module.exports = {
  getAlumnos,
  getAlumno,
  getAdministrativos,
  getAdministrativo,
  getDocentes,
  getDocente,
  getEscuelas,
  getEscuela,
  getMantenimientos,
  getMantenimiento,
};

```
# **POST**
### **POST** DE ALUMNO, ADMINISTRATIVOS, DOCENTES, ESCUELAS Y MANTENIMIENTO. 
``` js
const conectores = require("../controllers/conexion");
const conexion = conectores.mongo;
const redis = conectores.redis();
const { Types } = require("mongoose");

const postAlumno = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Alumno");
    const alumno = new modelo({
      _id: Types.ObjectId(req.body._id),
      curp: req.body.curp,
      nombre: req.body.nombre,
      fechaNat: req.body.fechaNat,
      fechaInscripcion: req.body.fechaInscripcion,
      gradoAcademico: req.body.gradoAcademico,
      tutor: req.body.tutor,
      creditoTutoria: req.body.creditoTutoria,
      escuela: req.body.escuela,
    });
    alumno
      .save()
      .then((alumno) => {
        redis.connect().then(() => {
          redis.set(
            `ALUMNO:POST:${new Date().toISOString()}`,
            `Registro de alumno ${alumno._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(alumno);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `ALUMNO:POST:${new Date().toISOString()}`,
            err.message
          );
          redis.quit();
        });
      });
  });
};

const postAdministrativo = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Administrativos");
    const administrativo = new modelo({
      _id: Types.ObjectId(req.body._id),
      curp: req.body.curp,
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      NocuentaBancaria: req.body.NocuentaBancaria,
      funcion: req.body.funcion,
      horaEntrada: req.body.horaEntrada,
      horaSalida: req.body.horaSalida,
      extensionTel: req.body.extensionTel,
      correo: req.body.correo,
      escuela: Types.ObjectId(req.body.escuela),
    });
    administrativo
      .save()
      .then((administrativo) => {
        redis.connect().then(() => {
          redis.set(
            `ADMINISTRATIVOS:POST:${new Date().toISOString()}`,
            `Registro de administrativo ${administrativo._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(administrativo);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `ADMINISTRATIVOS:POST:${new Date().toISOString()}`,
            err.message
          );
          redis.quit();
        });
      });
  });
};

const postDocente = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Docentes");
    const docentes = new modelo({
      _id: Types.ObjectId(req.body._id),
      curp: req.body.curp,
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      nocuentaBancaria: req.body.nocuentaBancaria,
      noOficina: req.body.noOficina,
      especialidad: req.body.especialidad,
      gradoEstudio: req.body.gradoEstudio,
      tutorados: req.body.tutorados,
      tutoriaFirmada: req.body.tutoriaFirmada,
      escuela: req.body.escuela,
    });
    docentes
      .save()
      .then((docentes) => {
        redis.connect().then(() => {
          redis.set(
            `DOCENTES:POST:${new Date().toISOString()}`,
            `Registro de docentes ${docentes._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(docentes);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `DOCENTES:POST:${new Date().toISOString()}`,
            err.message
          );
          redis.quit();
        });
        res.json(err)
      });
  });
};

const postEscuela = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Escuelas");
    const escuelas = new modelo({
      _id: Types.ObjectId(req.body._id),
      clave: req.body.clave,
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      ciudad: req.body.ciudad,
      administrativos: req.body.administrativos,
      docentes: req.body.docentes,
      mantenimiento: req.body.mantenimiento,
      alumnos: req.body.alumnos,
    });
    escuelas
      .save()
      .then((escuelas) => {
        redis.connect().then(() => {
          redis.set(
            `ESCUELAS:POST:${new Date().toISOString()}`,
            `Registro de escuelas ${escuelas._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(escuelas);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `ESCUELAS:POST:${new Date().toISOString()}`,
            err.message
          );
          redis.quit();
        });
      });
  });
};

const postMantenimiento = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Mantenimiento");
    const mantenimiento = new modelo({
      _id: Types.ObjectId(req.body._id),
      curp: req.body.curp,
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      nocuentaBancaria: req.body.nocuentaBancaria,
      telInstitucional: req.body,
      especialidad: req.body.especialidad,
      escuela: req.body.escuela,
    });
    mantenimiento
      .save()
      .then((mantenimiento) => {
        redis.connect().then(() => {
          redis.set(
            `MANTENIMIENTO:POST:${new Date().toISOString()}`,
            `Registro de mantenimiento ${mantenimiento._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(mantenimiento);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `MANTENIMIENTO:POST:${new Date().toISOString()}`,
            err.message
          );
          redis.quit();
        });
        res.json(err)
      });
  });
};

module.exports = {
  postAdministrativo,
  postAlumno,
  postDocente,
  postEscuela,
  postMantenimiento,
};
```

# **PUT**
### **PUT** DE ALUMNO, ADMINISTRATIVOS, DOCENTES, ESCUELAS Y MANTENIMIENTO. 

``` js
const conectores = require("../controllers/conexion");
const conexion = conectores.mongo;
const redis = conectores.redis();

const updateAlumno = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Alumno");
    modelo.updateOne({ _id: req.params.id }, req.body).then((alumno) => {
      redis.connect().then(() => {
        redis.set(
          `ALUMNOS:PUT:${new Date().toISOString()}`,
          `Actualizacion de alumno ${alumno._id}`
        );
        redis.quit();
      });
      res.header("Access-Control-Allow-Origin", "*").json(alumno);
    });
  });
};

const updateAdministrativo = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Administrativos");
    modelo
      .updateOne({ _id: req.params.id }, req.body)
      .then((administrativo) => {
        redis.connect().then(() => {
          redis.set(
            `ADMINISTRATIVOS:PUT:${new Date().toISOString()}`,
            `Actualizacion de administrativo ${administrativo._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(administrativo);
      });
  });
};

const updateDocente = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Docentes");
    modelo.updateOne({ _id: req.params.id }, req.body).then((docente) => {
      redis.connect().then(() => {
        redis.set(
          `DOCENTES:PUT:${new Date().toISOString()}`,
          `Actualizacion de docente ${docente._id}`
        );
        redis.quit();
      });
      res.header("Access-Control-Allow-Origin", "*").json(docente);
    });
  });
};

const updateEscuela = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Escuelas");
    modelo.updateOne({ _id: req.params.id }, req.body).then((escuela) => {
      redis.connect().then(() => {
        redis.set(
          `ESCUELAS:PUT:${new Date().toISOString()}`,
          `Actualizacion de escuela ${escuela._id}`
        );
        redis.quit();
      });
      res.header("Access-Control-Allow-Origin", "*").json(escuela);
    });
  });
};

const updateMantenimiento = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Mantenimiento");
    modelo.updateOne({ _id: req.params.id }, req.body).then((mantenimiento) => {
      redis.connect().then(() => {
        redis.set(
          `MANTENIMIENTO:PUT:${new Date().toISOString()}`,
          `Actualizacion de mantenimiento ${mantenimiento._id}`
        );
        redis.quit();
      });
      res.header("Access-Control-Allow-Origin", "*").json(mantenimiento);
    });
  });
};

module.exports = {
  updateAdministrativo,
  updateAlumno,
  updateDocente,
  updateEscuela,
  updateMantenimiento,
};
```

# **DELETE**
### **DELETE** DE ALUMNO, ADMINISTRATIVOS, DOCENTES, ESCUELAS Y MANTENIMIENTO. 

``` js
const conectores = require("../controllers/conexion");
const conexion = conectores.mongo;
const redis = conectores.redis();

const deleteAlumno = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Alumno");
    modelo.deleteOne({ _id: req.params.id }).then((alumno) => {
      redis.connect().then(() => {
        redis.set(
          `ALUMNO:DELETE:${new Date().toISOString()}`,
          `Eliminacion de alumno ${JSON.stringify(alumno)}`
        );
        redis.quit();
      });
      res.header("Access-Control-Allow-Origin", "*").json(alumno);
    });
  });
};

const deleteAdministrativo = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Administrativos");
    modelo.deleteOne({ _id: req.params.id }).then((administrativo) => {
      redis.connect().then(() => {
        redis.set(
          `ADMINISTRATIVOS:DELETE:${new Date().toISOString()}`,
          `Eliminacion de administrativo ${JSON.stringify(administrativo)}`
        );
        redis.quit();
      });
      res.header("Access-Control-Allow-Origin", "*").json(administrativo);
    });
  });
};

const deleteDocente = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Docentes");
    modelo.deleteOne({ _id: req.params.id }).then((docente) => {
      redis.connect().then(() => {
        redis.set(
          `DOCENTES:DELETE:${new Date().toISOString()}`,
          `Eliminacion de docente ${JSON.stringify(docente)}`
        );
        redis.quit();
      });
      res.header("Access-Control-Allow-Origin", "*").json(docente);
    });
  });
};

const deleteEscuela = (req, res) => {
  conexion().then(() => {
    const modelo = require("../../models/Escuelas");
    modelo.deleteOne({ _id: req.params.id }).then((escuela) => {
      redis.connect().then(() => {
        redis.set(
          `ESCUELAS:DELETE:${new Date().toISOString()}`,
          `Eliminacion de escuela ${JSON.stringify(escuela)}`
        );
        redis.quit();
      });
      res.header("Access-Control-Allow-Origin", "*").json(escuela);
    });
  });
};

const deleteMantenimiento = (req, res) => {
    conexion().then(() => {
      const modelo = require("../../models/Mantenimiento");
      modelo.deleteOne({ _id: req.params.id }).then((mantenimiento) => {
        redis.connect().then(() => {
          redis.set(
            `MANTENIMIENTO:DELETE:${new Date().toISOString()}`,
            `Eliminacion de mantenimiento ${JSON.stringify(mantenimiento)}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(mantenimiento);
      });
    });
  };

module.exports = {
  deleteAlumno,
  deleteAdministrativo,
  deleteDocente,
  deleteEscuela,
  deleteMantenimiento
};

```
# **MODELOS**

## **ALUMNO**  

**CÓDIGO**
``` js
const { Schema, model } = require("mongoose");

const esquema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    curp: String, 
    nombre: String, 
    fechaNat: Schema.Types.Date, 
    fechaInscripcion: Schema.Types.Date, 
    gradoAcademico: String,
    tutor: [Schema.Types.ObjectId],
    creditoTutoria: Schema.Types.Boolean, 
    escuela: [Schema.Types.ObjectId]
  },

  { collection: "Alumno" }
);

const modelo = model("Alumno", esquema);
module.exports = modelo;

```

- **CONSULTA DE TODOS LOS ALUMNOS**

**RUTA** `localhost:3000/alumnos`

**RESPUESTA**

```json
[{
  "_id": {
    "$oid": "6356d267123ff39764769cea"
  },
  "curp": "CURPES01",
  "nombre": "Ximena Villegas Samartin",
  "fechaNat": "09-02-2000",
  "fechaInscripcion": "20-02-2018",
  "gradoAcademico": "Bachillerato",
  "tutor": {
    "$oid": "6356c6fa123ff39764769cdb"
  },
  "creditoTutoria": false,
  "escuela": {
    "$oid": "6356c19b123ff39764769cd4"
  }
},{
  "_id": {
    "$oid": "6356d267123ff39764769ceb"
  },
  "curp": "CURPES02",
  "nombre": "Daniel Lopez Quintero",
  "fechaNat": "30-07-2000",
  "fechaInscripcion": "20-02-2018",
  "gradoAcademico": "Bachillerato",
  "tutor": {
    "$oid": "6356c6fa123ff39764769cdb"
  },
  "creditoTutoria": false,
  "escuela": {
    "$oid": "6356c19b123ff39764769cd4"
  }
},{
  "_id": {
    "$oid": "6356d267123ff39764769cec"
  },
  "curp": "CURPES03",
  "nombre": "Alexis Salas Portugal",
  "fechaNat": "19-03-2000",
  "fechaInscripcion": "20-02-2018",
  "gradoAcademico": "Preescolar",
  "tutor": {
    "$oid": "6356c6fa123ff39764769cdc"
  },
  "creditoTutoria": false,
  "escuela": {
    "$oid": "6356c19b123ff39764769cd5"
  }
},{
  "_id": {
    "$oid": "6356d267123ff39764769ced"
  },
  "curp": "CURPES04",
  "nombre": "Alexis Moreno Jauregui",
  "fechaNat": "24-10-2000",
  "fechaInscripcion": "20-02-2018",
  "gradoAcademico": "Bachillerato",
  "tutor": {
    "$oid": "6356c6fa123ff39764769cdc"
  },
  "creditoTutoria": false,
  "escuela": {
    "$oid": "6356c19b123ff39764769cd5"
  }
}]
```

- **CONSULTA DE UN ALUMNO**

**RUTA** `localhost:3000/alumnos/:id`

**EJEMPLO** `localhost:3000/alumnos/6354613b44362eb42b2cf383`

```json
  "_id": {
    "$oid": "6356d267123ff39764769ced"
  },
  "curp": "CURPES04",
  "nombre": "Alexis Moreno Jauregui",
  "fechaNat": "24-10-2000",
  "fechaInscripcion": "20-02-2018",
  "gradoAcademico": "Bachillerato",
  "tutor": {
    "$oid": "6356c6fa123ff39764769cdc"
  },
  "creditoTutoria": false,
  "escuela": {
    "$oid": "6356c19b123ff39764769cd5"
  }
```