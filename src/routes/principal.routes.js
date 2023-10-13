const express = require("express");
const router = express.Router();


const {

    irCalcularDimensiones,
    iracalcular,
    irparametros,
    irResultados

}= require("../controllers/principal.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

router.get("/principal/calculardimensiones", irCalcularDimensiones);
router.get("/principal/irparametros", isAuthenticated,irparametros);

router.post("/principal/iracalcular", isAuthenticated, iracalcular);

module.exports = router;