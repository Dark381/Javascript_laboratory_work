//Раздел 11 Формы
//элементы формы и блока вывода результата
calculator = document.getElementById("calculator");	

div_result = document.getElementById('result');
//обработка события отправки формы
calculator.onsubmit = function() {
	let value1 = 1*this.value1.value;//преобразование переменной в число
	let value2 = 1*this.value2.value;
	let operation = this.operation.value;
	//функция вычисления
	let result = calculation(value1, value2, operation);
	
	if(!!result == false){//Nan, undefinded и null имеют значение false, значит я могу проверить вернулось ли число в результате вычисления, преобразовав результат в логическую переменную
		div_result.innerHTML = 'Неверный ввод данных';
	}
	else{
		div_result.innerHTML = 'Результат вычисления = '+result;
	}
	return false;		
};	

function calculation(value1, value2, operation){
	switch(operation){
		case '+':{return value1 + value2;}
		case '-':{return value1 - value2;}		
		case '*':{return value1 * value2;}	
		case '/':{return value1 / value2;}		
	}	
}

