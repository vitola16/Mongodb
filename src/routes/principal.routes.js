const express = require("express");
const router = express.Router();
const {

    guardarequipo,
    registrarequipos,
    listarequipos

}= require("../controllers/principal.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

router.post("/Guardarequipo", guardarequipo);
router.get("/Registrarequipo", isAuthenticated,registrarequipos);
router.get("/Mostrarequipos", isAuthenticated, listarequipos);


module.exports = router;