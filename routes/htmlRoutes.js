var homeController = require('../controllers/home');
var navController = require('../controllers/navController');
module.exports = function(app) {
  app.get('/', homeController.renderHome);
  app.get('/budgetForm', navController.renderForm);
};