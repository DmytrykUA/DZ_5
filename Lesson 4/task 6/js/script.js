//Задача 3. Вивести таблицю з одним рядком і  7 стовпцями.


for (let tableLine = 0; tableLine < 1; tableLine++) {
document.write(`<table border = 4px>`)
		for (let tableRow = 1; tableRow <= 7; tableRow++) {
		document.write(`<td>${tableRow}</td>`)
}
document.write(`</table>`)
}
