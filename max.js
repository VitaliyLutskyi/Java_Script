// 4.Створіть функцію filterRange (array, a, b), яка приймає масив чисел array і повертає новий масив, який містить тільки числа з array з діапазону від a до b. 

function filterRange (array, a, b){
	
	var newArray = [];
	
	for (var i = 0; i < array.length; i++) 
		if (array[i]>=a && array[i]<=b)
			newArray.push(array[i]);
	
	return newArray;
}

//5. Напишіть функцію camelize (str), яка перетворює такі рядки «my-short-string» в «myShortString». 
//	Тобто, дефіси видаляються, а всі слова після них отримують велику літеру. 

function camelize(str){
	
	var arr = str.split('-');
	for (var i = 1; i < arr.length; i++) 
		arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
	
	str = arr.join('');
	return str;
}

