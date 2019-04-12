"use strict"
function operate(a, b, type){
	try{
		var result;
		switch (type){
		case '+':
			result = a+b;
			break;
		case '-':
			result = a-b;
			break;
		case '*':
			result = a*b;
			break;
		case '/':
			result = a/b;
			break;
		}
		if ((result === 0 || result*2) && !(a==='') && !(b===''))
			return result;
		else
			return "Не коректно введено дані";
	}catch(err){
		console.log("Не коректно введено дані");
	}
	
}

console.log(operate(7, 56.23, ''));
console.log(operate(24, 2.36, '/'));
console.log(operate(12, '', '+'));
