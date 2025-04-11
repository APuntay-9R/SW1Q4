function large(){
	var sandwichPrice = 125.80;
	var roundedPrice = Math.round(sandwichPrice);

	window.alert('The price of a chicken sandwich is ' + roundedPrice + 'php.');
}

function standard(){
	var miniSandwiches = 81;
	var standardSandwiches = Math.sqrt(miniSandwiches);

	window.alert('The number of standard sandwiches is ' + standardSandwiches + '.');
}

function difference(){
	var priceDifference = -15.50; //
	var absoluteDifference = Math.abs(priceDifference);

	window.alert('The difference between the prices is ' + absoluteDifference + 'php.');
}

function total(){
	var basePrice = 150;
	var totalCost = basePrice ** 2;

	window.alert('The total cost of a large order of double-decker chicken sandwiches is ' + totalCost + 'php.');
}

function sales(){
	var dailySales = [2500, 3200, 2800, 3500];
	var maxSales = Math.max(...dailySales);

	window.alert('We earn ' + maxSales + ' in daily sales.');
}

function discounted(){
	var sandwichPrice = 135.75;
	var discountedPrice = sandwichPrice - (sandwichPrice * 0.15);
	var roundedPrice = Math.round(discountedPrice);

	window.alert('A 15% off sandwich is ' + roundedPrice + 'php.');
}

function family(){
	var miniSandwiches = 121;
	var standardSandwiches = Math.sqrt(miniSandwiches);
	var familyPack = Math.pow(standardSandwiches, 2);

	window.alert('The price of a family pack of mini sandwiches is ' + familyPack + 'php.');
}

function adjustment(){
	var priceDifference = -22.50;
	var absoluteDifference = Math.abs(priceDifference);
	var finalAdjustment = absoluteDifference * 2;

	window.alert('The final adjustment is ' + finalAdjustment + '.');
}

function rt(){
	var basePrice = 160;
	var taxRate = 0.12;
	var totalPrice = basePrice + (basePrice * taxRate);
	var roundedTotal = Math.round(totalPrice * 100) / 100;

	window.alert('The rounded total is ' + roundedTotal + 'php.');
}

function avgsales(){
	var dailySales = [2750, 3100, 2950, 3300, 3050];
	var minSales = Math.min(...dailySales);
	var maxSales = Math.max(...dailySales);
	var averageSales = (minSales + maxSales) / 2;

	window.alert('Average sales: ' + averageSales + '.');
}