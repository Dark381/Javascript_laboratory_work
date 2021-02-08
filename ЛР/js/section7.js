//Раздел 7 Объект Document
function script1(){//нумерация скриптов соответствующая нумерации заданий	
	document.write('<p id = "test" >Лучшее время года – ...!</p>');//создание элемента на странице
	elem= document.getElementById("test");//получение элемента по id
	time_of_year = ["Весна", "Лето", "Осень", "Зима"];//массив времен года
	let i = 0;
	function change_time(){
		elem.innerHTML = '<p>Лучшее время года – '+time_of_year[i]+'!</p>';
		i++;
		if(i==time_of_year.length){//когда i дойдет до конца массива, то сбросится значение
			i=0;
		}
	}
	setInterval(change_time, 2000);//вызов функции каждые 2 секунды
	document.write('<p><a class = "link" href="index.html">список заданий</a></p>');
}   


//кнопки для простого запуска заданий

const Button_7_1 = document.getElementById('task_7.1');
Button_7_1.addEventListener('click', script1);
