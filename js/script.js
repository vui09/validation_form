
const users = [
	{
		name: 'Pavel',
		summary: 20000,
		age: 20
	},
	{
		name: 'Ivan',
		summary: 15000,
		age: 35
	},
	{
		name: 'Boris',
		summary: 25000,
		age: 23
	},
	{
		name: 'July',
		summary: 23000,
		age: 25
	},
	{
		name: 'Pavel',
		summary: 30000,
		age: 27
	},
	{
		name: 'Pavel',
		summary: 18000,
		age: 30
	}
]

// const newUsers = users.filter(function(item) {
// 	return item.age > 25;
// });

const newUsers = users.filter(item => item.age > 25)
const newUsers2 = newUsers.reduce((sum, current) => sum + current.summary, 0);

// console.log(newUsers);
// console.log(newUsers2);

// Обьединить два массива в один (const arr1 = [1,2,3], const arr2 = [4,5,6])

const array1 = [1,2,3];

const array2 = [4,5,6];

const array3 = array1.concat(array2);

//console.log(array3);

// Добавить в конец массива элементы (метод push)

array1.push(7, 8);

//const testArr = [...array1, 7, 8]
//console.log('===>testArr', testArr);

//console.log(array1);

// Разбить строку на массив символов

let str = 'abcd';
const array5 = str.split('');
//console.log(array5);


// Сделать из массива [1,2,3,4,5] -> [1, 4, 5] (Метод slice)

const array6 = [1,2,3,4,5];

const a = array6.splice(1, 2)

// console.log('===>a', a);
// console.log(a);

// Отсортировать массив по возрастанию и убыванию

const arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => a - b);
console.log(arr2);

const arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log( arr );


//Сделать из объекта {name: ‘Boris’, age: 24} массив ключей/массив значений

const object1 = {
	name: 'Boris',
	age: 24
};

console.log(Object.entries(object1));
// console.log(Object.keys(object1));
// console.log(Object.values(object1));


// Bonus-task: Сделать функцию, которая на вход принимает массив чисел, а возвращает массив этих же чисел в квадрате в порядке возрастания и записывает в строку оператор ‘-’)(.join)

const arr4 = [1, 5, 3, 2]

// let sqr = arr4.map(function(num) {
// 	return num * num;
// });

const newArrFunc = (arr) => {
	return arr
		.map(num => num * num)
		.sort((a, b) => a - b)
		.join('-')
}

console.log('newArr', newArrFunc(arr4));
asdasdaa()
function asdasdaa() {
	console.log('===>1121212', 1121212);
}

asdasd()

const asdasd = function() {
	console.log('===>55555555', 55555555);
}

hjshdaj()

const hjshdaj = () => console.log('===>333333', 333333);

