const handlebars = require('express-handlebars');

// Crear una instancia de Express Handlebars
const hbs = handlebars.create({
  // Aquí puedes tener otras configuraciones

  // Definir helpers personalizados
  helpers: {
    json: function(context) {
      return JSON.stringify(context);
    }
  }
});

// Configurar Handlebars como motor de plantillas
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');