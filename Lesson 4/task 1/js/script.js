// Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.


// Введення величин
const countNumber = 100;
let evenNumber = 0;
let oddNumber = 0;

// Цикл
for (let index = 0; index < countNumber; index++) {
	let randomNum = Math.floor(Math.random() * 1000) +1;

	//Перевірка
if (randomNum % 2 === 0) {
	evenNumber++;
} else {
   oddNumber++;
}
}

// Виведення результату
if (evenNumber > oddNumber) {
	alert(`Парних чисел ${evenNumber} більше, ніж непарних ${oddNumber}`);
} else if (oddNumber > evenNumber) {
	alert(`Непарних чисел ${oddNumber} більше ніж парних чисел ${evenNumber}`);
} else {
	(`Парних і непарних чисел однакова кількість.`);
}