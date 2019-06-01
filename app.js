// from data.js
var tableData = data;
console.log(tableData);
alienTable(tableData);
// YOUR CODE HERE!
function alienTable(newTable){


var tbody = d3.select("tbody");
tbody.html(" ");
newTable.forEach(function(alienReport){
	console.log(alienReport);
	var row = tbody.append("tr");
	Object.entries(alienReport).forEach(function([key, value]){
		console.log(key, value);
		var cell = row.append("td");
		cell.text(value);
	});
});}

var submit = d3.select("#filter-btn");

submit.on("click", function() {
	d3.event.preventDefault();
	var inputDate = d3.select("#datetime");
	var inputValue = inputDate.property("value")
	console.log(inputValue);
	var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
	console.log(filteredData);
	alienTable(filteredData);
});