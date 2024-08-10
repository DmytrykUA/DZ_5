// Задача -1. Вивести на екран номери місяців весни і літа (від 3 до 8)

for (let month = 3; month <=8; month++) {
	month <6
	? document.write (`<p>Номер весни: ${month}</p>`)
	: document.write (`<p>Номер літа: ${month}</p>`)
}


//Альтернатива
// for (let month = 3; month <=8; month++) {
// 	if (month <6) {
// 	   document.write(`<p>Номер весни: ${month}</p>`);
// 	} else {
// 		document.write(`<p>Номер літа: ${month}</p>`);
// 	}
// }