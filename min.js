// 1.
var products = [1, 6, 12, 36, 22, 77];
var lastEl = products[products.length-1];

// 2.
var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');

styles[styles.length-2]='Класика';

console.log(styles.shift());

styles.unshift('Реп', 'Реггі');

//3. Створіть функцію find (arr, value), яка шукає в масиві arr значення value і повертає його номер, якщо знайдено, або -1, якщо не знайдено. 

function find(arr, value){
	for (var i = 0; i < arr.length; i++) 
		if(arr[i] === value)
			return i;
	return -1;
}

