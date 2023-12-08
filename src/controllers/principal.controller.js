const principalCtrl = {};
const Equipo = require("../models/Equipo");
// Asegúrate de que la ruta sea correcta

principalCtrl.registrarequipos =  (req, res) => {
  res.render('principal/registro');
};

principalCtrl.listarequipos = async (req, res) => {
  const listadoequipos = await Equipo.find();
  //console.log(listadosensores)
  res.render('principal/listado',{listadoequipos})
};
principalCtrl.guardarequipo = async (req, res) => {

  try {
    // Obtén los datos del formulario desde la solicitud
    const { propietario, equipos } = req.body;

    // Crea un nuevo registro de propietario
    const nuevoPropietario = new Equipo({
      propietario,
      equipos,
    });

    // Guarda el propietario en la base de datos
    await nuevoPropietario.save();

    res.status(201).json({ message: 'Propietario y equipos guardados con éxito' });
  } catch (error) {
    console.error('Error al guardar el propietario y equipos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }


};



   
module.exports = principalCtrl;
