const principalCtrl = {};
const Equipo = require("../models/Equipo");
// Asegúrate de que la ruta sea correcta

principalCtrl.registrarequipos =  (req, res) => {
  res.render('principal/registro');
};
principalCtrl.deleteequipo = async (req , res ) => {
  await Equipo.findByIdAndDelete(req.params.id);
  res.redirect('/Mostrarequipos')

};

principalCtrl.visualizar = async (req, res) => {
  try {
    const equipos = await Equipo.find({});

    if (!equipos || equipos.length === 0) {
      // Manejar la situación donde no se encontraron equipos
      return res.status(404).send('No se encontraron equipos');
    }

    // Extraemos los datos del campo "equipo"
    const datosEquipos = equipos.map(equipo => {
      if (Array.isArray(equipo.equipos)) {
        return equipo.equipos.map(equipoItem => ({
          nombreEquipo: equipoItem.nombreEquipo,
          consumo: equipoItem.consumo,
        }));
      }
      return []; // Si "equipos" no es un arreglo, retornar un arreglo vacío
    });
    const sumasPorEquipo = {};
equipos.forEach(equipo => {
  equipo.equipos.forEach(equipoItem => {
    if (!sumasPorEquipo[equipoItem.nombreEquipo]) {
      sumasPorEquipo[equipoItem.nombreEquipo] = 0;
    }
    sumasPorEquipo[equipoItem.nombreEquipo] += equipoItem.consumo;
  });
});

const datosParaGrafica = Object.keys(sumasPorEquipo).map(key => ({
  name: key,
  y: sumasPorEquipo[key]
}));

    // Renderizamos la vista y pasamos los datos como contexto
    res.render('principal/grafico', { equipos: datosParaGrafica });
  } catch (error) {
    console.error(error);
    // Puedes manejar el error de acuerdo a tus necesidades
    res.status(500).send('Error interno del servidor');
  }
};

// En tu controlador
principalCtrl.listarequipos = async (req, res) => {
  const listadoequipos = await Equipo.find();
  console.log(listadoequipos)
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
        // Obtén la lista actualizada de propietarios después de guardar
    req.flash ('success_msg','Equipo Registrado Correctamente')
    res.status(201).json({ message: 'Propietario y equipos guardados con éxito' });
  } catch (error) {
    console.error('Error al guardar el propietario y equipos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }


};



   
module.exports = principalCtrl;
