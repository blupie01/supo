var homeController = require('../controllers/home');
var authController = require('../controllers/authcontroller');
var navController = require('../controllers/navController');
var budgetController = require('../controllers/budgetController');
module.exports = function(app) {
  app.get('/', homeController.renderHome);
  app.get('/budgetForm', navController.renderForm);
  app.get('/budgetForm/2', navController.renderForm2);
  app.get('/grader/food', navController.renderFoodGrader);
  app.get('/budgetForm/3', navController.renderForm3);
  app.get('/grader/clothing', navController.renderClothingGrader);
  app.get('/budgetForm/4', navController.renderForm4);
  app.get('/grader/utilities', navController.renderUtilitiesGrader);
  app.get('/budgetForm/5', navController.renderForm5);
  app.get('/grader/housing', navController.renderHousingGrader);
  app.get('/budgetForm/6', navController.renderForm6);
  app.get('/grader/savings', navController.renderSavingsGrader);
  app.get('/budgetForm/7', navController.renderForm7);
  app.get('/grader/medical', navController.renderMedicalGrader);
  app.get('/budgetForm/8', navController.renderForm8);
  app.get('/grader/insurance', navController.renderInsuranceGrader);
  app.get('/budgetForm/9', navController.renderForm9);
  app.get('/grader/transportation', navController.renderTransportationGrader);
  app.get('/budgetForm/10', navController.renderForm10);
  app.get('/grader/personal', navController.renderPersonalGrader);
  app.get('/budgetForm/11', navController.renderForm11);
  app.get('/grader/entertainment', navController.renderEntertainmentGrader);
  app.get('/budgetForm/12', navController.renderForm12);
  app.get('/grader/debt', navController.renderDebtGrader);
  app.get('/graderResults', navController.results);
  app.get('/dailyTracker', navController.expenses);
  app.get('/signin', authController.signin);
  app.get('/signup', authController.signup);
  app.get('/logout', authController.logout);
};

//adding graders