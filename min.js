
function compareNumbers(a, b){
	return a-b;
}
function compareNumbersDESC(a, b){
	return b-a;
}
var arr = [2, -15, 3, 6, 10, -2, 0, -17, 60, 53, -27, 12, -63, 20, 12, -18, 21, -71, 23, 41];
console.log(arr);

arr.sort(compareNumbers);
console.log("Sorted by ASC: "+arr);

arr.sort(compareNumbersDESC);
console.log("Sorted by DESC: "+arr);

arrPositive = arr.filter(function(item){
	return item>=0;
});
console.log("Positive values: "+arrPositive);

arrNegative = arr.filter(function(item){
	return item<0;
});
console.log("Negative values: "+arrNegative);
