const principalCtrl = {};
const Sensor = require("../models/Sensor");

principalCtrl.registrarsensor =  (req, res) => {
  res.render('principal/registro');
};

principalCtrl.listarsensores = async (req, res) => {
  const listadosensores = await Sensor.find();
  console.log(listadosensores)
  res.render('principal/listado',(listadosensores))
};
principalCtrl.guardarsensor = async (req, res) => {
const {
 nombre,
 ubicacion, 
 tipo,
 latitud,
 longitud

 } = req.body;
 

  const errors = [];
  if (!nombre) {
    errors.push({ text: "Por favor indique Nombre del sensor" });
  }
  if (!ubicacion) {
    errors.push({ text: "Por favor indique la ubicacion del docente" });
  }
  if (!tipo) {
    errors.push({ text: "Por favor indique tipo producto" });
  }
  if (!latitud) {
    errors.push({ text: "Por favor indique la latitud del producto" });
  }
  if (!longitud) {
    errors.push({ text: "Por favor indique la longitud publicación" });
  }

  
  if (errors.length > 0) {
    res.render("/Registrarsensor", {
      nombre,
      ubicacion,
      tipo,
      latitud,
      longitud
    });
  } else {
    const newSensor = new Sensor({
      nombre,
      ubicacion,
      tipo,
      latitud,
      longitud 
    });
    newSensor.user = req.user.id;
    await newSensor.save();
    req.flash("success_msg", "Producto adicionado correctamente");
    res.redirect("/about");
  }
  principalCtrl.postValorIoT = async (req, res) => {
    var DatosSensor = req.body;
    console.log (DatosSensor);
    var token = DatosSensor.token;

     respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Datos Recibidos"
     };
  };    
};
res.send(respuesta);
module.exports = principalCtrl;
