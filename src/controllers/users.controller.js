const usersCtrl = {};


// Models
const User = require('../models/User');

// Modules
const passport = require("passport");

usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};


usersCtrl.editarUsuario = async (req, res) => {
  const usuario = await User.findById( req.params.id );
  console.log(usuario);
  res.render('users/editarusuario', usuario);
};

usersCtrl.guardarUsuario = (req, res) => { 
  const idUsuario = req.body.id;
  // console.log(idUsuario);
  // console.log(req.body.facultad);
  User.findByIdAndUpdate(idUsuario, {
    name: req.body.name,
    identificacion: req.body.identificacion,
    facultad: req.body.facultad,
    programa: req.body.programa,
    email: req.body.email
    
  }, (error, idUsuario)=> {
      console.log(error,idUsuario)
      res.redirect('/docentes/listado');
  })
  
}

usersCtrl.singup = async (req, res) => {
  let errors = [];
  const { name, email, identificacion, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "Password no coincide." });
  }
  if (password.length < 6) {
    errors.push({ text: "Passwords debe tener al menos 6 caracteres" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      identificacion,
      password,
      confirm_password
    });
  } else {
    // Look for email coincidence
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "El mail ya está registrado");
      res.redirect("/users/signup");
    } else {
      // Saving a New User
      const newUser = new User({ name, email, identificacion, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "Registro exitoso");
      res.redirect("/users/signin");
    }
  }
};

usersCtrl.renderSigninForm = (req, res) => {
  res.render("users/signin");
  console.log("aquiii")
};

usersCtrl.signin = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/signin",
    failureFlash: true


  });

usersCtrl.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

module.exports = usersCtrl;