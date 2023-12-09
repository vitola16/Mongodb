const express = require("express");
const router = express.Router();
const {

    guardarequipo,
    registrarequipos,
    listarequipos,
    deleteequipo

}= require("../controllers/principal.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");
// ruta para el boton guardar
router.post("/Guardarequipo", guardarequipo);
// ruta para registrar un nuevo equipo
router.get("/Registrarequipo", isAuthenticated,registrarequipos);
// ruta para mostrar los equipos registrados
router.get("/Mostrarequipos", isAuthenticated, listarequipos);
// eliminar equipos ya resgistrados
router.delete("/delete-equipo/:id", deleteequipo , isAuthenticated);

module.exports = router;