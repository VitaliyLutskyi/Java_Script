//Створити масив із 10 обєктів Student { 
//yearOfStuding: <some data> , 
//facultyName: <some data> 
//} 



var student1 = {
		yearOfStudying: 4,
		facultyName: 'FACS'
};
var student2 = {
	yearOfStudying : 3,
	facultyName : "MT"
};
var student3 = {
		yearOfStudying : 5,
		facultyName : "MT"
	};
var student4 = {
		yearOfStudying : 1,
		facultyName : "OA"
	};
var student5 = {
		yearOfStudying : 3,
		facultyName : "FN"
	};
var student6 = {
		yearOfStudying : 2,
		facultyName : "MERT"
	};
var student7 = {
		yearOfStudying : 1,
		facultyName : 'FACS'
	};
var student8 = {
		yearOfStudying : 5,
		facultyName : 'MERT'
	};
var student9 = {
		yearOfStudying : 3,
		facultyName : 'FN'
	};
var student10 = {
		yearOfStudying : 4,
		facultyName : 'OA'
	};

//а) створити окремий масив який матиме лише facultyName обєктів 
var arr = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10];
var facultyArr = arr.map(function(item){ return item.facultyName});
console.log(facultyArr);

//б) порахувати сумарне значення yearOfStuding для всіх об'єктів 
var yearsSum = arr.reduce(function(sum, item){ return sum+item.yearOfStudying}, 0);
console.log('Sum of years of studying: '+yearsSum);