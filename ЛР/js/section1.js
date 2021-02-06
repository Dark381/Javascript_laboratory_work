//Раздел 1 Элементы языка
function script1(){//нумерация скриптов соответствующая нумерации заданий
	let str = '123';
	let num = 123;
	var flag = true;//кроме let можно использовать var для объявления переменной
	var txt = "true";
	const bigInt = 1234567890123456789012345678901234567890n;//n обозначает тип bigInt
	
	alert("Результат выведен в консоль");
	
	console.log('Тип данных str = ' + typeof(str));
	console.log('Тип данных num = ' + typeof(num));
	console.log('Тип данных flag = ' + typeof(flag));
	console.log('Тип данных txt = ' + typeof(txt));
	console.log('Тип данных bigInt = ' + typeof(bigInt));
}

function script2(){
	//ввод данных через модальные окна
	let a1 = prompt("Введите 1ю переменную");
	let a2 = prompt("Введите 2ю переменную");
	alert("Результат выведен в консоль");
	if(a1 === a2){//тройное равно для сравнения не только значения, но и типа данных
		console.log("равна второй");		
	}
	if(a1 < a2){
		console.log("Меньше второй");		
	}
	if(a1 <= a2){// это условие объеденение 2х вышеперечисленных, поэтому будет случай выполнения 2х условий
		console.log("Меньше или равна второй");		
	}
	if(a1 > a2){
		console.log("больше второй");		
	}

}
//кнопки для простого запуска заданий

const Button_1 = document.getElementById('task1');
Button_1.addEventListener('click', script1);

const Button_2 = document.getElementById('task2');
Button_2.addEventListener('click', script2);