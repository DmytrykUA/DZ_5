// Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.

const userCount = parseInt (prompt("Будь ласка, введіть кількість випадкових чисел:", 1));

//Цикл
for (let i = 1; i <= userCount; i++) {
	let randomNumber =  1 + Math.floor(Math.random() * 100);
	document.write(`
		<ul>
			<li>${randomNumber}</li>
		</ul>
		`);
}