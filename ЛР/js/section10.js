//Раздел 10 Перехват и обработка событий
//положение курсора отслеживается на всей странице
body = document.getElementById('body');
//блок вывода
div_output = document.getElementById('div_output');
//обработка события нажатия клавиши
body.onkeydown = function() {
	let keys = 'Код нажатой клавиши: ' + event.code;
	//содержание блока вывода меняется при каждом событии
	div_output.innerHTML = keys;
}
//обработка события движения мыши
 body.onmousemove = function() {
	//координаты относительно экрана
	let position = 'Текущие координаты курсора: ' + event.clientX+':'+event.clientY;
	div_output.innerHTML = position;
}
