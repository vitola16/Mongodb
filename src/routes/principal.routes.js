const express = require("express");
const router = express.Router();


const {

    guardarsensor,
    registrarsensor,
    listarsensores

}= require("../controllers/principal.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

router.post("/Guardarsensor", guardarsensor);
router.get("/Registrarsensor", isAuthenticated,registrarsensor);
router.get("/Mostrarsensores", isAuthenticated, listarsensores);

module.exports = router;