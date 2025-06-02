"use strict"

function solveEquation(a, b, c) {
	let arr = [];


	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {

		return arr;
	} else if (discriminant === 0) {

		let root = -b / (2 * a);
		arr.push(root);
	} else {

		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyPercent = (percent / 100) / 12;

	const loanBody = amount - contribution;

	if (loanBody <= 0) {
		return 0;
	}

	if (monthlyPercent === 0) {
		return parseFloat(loanBody.toFixed(2));
	}

	const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));


	const totalAmount = monthlyPayment * countMonths;


	return parseFloat(totalAmount.toFixed(2));
}

// Тестирование функции с примерами из задания
console.log("Тестирование калькулятора ипотеки:");
console.log("1. calculateTotalMortgage(10, 0, 50000, 12) =", calculateTotalMortgage(10, 0, 50000, 12)); // Ожидаем: 52749.53
console.log("2. calculateTotalMortgage(10, 1000, 50000, 12) =", calculateTotalMortgage(10, 1000, 50000, 12)); // Ожидаем: 51694.54
console.log("3. calculateTotalMortgage(10, 0, 20000, 24) =", calculateTotalMortgage(10, 0, 20000, 24)); // Ожидаем: 22149.56
console.log("4. calculateTotalMortgage(10, 1000, 20000, 24) =", calculateTotalMortgage(10, 1000, 20000, 24)); // Ожидаем: 21042.09
console.log("5. calculateTotalMortgage(10, 20000, 20000, 24) =", calculateTotalMortgage(10, 20000, 20000, 24)); // Ожидаем: 0
console.log("6. calculateTotalMortgage(10, 0, 10000, 36) =", calculateTotalMortgage(10, 0, 10000, 36)); // Ожидаем: 11616.19
console.log("7. calculateTotalMortgage(15, 0, 10000, 36) =", calculateTotalMortgage(15, 0, 10000, 36)); // Ожидаем: 12479.52
