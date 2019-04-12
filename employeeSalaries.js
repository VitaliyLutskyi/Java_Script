//Є об'єкт employeeSalaries із зарплатами працівників. Напишіть код, який виведе суму всіх зарплат працівників . 
//Якщо об'єкт порожній, то результат повинен бути 0. 
"use strict"
var employeeSalaries = {2:2000};

employeeSalaries[47]=1200;
employeeSalaries[42]=1000;
employeeSalaries[35]=1600;
console.log(employeeSalaries);

var sum=0;
for (var employee in employeeSalaries)
	sum+=employeeSalaries[employee];
console.log("Сума зарплат працівників: " + sum);