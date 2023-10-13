const router = require("express").Router();

const {
  renderSignUpForm,
  singup,
  editarUsuario,
  renderSigninForm,
  guardarUsuario,
  signin,
  logout
} = require("../controllers/users.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// Routes
router.get("/users/editar/:id", isAuthenticated,editarUsuario);
router.post("/users/guardar", isAuthenticated,guardarUsuario);

router.get("/users/signup", renderSignUpForm);


router.post("/users/signup", singup);

router.get("/users/signin", renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout); 

module.exports = router;
