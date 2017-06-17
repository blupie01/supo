$(document).ready(function() {
	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm11 = JSON.parse(localStorage.getItem("budgetForm11"));
	console.log("budgetForm11", budgetForm11);

	var entertainmentBudget = parseInt(budgetForm11.entertainment) + parseInt(budgetForm11.vacation);
	console.log("entertainmentBudget", entertainmentBudget);

	var entertainmentBudgetPercent = (entertainmentBudget*100)/totalPay;

	var totalEntertainmentBudget = $("<h2>Your total entertainment budget is: " + entertainmentBudget + "</h2>");
	var percentOfBudget = $("<h2>Your entertainment budget is " + entertainmentBudgetPercent + "% of your total budget.</h2>");

	var suggestedBudgetPercent = 3;

	var percentDiff = entertainmentBudgetPercent - suggestedBudgetPercent;
	console.log(percentDiff);

	var grade = getGrade(percentDiff);
	console.log(grade);
	var entertainmentGrade = $("<h5>Your grade is: " + grade + "</h5>");

	$("#budgetTotal").append(totalEntertainmentBudget);
	$("#budgetPercent").append(percentOfBudget);
	$("#budgetGrade").append(entertainmentGrade);
});

$("#entertainmentGraderBack").on("click", function() {
	window.location.href = "/budgetForm/11";
});

$("#entertainmentGraderNext").on("click", function() {
	window.location.href = "/budgetForm/12";
});