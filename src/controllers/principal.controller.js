const principalCtrl = {};
const Equipo = require("../models/Equipo");

principalCtrl.registrarsensor =  (req, res) => {
  res.render('principal/registro');
};

principalCtrl.listarsensores = async (req, res) => {
  const listadosensores = await Equipo.find();
  console.log(listadosensores)
  res.render('principal/listado',(listadosensores))
};
principalCtrl.guardarsensor = async (req, res) => {
const {
 consumo,
 tipos

 } = req.body;
 

  const errors = [];
  if (!consumo) {
    errors.push({ text: "Por favor indique la ubicacion del docente" });
  }
  if (!tipos) {
    errors.push({ text: "Por favor indique la ubicacion del docente" });
  }

  if (errors.length > 0) {
    res.render("/Registrarsensor", {
      consumo,
      tipos

    });
  } else {
    const newEquipo = new Equipo({

      consumo,
      tipo
 
    });
    newEquipo.user = req.user.id;
    await newEquipo.save();
    req.flash("success_msg", "Producto adicionado correctamente");
    res.redirect("/about");
  }

  };    
module.exports = principalCtrl;
