const express = require("express");
const router = express.Router();


const {
    iranecesitadoss,
    addnecesitados,
    irguardarnecesitados

}= require("../controllers/baterias.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

router.get("/irabaterias", iranecesitadoss);

router.get("/addbaterias", addnecesitados);
router.post("/bateria/guardarbateria", irguardarnecesitados);

module.exports = router;